# Auspex Medix Vision - Docker Deployment Guide

This guide provides instructions for deploying the Auspex Medix Vision React application using Docker.

## Prerequisites

- Docker Engine 20.10+ 
- Docker Compose 2.0+
- At least 1GB RAM available
- Port 80 available on the host system

## Quick Start

### Option 1: Using Docker Compose (Recommended)

```bash
# Clone the repository (if not already done)
git clone <repository-url>
cd auspex-medix-vision

# Build and start the application
docker-compose up -d

# View logs
docker-compose logs -f

# Stop the application
docker-compose down
```

### Option 2: Using Docker directly

```bash
# Build the image
docker build -t auspex-medix-vision .

# Run the container
docker run -d \
  --name auspex-medix-app \
  -p 80:80 \
  --restart unless-stopped \
  auspex-medix-vision

# View logs
docker logs -f auspex-medix-app

# Stop the container
docker stop auspex-medix-app
docker rm auspex-medix-app
```

## Configuration

### Environment Variables

The application supports the following environment variables:

- `NODE_ENV`: Set to `production` for production deployment
- `PORT`: Internal container port (default: 80)

### Custom Port

To run on a different port (e.g., 8080):

```bash
# Docker Compose
# Edit docker-compose.yml and change ports to "8080:80"

# Docker direct
docker run -d -p 8080:80 --name auspex-medix-app auspex-medix-vision
```

## Features

### Multi-Stage Build
- **Stage 1**: Node.js Alpine image for building the React application
- **Stage 2**: Nginx Alpine image for serving static files

### Security Features
- Non-root user execution
- Security headers (CSP, X-Frame-Options, etc.)
- Hidden files and backup files blocked
- Proper file permissions

### Performance Optimizations
- Gzip compression enabled
- Static asset caching (1 year for assets, 1 day for PDFs)
- Optimized nginx configuration
- Health check endpoint at `/health`

### PDF Support
- Dedicated handling for PDF files
- Proper Content-Type headers
- Inline display configuration for FCOI PDF

## Accessing the Application

Once deployed, the application will be available at:

- **Main Site**: http://localhost (or your configured domain)
- **FCOI Policy**: http://localhost/FCOI
- **Health Check**: http://localhost/health

## Monitoring

### Health Checks

The application includes built-in health checks:

```bash
# Check container health
docker ps

# Manual health check
curl http://localhost/health
```

### Logs

```bash
# Docker Compose
docker-compose logs -f

# Docker direct
docker logs -f auspex-medix-app
```

## Production Deployment

### Reverse Proxy Setup

For production, consider using a reverse proxy like Traefik or Nginx:

```yaml
# Example Traefik labels (already included in docker-compose.yml)
labels:
  - "traefik.enable=true"
  - "traefik.http.routers.auspex-medix.rule=Host(`yourdomain.com`)"
  - "traefik.http.services.auspex-medix.loadbalancer.server.port=80"
```

### SSL/TLS

For HTTPS, configure your reverse proxy to handle SSL termination, or use services like:
- Let's Encrypt with Certbot
- Cloudflare
- AWS Application Load Balancer

### Resource Limits

```yaml
# Add to docker-compose.yml under the service
deploy:
  resources:
    limits:
      memory: 512M
      cpus: '0.5'
    reservations:
      memory: 256M
      cpus: '0.25'
```

## Troubleshooting

### Common Issues

1. **Port 80 already in use**
   ```bash
   # Check what's using port 80
   sudo lsof -i :80
   
   # Use different port
   docker run -p 8080:80 auspex-medix-vision
   ```

2. **PDF not loading**
   - Ensure the PDF file is in the `public/` directory
   - Check nginx logs: `docker logs auspex-medix-app`

3. **Build fails**
   ```bash
   # Clear Docker cache
   docker system prune -a
   
   # Rebuild without cache
   docker build --no-cache -t auspex-medix-vision .
   ```

### Performance Tuning

For high-traffic deployments:

1. **Enable HTTP/2** (requires reverse proxy)
2. **Use CDN** for static assets
3. **Scale horizontally** with multiple containers
4. **Monitor resource usage**

## Maintenance

### Updates

```bash
# Pull latest changes
git pull

# Rebuild and restart
docker-compose down
docker-compose up -d --build
```

### Cleanup

```bash
# Remove unused images
docker image prune

# Remove all stopped containers
docker container prune

# Full cleanup
docker system prune -a
```

## Support

For issues related to deployment, check:
1. Docker logs
2. Nginx configuration
3. Network connectivity
4. File permissions

The application follows medical/healthcare industry standards for security and compliance.
