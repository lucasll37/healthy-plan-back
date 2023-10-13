import { FastifyInstance } from "fastify";
import {
    AthletesGetbyTrainerController,
    AthleteCreateController,
    AthleteGetByIdController,
    AthleteUpdateController,
    AthleteDeleteController
} from "../controllers/athlete";

import { AthletesGetbyTrainerDoc, athleteGetByIdDoc, athleteCreateDoc, athleteUpdateDoc, athleteDeleteDoc } from "../docs/athlete";

const athletesGetbyTrainerController = new AthletesGetbyTrainerController();
const athleteCreateController = new AthleteCreateController();
const athleteGetByIdController = new AthleteGetByIdController();
const athleteUpdateController = new AthleteUpdateController();
const athleteDeleteController = new AthleteDeleteController();

export async function athleteRoutes(app: FastifyInstance) {
    app.get("", AthletesGetbyTrainerDoc, athletesGetbyTrainerController.handler);
    app.get("/:id", athleteGetByIdDoc, athleteGetByIdController.handler);
    app.post("", athleteCreateDoc, athleteCreateController.handler);
    app.patch("/:id", athleteUpdateDoc, athleteUpdateController.handler);
    app.delete("/:id", athleteDeleteDoc, athleteDeleteController.handler);
}
