import { FastifyStaticOptions } from "@fastify/static";
import { FastifyRegisterOptions } from "fastify";
import { join } from "node:path";

export const staticConfig: FastifyRegisterOptions<FastifyStaticOptions> = {
    root: join(__dirname, "/../..", "/public/assets"),
    prefix: "/assets/",
    index: false,
    list: false,
    serveDotFiles: false
};
