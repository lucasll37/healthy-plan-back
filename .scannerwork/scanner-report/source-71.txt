import { FastifyInstance } from "fastify";
import { mockDoc } from "../docs/methodExercise";


export async function methodExerciseRoutes(app: FastifyInstance) {
    app.get("/method-exercise", mockDoc, ()=>{});
    app.get("/method-exercise/:id", mockDoc, ()=>{});
    app.post("/method-exercise", mockDoc, ()=>{});
    app.patch("/method-exercise/:id", mockDoc, ()=>{});
    app.delete("/method-exercise/:id", mockDoc, ()=>{});
}