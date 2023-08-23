import { FastifyInstance } from "fastify";
import { anamnesisTest } from "@/controllers/anaminesis";

export async function anamnesisRoutes(app: FastifyInstance) {
    app.get("/anamnesis", anamnesisTest);
    app.get("/anamnesis/:id", anamnesisTest);
    app.post("/anamnesis", anamnesisTest);
    app.patch("/anamnesis/:id", anamnesisTest);
    app.delete("/anamnesis/:id", anamnesisTest);

}