import { FastifyInstance } from "fastify";
import { mockDoc } from "@/docs/flexEvaluation";


export async function flexEvaluationRoutes(app: FastifyInstance) {
    app.get("/flex-valuation", mockDoc, ()=>{});
    app.get("/flex-valuation/:id", mockDoc, ()=>{});
    app.post("/flex-valuation", mockDoc, ()=>{});
    app.patch("/flex-valuation/:id", mockDoc, ()=>{});
    app.delete("/flex-valuation/:id", mockDoc, ()=>{});
}