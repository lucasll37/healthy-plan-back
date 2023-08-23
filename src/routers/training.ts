import { FastifyInstance } from "fastify";
import { trainingTest } from "@/controllers/training";

export async function trainingRoutes(app: FastifyInstance) {
    app.get("/training", trainingTest);
    app.get("/training/:id", trainingTest);
    app.post("/training", trainingTest);
    app.patch("/training/:id", trainingTest);
    app.delete("/training/:id", trainingTest);
}