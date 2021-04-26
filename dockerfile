FROM node:14.16.1-alpine3.12

WORKDIR /app

COPY . /app

RUN npm install

RUN npm run build

EXPOSE 8080

CMD [ "npm", "run", "production" ]