FROM node:alpine

WORKDIR /usr/src/app

RUN npm install nodemon -g

COPY . /usr/src/app

RUN npm install

EXPOSE 3000

CMD ["nodemon", "app.js"]