import { FastifyInstance } from "fastify";
import { AnamnesisCreateDoc, mockDoc } from "../docs/anaminesis";
import { AnamnesisCreateController } from "../controllers/anaminesis";

const anamnesisCreateController = new AnamnesisCreateController();

export async function anamnesisRoutes(app: FastifyInstance) {
    // app.get("/anamnesis", mockDoc, ()=>{});
    // app.get("/anamnesis/:id", mockDoc, ()=>{});
    app.post("/anamnesis", AnamnesisCreateDoc, anamnesisCreateController.handler);
    // app.patch("/anamnesis/:id", mockDoc, ()=>{});
    // app.delete("/anamnesis/:id", mockDoc, ()=>{});

}