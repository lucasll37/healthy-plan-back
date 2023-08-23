#!/bin/sh
sleep 5
npm run migration:deploy
exec npm run start