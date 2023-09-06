import { FastifyInstance, FastifyReply } from "fastify";
import { env } from "@/env";

export async function healthRoutes(app: FastifyInstance) {
    app.get("/health", (_, reply: FastifyReply) => {
        return reply.status(200).send({
            status: "ok",
            host: env.HOST,
            port: env.PORT,
            env: env.NODE_ENV,
            jwt: env.JWT_SECRET,
            database: env.DATABASE_URL,
            cache: env.CACHE_URL
        });
    });
}
