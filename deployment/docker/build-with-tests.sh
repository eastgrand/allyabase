#!/bin/bash

# Build the allyabase Docker image with integrated testing
echo "🔨 Building allyabase Docker image with integrated testing..."

docker build -f Dockerfile-with-tests -t allyabase-with-tests .

echo "✅ allyabase-with-tests image built successfully!"
echo ""
echo "🚀 Usage Examples:"
echo ""
echo "Run Base 1 with both services and tests:"
echo "  docker run -e PORT_OFFSET=1000 -e RUN_MODE=both allyabase-with-tests"
echo ""
echo "Run Base 1 services only (for external testing):"
echo "  docker run -d -e PORT_OFFSET=1000 -e RUN_MODE=services -p 4000-4011:4000-4011 -p 3525:3525 -p 3999:3999 -p 8277:8277 -p 8243:8243 --name base1-services allyabase-with-tests"
echo ""
echo "Run tests against existing services:"
echo "  docker run -e RUN_MODE=tests --network host allyabase-with-tests"
echo ""
echo "Run with failure tolerance:"
echo "  docker run -e PORT_OFFSET=1000 -e CONTINUE_ON_FAILURE=true allyabase-with-tests"
echo ""
echo "Keep services running after tests:"
echo "  docker run -e PORT_OFFSET=1000 -e KEEP_SERVICES_RUNNING=true allyabase-with-tests"