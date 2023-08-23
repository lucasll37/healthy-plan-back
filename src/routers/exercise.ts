import { FastifyInstance } from "fastify";
import { exerciseTest } from "@/controllers/exercise";

export async function exerciseRoutes(app: FastifyInstance) {
    app.get("/exercise", exerciseTest);
    app.get("/exercise/:id", exerciseTest);
    app.post("/exercise", exerciseTest);
    app.patch("/exercise/:id", exerciseTest);
    app.delete("/exercise/:id", exerciseTest);
}