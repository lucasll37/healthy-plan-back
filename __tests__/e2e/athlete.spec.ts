import request from "supertest";
import { app } from "../../src/app";
import { beforeAll, afterAll, beforeEach, describe, expect, it } from "vitest";
import { randomUUID } from "node:crypto";

let trainerMock;
let athleteMock;
let trainerCreated;
let token;

describe("Athlete Services (e2e)", () => {

    beforeAll(async () => {
        await app.ready();
    });

    beforeEach(async () => {
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

        const response1 = await request(app.server)
            .post("/v1/trainer")
            .send(trainerMock);

        trainerCreated = response1.body;

        const response2 = await request(app.server)
            .post("/v1/session")
            .send({
                email: trainerMock.email,
                password: trainerMock.password
            });

        token = response2.body.token;
    });

    afterAll(async () => {
        await app.close();
    });

    it("Should be able to create a new athlete", async () => {

        const response = await request(app.server)
            .post("/v1/athlete")
            .set("Authorization", `Bearer ${token}`)
            .send(athleteMock);

        const athleteCreated = response.body;

        expect(response.status).toBe(201);
        expect(athleteCreated).toHaveProperty("id");
    });

    it("Should be able to get athletes by trainer ID", async () => {

        const athleteCreate = await request(app.server)
            .post("/v1/athlete")
            .set("Authorization", `Bearer ${token}`)
            .send(athleteMock);

        const response = await request(app.server)

            .get("/v1/athlete")
            .set("Authorization", `Bearer ${token}`)
            .send();

        const athletes = response.body.athletes;

        expect(response.status).toBe(200);
        expect(Array.isArray(athletes)).toBe(true);
        expect(athletes[0]).toHaveProperty("id");
    });

    it("Should be able to get an athlete by ID", async () => {
        const response1 = await request(app.server)
            .post("/v1/athlete")
            .set("Authorization", `Bearer ${token}`)
            .send(athleteMock);

        const athleteId = response1.body.id;

        const response2 = await request(app.server)
            .get(`/v1/athlete/${athleteId}`)
            .set("Authorization", `Bearer ${token}`)
            .send();

        expect(response2.status).toBe(200);
        expect(response2.body).toHaveProperty("id");
    });

    it("Should be able to update an athlete", async () => {
        const response1 = await request(app.server)
            .post("/v1/athlete")
            .set("Authorization", `Bearer ${token}`)
            .send(athleteMock);

        const athleteId = response1.body.id;

        const updatedData = {
            name: "athlete updated"
        };

        const response2 = await request(app.server)
            .patch(`/v1/athlete/${athleteId}`)
            .set("Authorization", `Bearer ${token}`)
            .send(updatedData);

        const athleteUpdated = response2.body;

        expect(response2.status).toBe(200);
        expect(athleteUpdated.name).toBe(updatedData.name);
    });

    it("Should be able to delete an athlete", async () => {
        const response1 = await request(app.server)
            .post("/v1/athlete")
            .set("Authorization", `Bearer ${token}`)
            .send(athleteMock);

        const athleteId = response1.body.id;

        const response = await request(app.server)
            .delete(`/v1/athlete/${athleteId}`)
            .set("Authorization", `Bearer ${token}`)
            .send();

        expect(response.status).toBe(204);
    });
});
