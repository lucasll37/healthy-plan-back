import { FastifyInstance } from "fastify";
import { AuthenticateController, RefreshTokenController } from "../controllers/session";
import { sessionDoc, refreshTokenDoc } from "../docs/session";

const authenticateController = new AuthenticateController();
const refreshTokenController = new RefreshTokenController();

export async function authenticateRoutes(app: FastifyInstance) {
    app.post("", sessionDoc, authenticateController.handler);
    app.patch("/refresh-token", refreshTokenDoc, refreshTokenController.handler);
}
