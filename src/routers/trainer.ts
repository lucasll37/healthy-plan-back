import { FastifyInstance } from "fastify";
import { createTrainerDoc, mockDoc, getTrainerByIdDoc } from "@/docs/trainer";
import { TrainerCreateController, TrainerGetByIdController } from "@/controllers/trainer";

const trainerCreateController = new TrainerCreateController();
const trainerGetByIdController = new TrainerGetByIdController();

export async function trainerRoutes(app: FastifyInstance) {
    // app.get("/trainer", mockDoc, ()=>{});
    app.get("/trainer/:id", getTrainerByIdDoc, trainerGetByIdController.handler);
    app.post("/trainer", createTrainerDoc, trainerCreateController.handler);
    // app.patch("/trainer/:id", mockDoc, ()=>{});
    // app.delete("/trainer/:id", mockDoc, ()=>{});
}