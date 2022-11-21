FROM arm64v8/node:latest

WORKDIR /app

COPY package.json yarn.lock /app/
RUN cd /app && yarn install 

COPY . /app