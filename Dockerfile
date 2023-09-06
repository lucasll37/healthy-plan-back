FROM node:18-alpine

WORKDIR /usr/src/app

COPY ./package.json ./

RUN npm i

COPY . .

RUN npm run prisma:generate

RUN npm run build

EXPOSE 80

EXPOSE 3000

CMD npm run prisma:deploy && npm run start
