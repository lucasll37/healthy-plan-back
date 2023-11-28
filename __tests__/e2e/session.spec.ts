import request from "supertest";
import { app } from "../../src/app";
import { afterAll, beforeAll, beforeEach, describe, expect, it } from "vitest";
import { randomUUID } from "node:crypto";

let trainerMock;
let athleteMock;
let trainerCreated;

describe("Authentication Service (e2e)", () => {

    beforeAll(async () => {
        await app.ready();

        athleteMock = {
            name: "John",
            surname: "Doe",
            email: `${randomUUID()}@mock.com`,
            sex: "M",
            birthDate: "1995-05-05",
            phone: "123456789",
            avatar: "https://www.google.com",
            observation: "observation",
            addressInfo: "Rua dos bobos",
            addressNumber: "0",
            cep: "12228-610",
            city: "São Sosé dos Campos",
            state: "SP"
        };

        trainerMock = {
            name: "John",
            surname: "Doe",
            email: `${randomUUID()}@mock.com`,
            password: "123456",
            phone: "123456789"
        };
    });

    beforeEach(async () => {
        const response1 = await request(app.server)
            .post("/v1/trainer")
            .send(trainerMock);

        trainerCreated = response1.body;
    });

    afterAll(async () => {
        await app.close();
    });

    it("Should authenticate a trainer with valid credentials", async () => {
        const response2 = await request(app.server)
            .post("/v1/session")
            .send({
                email: trainerMock.email,
                password: trainerMock.password
            });

        expect(response2.status).toBe(201);
        expect(response2.body).toHaveProperty("token");
    });

    it("Should not authenticate a trainer with invalid credentials", async () => {
        const response = await request(app.server)
            .post("/v1/session")
            .send({
                email: trainerMock.email,
                password: randomUUID()
            });

        expect(response.status).toBe(400);
        expect(response.body).toHaveProperty("error");
    });

});
