import { FastifyInstance } from "fastify";

export async function methodExerciseRoutes(app: FastifyInstance) {
    app.get("/method-exercise", ()=>{});
    app.get("/method-exercise/:id", ()=>{});
    app.post("/method-exercise", ()=>{});
    app.patch("/method-exercise/:id", ()=>{});
    app.delete("/method-exercise/:id", ()=>{});
}