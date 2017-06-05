# Elixir Disassembler Service

[![Build Status](https://travis-ci.org/jkeam/elixir_disassembler_service.svg?branch=master)](https://travis-ci.org/jkeam/elixir_disassembler_service)

A micro-service that disassembles your Elixir code.

## Setup

### Prereq
1.  Docker

### Build Image
Some quick and useful docker commands:
  ```
  # connect to the running instance
  docker exec -it <container id> /bin/bash

  # run an image as a container
  docker run -i -t <container id> /bin/bash

  # see all containers
  docker ps -a

  # see all images
  docker images

  # delete container
  docker rm <container id>

  # delete image
  docker rmi <image id>
  ```

#### Elixir v1.4.4
1.  Build the image from the Dockerfile
  ```
  docker build -t elixirbytes/elixir144-diss-service -f ./dockerfiles/elixir144_dockerfile .
  ```

2.  Run docker
  ```
  docker run -p 8144:8144 -d -e ENV_PORT=8144 elixirbytes/elixir144-diss-service
  ```

3.  Ensure its running
  ```
  curl -i localhost:8144
  ```

#### Elixir v1.3.4
1.  Build the image from the Dockerfile
  ```
  docker build -t elixirbytes/elixir134-diss-service -f ./dockerfiles/elixir134_dockerfile .
  ```

2.  Run docker
  ```
  docker run -p 8134:8134 -d -e ENV_PORT=8134 elixirbytes/elixir134-diss-service
  ```

3.  Ensure its running
  ```
  curl -i localhost:8134
  ```
