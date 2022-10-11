FROM node:16.16.0-slim

RUN apt install bash

WORKDIR /home/node/app

USER node

CMD [ ".docker/start.sh" ]