import { FastifyInstance } from "fastify";
import { flexValuationTest } from "../controllers/flexEvaluation";

export async function flexEvaluationRoutes(app: FastifyInstance) {
    app.get("/flex-valuation", flexValuationTest);
    app.get("/flex-valuation/:id", flexValuationTest);
    app.post("/flex-valuation", flexValuationTest);
    app.patch("/flex-valuation/:id", flexValuationTest);
    app.delete("/flex-valuation/:id", flexValuationTest);
}