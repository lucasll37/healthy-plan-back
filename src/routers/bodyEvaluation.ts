import { FastifyInstance } from "fastify";
import { mockDoc, bodyEvaluationCreateDoc } from "@/docs/bodyEvaluation";
import { BodyEvaluationCreateController } from "@/controllers/bodyEvaluation";

const bodyEvaluationCreateController = new BodyEvaluationCreateController();

export async function bodyEvaluationRoutes(app: FastifyInstance) {
    // app.get("/body-evaluation", mockDoc, ()=>{});
    // app.get("/body-evaluation/:id", mockDoc, ()=>{});
    app.post("/body-evaluation", bodyEvaluationCreateDoc, bodyEvaluationCreateController.handler);
    // app.patch("/body-evaluation/:id", mockDoc, ()=>{});
    // app.delete("/body-evaluation/:id", mockDoc, ()=>{});


}