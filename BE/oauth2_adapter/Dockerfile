FROM node:alpine

WORKDIR /app

COPY package.json .
COPY package-lock.json .
RUN npm install

COPY . .
RUN npm test

ENTRYPOINT npm start