import { FastifyInstance } from "fastify";
import { AnamnesisCreateDoc, mockDoc, getByIdDoc, UpdateByIdDoc, DeleteByIdDoc } from "../docs/anaminesis";
import {
    AnamnesisCreateController,
    AnamnesisDeleteController,
    AnamnesisGetByIdController,
    AnamnesisUpdateController
} from "../controllers/anaminesis";

const anamnesisCreateController = new AnamnesisCreateController();
const anamnesisGetByIdController = new AnamnesisGetByIdController();
const anamnesisUpdateController = new AnamnesisUpdateController();
const anamnesisDeleteController = new AnamnesisDeleteController();

export async function anamnesisRoutes(app: FastifyInstance) {
    // app.get("/anamnesis", mockDoc, ()=>{}); get all by athlete id
    app.get("/:id", getByIdDoc, anamnesisGetByIdController.handler);
    app.post("", AnamnesisCreateDoc, anamnesisCreateController.handler);
    app.patch("/:id", UpdateByIdDoc, anamnesisUpdateController.handler);
    app.delete("/:id", DeleteByIdDoc, anamnesisDeleteController.handler);
}
