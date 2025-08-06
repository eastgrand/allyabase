#!/bin/bash

# Build the flexible allyabase Docker image
echo "Building flexible allyabase Docker image..."
docker build -f Dockerfile-flexible -t allyabase-flexible .

echo "Flexible allyabase image built successfully!"
echo ""
echo "Usage examples:"
echo "  Base 1 (40xx ports): docker run -e PORT_OFFSET=1000 -p 4000-4011:4000-4011 -p 4525:4525 -p 8277:8277 -p 8243:8243 allyabase-flexible"
echo "  Base 2 (50xx ports): docker run -e PORT_OFFSET=2000 -p 5000-5011:5000-5011 -p 5525:5525 -p 9277:9277 -p 9243:9243 allyabase-flexible"
echo "  Base 3 (60xx ports): docker run -e PORT_OFFSET=3000 -p 6000-6011:6000-6011 -p 6525:6525 -p 10277:10277 -p 10243:10243 allyabase-flexible"