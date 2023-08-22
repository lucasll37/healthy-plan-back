import { FastifyInstance } from "fastify";
import { trainerTest } from "../controllers/trainer";

export async function trainerRoutes(app: FastifyInstance) {
    app.get("/trainer", trainerTest);
    app.get("/trainer/:id", trainerTest);
    app.post("/trainer", trainerTest);
    app.patch("/trainer/:id", trainerTest);
    app.delete("/trainer/:id", trainerTest);
}