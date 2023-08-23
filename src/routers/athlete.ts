import { FastifyInstance } from "fastify";
import { athleteTest } from "@/controllers/athlete";

export async function athleteRoutes(app: FastifyInstance) {
    app.get("/athlete", athleteTest);
    app.get("/athlete/:id", athleteTest);
    app.post("/athlete", athleteTest);
    app.patch("/athlete/:id", athleteTest);
    app.delete("/athlete/:id", athleteTest);
}