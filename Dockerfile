FROM node:18-alpine AS builder

WORKDIR /app
COPY *.json ./
COPY .env ./.env
COPY public ./public
COPY src ./src
RUN npm install

EXPOSE 3000
CMD npm run start
