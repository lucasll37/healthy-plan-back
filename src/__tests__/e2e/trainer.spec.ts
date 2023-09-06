import request from "supertest";
import { app } from "../../app";
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { randomUUID } from "node:crypto";


describe("Trainer (e2e)", () => {

    beforeAll(async () => {
        await app.ready();
    });

    afterAll(async () => {
        await app.close();
    });

    it("Should be able to create a new personal trainer", async () => {
        const trainerMock = {
            name: "John",
            surname: "Doe",
            email: `${randomUUID()}@mock.com`,
            password: "123456",
            phone: "123456789"
        };

        const response = await request(app.server)
            .post("/v1/trainer")
            // .set('Authorization', `Bearer ${token}`)
            .send(trainerMock);

        expect(response.status).toBe(201);
        // expect(response.body.user).toEqual(expect.objectContaining({email: 'teste@gvdf'}));
    });

    it("Should be able to get a personal trainer by id", async () => {
        const trainerMock = {
            name: "John",
            surname: "Doe",
            email: `${randomUUID()}@mock.com`,
            password: "123456",
            phone: "123456789"
        };

        const response1 = await request(app.server)
            .post("/v1/trainer")
            .send(trainerMock);


        const trainer = response1.body;

        const response2 = await request(app.server)
            .post("/v1/session")
            .send({
                email: trainerMock.email,
                password: trainerMock.password
            });

        const { token } = response2.body;


        const response3 = await request(app.server)
            .get(`/v1/trainer/${trainer.id}`)
            .set("Authorization", `Bearer ${token}`)
            .send();

        const trainerGotById = response3.body;

        expect(trainerGotById).toHaveProperty("name");
    });

    it("Should be able to update a personal trainer", async () => {
        const trainerMock = {
            name: "John",
            surname: "Doe",
            email: `${randomUUID()}@mock.com`,
            password: "123456",
            phone: "123456789"
        };

        const newTrainerName = "John Doe 2";

        const response1 = await request(app.server)
            .post("/v1/trainer")
            .send(trainerMock);


        const trainer = response1.body;

        const response2 = await request(app.server)
            .post("/v1/session")
            .send({
                email: trainerMock.email,
                password: trainerMock.password
            });

        const { token } = response2.body;

        const response3 = await request(app.server)
            .patch(`/v1/trainer/${trainer.id}`)
            .set("Authorization", `Bearer ${token}`)
            .send({ name: newTrainerName });

        const trainerUpdated = response3.body;

        expect(response3.status).toBe(200);
        expect(trainerUpdated).toHaveProperty("name");
        expect(trainerUpdated.name).not.toBe(trainerMock.name);
        expect(trainerUpdated.name).toBe(newTrainerName);
    });

    it("Should be able to delete a personal trainer", async () => {
        const trainerMock = {
            name: "John",
            surname: "Doe",
            email: `${randomUUID()}@mock.com`,
            password: "123456",
            phone: "123456789"
        };

        const response1 = await request(app.server)
            .post("/v1/trainer")
            .send(trainerMock);

        const trainer = response1.body;

        const response2 = await request(app.server)
            .post("/v1/session")
            .send({
                email: trainerMock.email,
                password: trainerMock.password
            });

        const { token } = response2.body;


        const response3 = await request(app.server)
            .delete(`/v1/trainer/${trainer.id}`)
            .set("Authorization", `Bearer ${token}`)
            .send();

        expect(response3.status).toBe(204);

        // expect(response3.status).toBe(204);

        // const response4 = await request(app.server)
        //     .get(`/v1/trainer/${trainer.id}`)
        //     .set("Authorization", `Bearer ${token}`)
        //     .send();

        // expect(response4.status).toBe(404);


    });


});
