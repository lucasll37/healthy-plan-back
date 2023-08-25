import { FastifyInstance } from "fastify";
import {
    AthleteCreateController,
    AthleteGetByIdController
} from "@/controllers/athlete"

import { mockDoc, athleteCreateDoc } from "@/docs/athlete";

const athleteCreateController = new AthleteCreateController();
const athleteGetByIdController = new AthleteGetByIdController()

export async function athleteRoutes(app: FastifyInstance) {
    app.get("/athlete", mockDoc, ()=>{});
    app.get("/athlete/:id", mockDoc, athleteGetByIdController.handler);
    app.post("/athlete", athleteCreateDoc, athleteCreateController.handler);
    app.patch("/athlete/:id", mockDoc, ()=>{});
    app.delete("/athlete/:id", mockDoc, ()=>{});
}