import { FastifyInstance } from "fastify";
import { mockDoc } from "../docs/statusPhoto";


export async function statusPhotoRoutes(app: FastifyInstance) {
    app.get("/status-photo", mockDoc, ()=>{});
    app.get("/status-photo/:id", mockDoc, ()=>{});
    app.post("/status-photo", mockDoc, ()=>{});
    app.patch("/status-photo/:id", mockDoc, ()=>{});
    app.delete("/status-photo/:id", mockDoc, ()=>{});
}