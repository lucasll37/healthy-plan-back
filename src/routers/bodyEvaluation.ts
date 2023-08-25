import { FastifyInstance } from "fastify";
import { mockDoc } from "@/docs/bodyEvaluation";


export async function bodyEvaluationRoutes(app: FastifyInstance) {
    app.get("/body-evaluation", mockDoc, ()=>{});
    app.get("/body-evaluation/:id", mockDoc, ()=>{});
    app.post("/body-evaluation", mockDoc, ()=>{});
    app.patch("/body-evaluation/:id", mockDoc, ()=>{});
    app.delete("/body-evaluation/:id", mockDoc, ()=>{});


}