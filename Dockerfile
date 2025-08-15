# Simplified single-stage build for Coolify
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --silent

# Copy source code
COPY . .

# Build the application
RUN npm run build

# List build output for debugging
RUN echo "=== Build output ===" && ls -la dist/

# Production stage with nginx
FROM nginx:alpine

# Install wget for health checks
RUN apk add --no-cache wget

# Remove default nginx config
RUN rm /etc/nginx/conf.d/default.conf

# Create simple nginx config directly in Dockerfile
RUN echo 'server {' > /etc/nginx/conf.d/default.conf && \
    echo '    listen 80;' >> /etc/nginx/conf.d/default.conf && \
    echo '    server_name _;' >> /etc/nginx/conf.d/default.conf && \
    echo '    root /usr/share/nginx/html;' >> /etc/nginx/conf.d/default.conf && \
    echo '    index index.html;' >> /etc/nginx/conf.d/default.conf && \
    echo '    location / {' >> /etc/nginx/conf.d/default.conf && \
    echo '        try_files $uri $uri/ /index.html;' >> /etc/nginx/conf.d/default.conf && \
    echo '    }' >> /etc/nginx/conf.d/default.conf && \
    echo '    location /health {' >> /etc/nginx/conf.d/default.conf && \
    echo '        return 200 "healthy\\n";' >> /etc/nginx/conf.d/default.conf && \
    echo '        add_header Content-Type text/plain;' >> /etc/nginx/conf.d/default.conf && \
    echo '    }' >> /etc/nginx/conf.d/default.conf && \
    echo '}' >> /etc/nginx/conf.d/default.conf

# Copy built files
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy public files (including PDF)
COPY --from=builder /app/public /tmp/public
RUN cp -r /tmp/public/* /usr/share/nginx/html/ 2>/dev/null || true && \
    rm -rf /tmp/public

# Verify files are in place
RUN echo "=== Final file check ===" && \
    ls -la /usr/share/nginx/html/ && \
    echo "=== index.html content ===" && \
    head -5 /usr/share/nginx/html/index.html 2>/dev/null || echo "No index.html found!" && \
    echo "=== nginx config ===" && \
    cat /etc/nginx/conf.d/default.conf

# Expose port
EXPOSE 80

# Add health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
    CMD wget --no-verbose --tries=1 --spider http://localhost/health || exit 1

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
