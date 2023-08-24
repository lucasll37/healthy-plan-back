import { FastifyInstance } from "fastify";

export async function exerciseRoutes(app: FastifyInstance) {
    app.get("/exercise", ()=>{});
    app.get("/exercise/:id", ()=>{});
    app.post("/exercise", ()=>{});
    app.patch("/exercise/:id", ()=>{});
    app.delete("/exercise/:id", ()=>{});
}