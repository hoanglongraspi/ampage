#!/bin/bash

# Test script for local Docker container debugging
echo "Building Docker image..."
docker build -t auspex-medix-test .

if [ $? -ne 0 ]; then
    echo "❌ Build failed!"
    exit 1
fi

echo "✅ Build successful!"

echo "Starting container..."
docker run -d --name auspex-test -p 8080:80 auspex-medix-test

if [ $? -ne 0 ]; then
    echo "❌ Container start failed!"
    exit 1
fi

echo "✅ Container started!"

# Wait a bit for container to initialize
sleep 3

echo "Testing health endpoint..."
curl -f http://localhost:8080/health

if [ $? -eq 0 ]; then
    echo "✅ Health check passed!"
else
    echo "❌ Health check failed!"
fi

echo "Testing main page..."
curl -f http://localhost:8080/ > /dev/null

if [ $? -eq 0 ]; then
    echo "✅ Main page accessible!"
else
    echo "❌ Main page failed!"
fi

echo "Container logs:"
docker logs auspex-test

echo "Cleaning up..."
docker stop auspex-test
docker rm auspex-test

echo "Test completed!"
