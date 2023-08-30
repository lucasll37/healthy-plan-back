import { FastifyJWTOptions } from "@fastify/jwt";
import { env } from "../env";

export const JWTConfig: FastifyJWTOptions = {
    secret: env.JWT_SECRET,
    cookie: {
        signed: false,
        cookieName: "refreshToken",
    },
    sign: {
        expiresIn: "10m",
    }
};