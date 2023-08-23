import { FastifyInstance } from "fastify";
import { docPost } from "@/docs/address"
import { AddressTest } from "@/controllers/address"


const addressTest = new AddressTest()


export async function addressRoutes(app: FastifyInstance) {
    app.get("/address", addressTest.handler);
    app.get("/address/:id", addressTest.handler);
    app.post("/address", docPost, addressTest.handler);
    app.patch("/address/:id", addressTest.handler);
    app.delete("/address/:id", addressTest.handler);
}