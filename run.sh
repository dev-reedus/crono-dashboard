IMAGE="crono-dashboard"
CONTAINER="crono-dashboard"
PORT="${PORT:-8088}"

echo "*****************************"
echo "* Building container image *"
echo "*****************************"
echo ""

docker build --build-arg VITE_MOCK_ENABLED=true -t "$IMAGE" .

if docker ps -a --format '{{.Names}}' | grep -q "^${CONTAINER}$"; then
    echo "*****************************"
    echo "Stopping and removing existing container '$CONTAINER'..."
    echo "*****************************"
    echo ""
  docker rm -f "$CONTAINER"
fi

echo "*****************************"
echo "* Running crono-dashboard container on port 8088 *"
echo "*****************************"
echo ""

docker run \
  --name "$CONTAINER" \
  --detach \
  --publish "${PORT}:80" \
  --restart unless-stopped \
  "$IMAGE"

echo "*************************************"
echo "✅ Container is up and running, at http://localhost:8088"
echo "*************************************"
echo ""
