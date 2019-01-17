FROM node:8.12.0

USER root

RUN mkdir /home/node-rest-api-jwt

WORKDIR /home/node-rest-api-jwt

COPY . /home/node-rest-api-jwt

RUN npm install bcryptjs body-parser express jsonwebtoken mongoose morgan --save

RUN npm install nodemon -g

EXPOSE 3000

ENTRYPOINT["node", "server.js"]