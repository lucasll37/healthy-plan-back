import { FastifyInstance } from "fastify";

export async function trainingRoutes(app: FastifyInstance) {
    app.get("/training", ()=>{});
    app.get("/training/:id", ()=>{});
    app.post("/training", ()=>{});
    app.patch("/training/:id", ()=>{});
    app.delete("/training/:id", ()=>{});
}