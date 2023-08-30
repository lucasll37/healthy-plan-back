import { FastifyInstance } from "fastify";
import { mockDoc } from "../docs/target";


export async function targetRoutes(app: FastifyInstance) {
    app.get("/target", mockDoc, ()=>{});
    app.get("/target/:id", mockDoc, ()=>{});
    app.post("/target", mockDoc, ()=>{});
    app.patch("/target/:id", mockDoc, ()=>{});
    app.delete("/target/:id", mockDoc, ()=>{});
}