import { FastifyInstance } from "fastify";

export async function bodyEvaluationRoutes(app: FastifyInstance) {
    app.get("/body-evaluation", ()=>{});
    app.get("/body-evaluation/:id", ()=>{});
    app.post("/body-evaluation", ()=>{});
    app.patch("/body-evaluation/:id", ()=>{});
    app.delete("/body-evaluation/:id", ()=>{});


}