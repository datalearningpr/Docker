# Docker

Docker is a computer program that performs operating-system-level virtualization, also known as “containerization”. It makes developing much easier.

- Try new software/program easily. One docker command will take care of everything.
- Easy to present development result, no need to worry about the environment issue will mess up the presentation
- Avoid the embarrassment that “it only runs in my machine”
- Easy to decouple applications to microservices.
- Easy for deployment

There are few examples(subfolders) of showing how to use Dockerfile, docker-compose to set up environment, using open source software etc.

```
# containers
docker ps -a
# exec command in containers
docker exec -it exec sh
# check logs
docker logs abc
# stop all containers
docker stop $(docker ps -aq)
# remove all containers
docker rm $(docker ps -aq)
# images
docker images
# remove all docker images
docker rmi $(docker images -q)
# build image from Dockerfile
docker build -t abc .
# run container from image
docker run --rm -it -p 5000:80 -v c:\abc:/data --name example image:alpine
# run container deamon mode
docker run -d -p 5000:80 -v c:\abc:/data --name example image:alpine
# use compose file
docker-compose up -d
# use compose file rebuild
docker-compose up --rebuild
# stop compose
docker-compose down
# export container
docker export -o abc.tar abc
# import container
docker import abc.tar abc
```
