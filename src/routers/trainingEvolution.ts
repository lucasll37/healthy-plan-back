import { FastifyInstance } from "fastify";

export async function trainingEvolutionRoutes(app: FastifyInstance) {
    app.get("/training-evolution", ()=>{});
    app.get("/training-evolution/:id", ()=>{});
    app.post("/training-evolution", ()=>{});
    app.patch("/training-evolution/:id", ()=>{});
    app.delete("/training-evolution/:id", ()=>{});
}