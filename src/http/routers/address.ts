import { FastifyInstance } from "fastify";
import { addressTest } from "../controllers/address";

export async function addressRoutes(app: FastifyInstance) {
    app.get("/address", addressTest);
    app.get("/address/:id", addressTest);
    app.post("/address", addressTest);
    app.patch("/address/:id", addressTest);
    app.delete("/address/:id", addressTest);
}