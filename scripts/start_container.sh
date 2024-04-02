#!/bin/bash

# Pull the image from Docker hub
docker pull priyam14/react-weather-app:latest

#Run the docker container
docker run -d -p 3000:3000 priyam14/react-weather-app:latest
