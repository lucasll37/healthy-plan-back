import { FastifyInstance } from "fastify";
import { statusPhotoTest } from "../controllers/statusPhoto";

export async function statusPhotoRoutes(app: FastifyInstance) {
    app.get("/status-photo", statusPhotoTest);
    app.get("/status-photo/:id", statusPhotoTest);
    app.post("/status-photo", statusPhotoTest);
    app.patch("/status-photo/:id", statusPhotoTest);
    app.delete("/status-photo/:id", statusPhotoTest);
}