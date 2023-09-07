/* eslint-disable no-console */
import { app } from "@/app";
import { env } from "@/env";
import { CacheRedis } from "./cache/redis/CacheRedis";
import { testConnection } from "./utils/tests/testConnectionPrisma";

testConnection()
    .then(() => console.log("Prisma Connected"))
    .catch(() => console.log("Prisma Not Connected"));

CacheRedis.init()
    .then(() => console.log("Redis Connected"))
    .catch(() => console.log("Redis Not Connected"));

app.listen({host: env.HOST, port: env.PORT}, () => {
    console.log(`HTTP Server Running at ${env.HOST}:${env.PORT}`);
});
