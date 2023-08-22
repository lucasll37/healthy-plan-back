import { FastifyInstance } from "fastify";
import { trainingEvolutionTest } from "../controllers/trainingEvolution";

export async function trainingEvolutionRoutes(app: FastifyInstance) {
    app.get("/training-evolution", trainingEvolutionTest);
    app.get("/training-evolution/:id", trainingEvolutionTest);
    app.post("/training-evolution", trainingEvolutionTest);
    app.patch("/training-evolution/:id", trainingEvolutionTest);
    app.delete("/training-evolution/:id", trainingEvolutionTest);
}