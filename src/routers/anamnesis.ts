import { FastifyInstance } from "fastify";
import { mockDoc } from "@/docs/anaminesis";

export async function anamnesisRoutes(app: FastifyInstance) {
    app.get("/anamnesis", mockDoc, ()=>{});
    app.get("/anamnesis/:id", mockDoc, ()=>{});
    app.post("/anamnesis", mockDoc, ()=>{});
    app.patch("/anamnesis/:id", mockDoc, ()=>{});
    app.delete("/anamnesis/:id", mockDoc, ()=>{});

}