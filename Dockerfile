FROM node:18-alpine

WORKDIR /usr/src/app

COPY ./package.json ./

RUN npm install

COPY . .

RUN npm run prisma:generate

RUN npm run build

CMD npm run prisma:deploy && npm run start
