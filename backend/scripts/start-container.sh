docker run -it \
    --name your-hood-db \
    --mount type=bind,src="$(pwd)",dst=//code \
    -e POSTGRES_PASSWORD=password \
    -d postgres:latest \