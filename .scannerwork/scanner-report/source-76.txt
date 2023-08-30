import { FastifyInstance } from "fastify";
import { mockDoc } from "../docs/exercise";


export async function exerciseRoutes(app: FastifyInstance) {
    app.get("/exercise", mockDoc, ()=>{});
    app.get("/exercise/:id", mockDoc, ()=>{});
    app.post("/exercise", mockDoc, ()=>{});
    app.patch("/exercise/:id", mockDoc, ()=>{});
    app.delete("/exercise/:id", mockDoc, ()=>{});
}