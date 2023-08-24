import { FastifyInstance } from "fastify";

export async function flexEvaluationRoutes(app: FastifyInstance) {
    app.get("/flex-valuation", ()=>{});
    app.get("/flex-valuation/:id", ()=>{});
    app.post("/flex-valuation", ()=>{});
    app.patch("/flex-valuation/:id", ()=>{});
    app.delete("/flex-valuation/:id", ()=>{});
}