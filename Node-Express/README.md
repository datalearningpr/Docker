# Node-Express

```
# build the image
docker build -t node-express .

# run the container
docker run --rm -it -p 5000:3000 --name node-express-dev node-express

# run the container with daemon mode
docker run -d -p 5000:3000 --name node-express-dev node-express

# run the container with mapping local folder to container
# this only works if the local folder contains everything needed
docker run --rm -it -p 5000:3000 -v {local folder}:/usr/src/app --name node-express-dev node-express
```