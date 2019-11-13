#define base image 
FROM node:10

# define app directory in side containder
WORKDIR /usr/src/app

#Install app dependencies

COPY package*.json ./
RUN npm install

COPY . .
EXPOSE 8080

CMD [ "node", "server.js"]



