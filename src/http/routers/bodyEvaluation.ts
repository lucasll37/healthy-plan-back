import { FastifyInstance } from "fastify";
import { bodyEvaluationTest } from "../controllers/bodyEvaluation";

export async function bodyEvaluationRoutes(app: FastifyInstance) {
    app.get("/body-evaluation", bodyEvaluationTest);
    app.get("/body-evaluation/:id", bodyEvaluationTest);
    app.post("/body-evaluation", bodyEvaluationTest);
    app.patch("/body-evaluation/:id", bodyEvaluationTest);
    app.delete("/body-evaluation/:id", bodyEvaluationTest);


}