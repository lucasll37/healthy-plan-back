import { FastifyInstance } from "fastify";
import {
    createTrainerDoc,
    getTrainerByIdDoc,
    updateTrainerDoc,
    deleteTrainerDoc,
    mockDoc
} from "../docs/trainer";

import {
    TrainerCreateController,
    TrainerGetByIdController,
    TrainerUpdateController,
    TrainerDeleteController
} from "../controllers/trainer";

const trainerCreateController = new TrainerCreateController();
const trainerGetByIdController = new TrainerGetByIdController();
const trainerUpdateController = new TrainerUpdateController();
const trainerDeleteController = new TrainerDeleteController();

export async function trainerRoutes(app: FastifyInstance) {
    // app.get("/trainer", mockDoc, ()=>{});
    app.get("/trainer/:id", getTrainerByIdDoc, trainerGetByIdController.handler);
    app.post("/trainer", createTrainerDoc, trainerCreateController.handler);
    app.patch("/trainer/:id", updateTrainerDoc, trainerUpdateController.handler);
    app.delete("/trainer/:id", deleteTrainerDoc, trainerDeleteController.handler);
}
