#!/bin/bash

# We are storing the running container id 
container_id='docker ps | awk " " '{print $1}''

# Using the container id we are stopping the running container
docker rm -f container_id
