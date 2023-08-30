#!/bin/sh
sleep 20
npm run prisma:generate
npm run prisma:dev
npm run prisma:deploy
exec npm run start
