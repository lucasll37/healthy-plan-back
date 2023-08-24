import { FastifyInstance } from "fastify";

export async function trainerRoutes(app: FastifyInstance) {
    app.get("/trainer", ()=>{});
    app.get("/trainer/:id", ()=>{});
    app.post("/trainer", ()=>{});
    app.patch("/trainer/:id", ()=>{});
    app.delete("/trainer/:id", ()=>{});
}