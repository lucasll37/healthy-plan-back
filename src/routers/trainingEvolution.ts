import { FastifyInstance } from "fastify";
import { mockDoc } from "@/docs/trainingEvolution";


export async function trainingEvolutionRoutes(app: FastifyInstance) {
    app.get("/training-evolution", mockDoc, ()=>{});
    app.get("/training-evolution/:id", mockDoc, ()=>{});
    app.post("/training-evolution", mockDoc, ()=>{});
    app.patch("/training-evolution/:id", mockDoc, ()=>{});
    app.delete("/training-evolution/:id", mockDoc, ()=>{});
}