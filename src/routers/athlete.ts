import { FastifyInstance } from "fastify";
import {
    AthletesGetbyTrainerController,
    AthleteCreateController,
    AthleteGetByIdController
} from "../controllers/athlete";

import { AthletesGetbyTrainerDoc, athleteGetByIdDoc, athleteCreateDoc } from "../docs/athlete";

const athletesGetbyTrainerController = new AthletesGetbyTrainerController();
const athleteCreateController = new AthleteCreateController();
const athleteGetByIdController = new AthleteGetByIdController();

export async function athleteRoutes(app: FastifyInstance) {
    app.get("/athlete", AthletesGetbyTrainerDoc, athletesGetbyTrainerController.handler);
    app.get("/athlete/:id", athleteGetByIdDoc, athleteGetByIdController.handler);
    app.post("/athlete", athleteCreateDoc, athleteCreateController.handler);
    // app.patch("/athlete/:id", mockDoc, ()=>{});
    // app.delete("/athlete/:id", mockDoc, ()=>{});
}
