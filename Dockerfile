FROM node:18-alpine

WORKDIR /usr/src/app

ENV PORT=10000

COPY ./package.json ./

COPY . .

RUN npm install

RUN npm run prisma:generate

RUN npm run build

EXPOSE 10000

CMD npm run prisma:deploy && npm run start
