# Getting Started with the Client side of the Docker todo app

This readme covers deploying a react app using docker and nginx, building out the react app before deployment

- Requirements
    - ensure docker is installed, 
    - ensure the server side of the app is installed (else the front end will not work)

- Configuration
configure environmental variables
```sh
cp .env.example .env
```
update the content of `.env` to meet the backend details. i.e the backend url and port (if required)


- build the app with Dockerfile
```sh
docker build -t client-node .
```
this will build the client side image, 

- run the just built image 
```sh
docker run --name client-node -d -p 80:80 client-node
```
this will start the image as a container on port 80. you can always change the port.
