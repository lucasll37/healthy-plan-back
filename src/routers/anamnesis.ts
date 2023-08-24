import { FastifyInstance } from "fastify";

export async function anamnesisRoutes(app: FastifyInstance) {
    app.get("/anamnesis", ()=>{});
    app.get("/anamnesis/:id", ()=>{});
    app.post("/anamnesis", ()=>{});
    app.patch("/anamnesis/:id", ()=>{});
    app.delete("/anamnesis/:id", ()=>{});

}