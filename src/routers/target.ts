import { FastifyInstance } from "fastify";


export async function targetRoutes(app: FastifyInstance) {
    app.get("/target", ()=>{});
    app.get("/target/:id", ()=>{});
    app.post("/target", ()=>{});
    app.patch("/target/:id", ()=>{});
    app.delete("/target/:id", ()=>{});
}