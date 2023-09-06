import { FastifyInstance, FastifyReply } from "fastify";

export async function healthRoutes(app: FastifyInstance) {
    app.get("/health", (_, reply: FastifyReply) => {
        return reply.status(200).send({ status: "ok" });
    });
}



