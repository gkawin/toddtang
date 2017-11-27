FROM node:8.9.1

MAINTAINER Kawin Glomjai

WORKDIR /code/client

COPY package.json /code/client
RUN npm install

COPY . /code/client
EXPOSE 9000
