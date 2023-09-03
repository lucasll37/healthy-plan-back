/* eslint-disable no-console */
import { app } from "@/app";
import { env } from "@/env";
import { connected } from "./libs/redis";

app.listen({host: "0.0.0.0", port: env.PORT});

if(connected) console.log("Redis Connected!");
else console.log("Redis Not Connected!");

console.log("HTTP Server Running!");
