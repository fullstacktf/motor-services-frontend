docker stop front-end
docker rm front-end
docker rmi -f vue-app
docker build -t vue-app . && docker run --name front-end -p 8080:80 vue-app