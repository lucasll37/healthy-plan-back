import { FastifyInstance } from "fastify";
import { AuthenticateController } from "@/controllers/session"
import { mockDoc } from "@/docs/session";


const authenticateController = new AuthenticateController()

export async function authenticateRoutes(app: FastifyInstance) {
    app.post("/session", mockDoc, authenticateController.handler);
}