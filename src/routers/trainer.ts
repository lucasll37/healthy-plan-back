import { FastifyInstance } from "fastify";
import { TrainerCreateController, TrainerGetByIdController } from "@/controllers/trainer";

const trainerCreateController = new TrainerCreateController();
const trainerGetByIdController = new TrainerGetByIdController();

export async function trainerRoutes(app: FastifyInstance) {
    app.get("/trainer", ()=>{});
    app.get("/trainer/:id", ()=>{});
    app.post("/trainer", trainerCreateController.handler);
    app.patch("/trainer/:id", trainerGetByIdController.handler);
    app.delete("/trainer/:id", ()=>{});
}