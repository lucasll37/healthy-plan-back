import { FastifyInstance } from "fastify";
import { mockDoc, bodyEvaluationCreateDoc, bodyEvaluationGetbyIdDoc, bodyEvaluationUpdateDoc, bodyEvaluationDeleteDoc } from "../docs/bodyEvaluation";
import {
    BodyEvaluationCreateController,
    BodyEvaluationDeleteController,
    BodyEvaluationGetByIdController,
    BodyEvaluationUpdateController

} from "../controllers/bodyEvaluation";

const bodyEvaluationCreateController = new BodyEvaluationCreateController();
const bodyEvaluationGetByIdController = new BodyEvaluationGetByIdController();
const bodyEvaluationUpdateController = new BodyEvaluationUpdateController();
const bodyEvaluationDeleteController = new BodyEvaluationDeleteController();


export async function bodyEvaluationRoutes(app: FastifyInstance) {
    // app.get("", mockDoc, ()=>{}); get all by athlete id
    app.get("/:id", bodyEvaluationGetbyIdDoc, bodyEvaluationGetByIdController.handler);
    app.post("", bodyEvaluationCreateDoc, bodyEvaluationCreateController.handler);
    app.patch("/:id", bodyEvaluationUpdateDoc, bodyEvaluationUpdateController.handler);
    app.delete("/:id", bodyEvaluationDeleteDoc, bodyEvaluationDeleteController.handler);
}
