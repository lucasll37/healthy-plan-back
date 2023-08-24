import { FastifyInstance } from "fastify";
import { AuthenticateController } from "@/controllers/session"

const authenticateController = new AuthenticateController()

export async function authenticateRoutes(app: FastifyInstance) {
    app.post("/session", authenticateController.handler);
}