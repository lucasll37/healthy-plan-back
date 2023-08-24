import { FastifyInstance } from "fastify";

export async function statusPhotoRoutes(app: FastifyInstance) {
    app.get("/status-photo", ()=>{});
    app.get("/status-photo/:id", ()=>{});
    app.post("/status-photo", ()=>{});
    app.patch("/status-photo/:id", ()=>{});
    app.delete("/status-photo/:id", ()=>{});
}