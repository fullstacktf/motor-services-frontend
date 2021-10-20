docker build . -t frontend-nginx:test && \
docker run --rm --name server-container -p 8080:80 frontend-nginx:test
