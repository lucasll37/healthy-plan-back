import { FastifyInstance } from "fastify";
import { methodExerciseTest } from "@/controllers/methodExercise";

export async function methodExerciseRoutes(app: FastifyInstance) {
    app.get("/method-exercise", methodExerciseTest);
    app.get("/method-exercise/:id", methodExerciseTest);
    app.post("/method-exercise", methodExerciseTest);
    app.patch("/method-exercise/:id", methodExerciseTest);
    app.delete("/method-exercise/:id", methodExerciseTest);
}