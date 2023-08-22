import { FastifyInstance } from "fastify";
import { targetTest } from "../controllers/target";

export async function targetRoutes(app: FastifyInstance) {
    app.get("/target", targetTest);
    app.get("/target/:id", targetTest);
    app.post("/target", targetTest);
    app.patch("/target/:id", targetTest);
    app.delete("/target/:id", targetTest);
}