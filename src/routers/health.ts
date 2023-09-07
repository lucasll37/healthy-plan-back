import { FastifyInstance, FastifyReply } from "fastify";
import { env } from "@/env";
import { testConnection } from "@/utils/tests/testConnectionPrisma";
import { CacheRedis } from "@/cache/redis/CacheRedis";

export async function healthRoutes(app: FastifyInstance) {
    app.get("/health", async (_, reply: FastifyReply) => {

        let conectionDB: boolean;

        try {
            await testConnection();
            conectionDB = true;
        }
        catch {
            conectionDB = false;
        }

        return reply.status(200).send({
            server: "ok",
            cache: CacheRedis.getInstance()?.isConnected? "ok" : "fail",
            database: conectionDB ? "ok" : "fail",
            env: env.NODE_ENV,
            host: env.HOST,
            port: env.PORT,
        });
    });
}
