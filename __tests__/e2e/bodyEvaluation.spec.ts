import request from "supertest";
import { app } from "../../src/app";
import { afterAll, beforeAll, beforeEach, describe, expect, it } from "vitest";
import { randomUUID } from "node:crypto";

let trainerMock;
let athleteMock;
let trainerCreated;
let token;
let bodyEvaluationMock;
let athleteCreated;

describe("Body Evaluation Controllers (e2e)", () => {
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

        const response = await request(app.server)
            .post("/v1/athlete")
            .set("Authorization", `Bearer ${token}`)
            .send(athleteMock);

        athleteCreated = response.body;

        bodyEvaluationMock = {
            ageAtTheMoment: 30,
            fatMass_kg: 30,
            leanMass_kg: 55,
            weight_cm: 177,
            height_kg: 95,
            bodyMassClass: "endomorfo",
            bodyMassIndex: 29.5,
            skeletalMass: 10,
            bodyAge: 35,
            basalMetabolicRate: 2550,
            waistRatioHip: 1.5,
            visceralFat: "baixo",
            neck_circ_cm: 45,
            chest_circ_cm: 112,
            rightForearm_circ_cm: 30,
            leftForearm_circ_cm: 30,
            rightArm_circ_cm: 42,
            leftArm_circ_cm: 42,
            waist_circ_cm: 80,
            abdomen_circ_cm: 80,
            hip_circ_cm: 95,
            rightThigh_circ_cm: 25,
            leftThigh_circ_cm: 25,
            rightCalf_circ_cm: 30,
            leftCalf_circ_cm: 30,
            fatPercentage: 29,
            athleteId: athleteCreated.id
        };
    });

    afterAll(async () => {
        await app.close();
    });

    it("Should be able to create a new body evaluation record", async () => {
        const response = await request(app.server)
            .post("/v1/body-evaluation")
            .set("Authorization", `Bearer ${token}`)
            .send(bodyEvaluationMock);

        const bodyEvaluationCreated = response.body;

        expect(response.status).toBe(201);
        expect(bodyEvaluationCreated).toHaveProperty("id");
    });

    it("Should be able to get a body evaluation record by ID", async () => {
        const response1 = await request(app.server)
            .post("/v1/body-evaluation")
            .set("Authorization", `Bearer ${token}`)
            .send(bodyEvaluationMock);

        const bodyEvaluationCreated = response1.body;

        const response2 = await request(app.server)
            .get(`/v1/body-evaluation/${bodyEvaluationCreated.id}`)
            .set("Authorization", `Bearer ${token}`)
            .send();

        expect(response2.status).toBe(200);
        expect(response2.body).toHaveProperty("id");
    });

    it("Should be able to update a body evaluation record", async () => {
        const response1 = await request(app.server)
            .post("/v1/body-evaluation")
            .set("Authorization", `Bearer ${token}`)
            .send(bodyEvaluationMock);

        const bodyEvaluationCreated = response1.body;

        const updatedData = {
            ageAtTheMoment: 31
        };

        const response2 = await request(app.server)
            .patch(`/v1/body-evaluation/${bodyEvaluationCreated.id}`)
            .set("Authorization", `Bearer ${token}`)
            .send(updatedData);

        expect(response2.status).toBe(200);
        expect(response2.body.ageAtTheMoment).toBe(31);
    });

    it("Should be able to delete a body evaluation record", async () => {
        const response1 = await request(app.server)
            .post("/v1/body-evaluation")
            .set("Authorization", `Bearer ${token}`)
            .send(bodyEvaluationMock);

        const bodyEvaluationCreated = response1.body;

        const response = await request(app.server)
            .delete(`/v1/body-evaluation/${bodyEvaluationCreated.id}`)
            .set("Authorization", `Bearer ${token}`)
            .send();

        expect(response.status).toBe(204);
    });

});
