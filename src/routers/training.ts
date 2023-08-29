import { FastifyInstance } from "fastify";
import { mockDoc } from "../docs/training";


export async function trainingRoutes(app: FastifyInstance) {
    app.get("/training", mockDoc, ()=>{});
    app.get("/training/:id", mockDoc, ()=>{});
    app.post("/training", mockDoc, ()=>{});
    app.patch("/training/:id", mockDoc, ()=>{});
    app.delete("/training/:id", mockDoc, ()=>{});
}