import { FastifyInstance } from "fastify";
import { verifyJwt } from "@/middleware/verify-jwt";
import {
    AthleteCreateController,
    AthleteGetByIdController
} from "@/controllers/athlete"

import { athleteGetByIdDoc, athleteCreateDoc } from "@/docs/athlete";

const athleteCreateController = new AthleteCreateController();
const athleteGetByIdController = new AthleteGetByIdController()

export async function athleteRoutes(app: FastifyInstance) {
    // app.get("/athlete", mockDoc, ()=>{});
    app.get("/athlete/:id", athleteGetByIdDoc, athleteGetByIdController.handler);
    app.post("/athlete", athleteCreateDoc, athleteCreateController.handler);
    // app.patch("/athlete/:id", mockDoc, ()=>{});
    // app.delete("/athlete/:id", mockDoc, ()=>{});
}