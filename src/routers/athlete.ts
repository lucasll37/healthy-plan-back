import { FastifyInstance } from "fastify";
import {
    AthleteCreateController,
    AthleteGetByIdController
} from "@/controllers/athlete"

const athleteCreateController = new AthleteCreateController();
const athleteGetByIdController = new AthleteGetByIdController()

export async function athleteRoutes(app: FastifyInstance) {
    app.get("/athlete", ()=>{});
    app.get("/athlete/:id", athleteGetByIdController.handler);
    app.post("/athlete", athleteCreateController.handler);
    app.patch("/athlete/:id", ()=>{});
    app.delete("/athlete/:id", ()=>{});
}