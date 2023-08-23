FROM node:18-alpine

WORKDIR /usr/src/app

COPY ./package.json ./

RUN npm install

RUN npm ci --only=production

COPY . .

RUN chmod +x ./migration.sh

RUN npm run build

# RUN  npm run migration:deploy

EXPOSE 3000