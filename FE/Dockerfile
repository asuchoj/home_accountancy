FROM node:alpine

WORKDIR /app

COPY package.json .
COPY package-lock.json .
RUN npm i

COPY . .
# RUN npm test # How to configure Protractor to use PhantomJS?

ENTRYPOINT npm start