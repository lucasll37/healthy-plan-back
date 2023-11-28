import request from "supertest";
import { app } from "../../src/app";
import { afterAll, beforeAll, beforeEach, describe, expect, it } from "vitest";
import { randomUUID } from "node:crypto";


let trainerMock;
let athleteMock;
let token;
let anamnesisMock;
let athleteCreated;
let trainerCreated;

describe("Anamnesis Services (e2e)", () => {

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

        anamnesisMock = {
            AthleteId: athleteCreated.id,
            isAlcoholic: false,
            isSmoker: false,
            sleepQuality: "Well",
            PhysicalActivityHabits: "5 times at week",
            HydrationHabits: "Ok",
            EatingHabits: "Whealthy",
            AmountWater: 2,
            UseFoodSupplement: "Whey Protein and BCAA",
            isAnemic: false,
            isDiabetic: false,
            systolicBloodPressure: 120,
            diastolicBloodPressure: 80,
            restingHeartRate: 65,
            haveAnxiety: false,
            haveDepression: false,
            haveBipolarDisorder: false,
            haveObsessiveCompDisorder: false,
            haveOtherDisorders: true,
            heartProblems: "No",
            allergies: "cats",
            otherDiseases: "NIL",
            medicalTreatments: "NIL",
            medicationUse: "Sorine",
            UseHealthDevice: "No",
            additionalObservations: "NIL"
        };
    });

    afterAll(async () => {
        await app.close();
    });

    it("Should be able to create a new anamnesis record", async () => {

        const response = await request(app.server)
            .post("/v1/anamnesis")
            .set("Authorization", `Bearer ${token}`)
            .send(anamnesisMock);

        const anamnesisCreated = response.body;

        expect(response.status).toBe(201);
        expect(anamnesisCreated).toHaveProperty("id");
    });

    it("Should be able to get an anamnesis record by ID", async () => {
        const response1 = await request(app.server)
            .post("/v1/anamnesis")
            .set("Authorization", `Bearer ${token}`)
            .send(anamnesisMock);

        const anamnesisCreated = response1.body;

        const response2 = await request(app.server)
            .get(`/v1/anamnesis/${anamnesisCreated.id}`)
            .set("Authorization", `Bearer ${token}`)
            .send();

        expect(response2.status).toBe(200);
        expect(response2.body).toHaveProperty("id");
    });

    it("Should be able to update an anamnesis record", async () => {
        const response1 = await request(app.server)
            .post("/v1/anamnesis")
            .set("Authorization", `Bearer ${token}`)
            .send(anamnesisMock);

        const anamnesisCreated = response1.body;

        const updatedData = {
            isAlcoholic: true,
        };

        const response2 = await request(app.server)
            .patch(`/v1/anamnesis/${anamnesisCreated.id}`)
            .set("Authorization", `Bearer ${token}`)
            .send(updatedData);

        expect(response2.status).toBe(200);
        expect(response2.body).toHaveProperty("id");
        expect(response2.body.isAlcoholic).toBe(updatedData.isAlcoholic);
    });

    it("Should be able to delete an anamnesis record", async () => {
        const response1 = await request(app.server)
            .post("/v1/anamnesis")
            .set("Authorization", `Bearer ${token}`)
            .send(anamnesisMock);

        const anamnesisCreated = response1.body;


        const response2 = await request(app.server)
            .delete(`/v1/anamnesis/${anamnesisCreated.id}`)
            .set("Authorization", `Bearer ${token}`)
            .send();

        expect(response2.status).toBe(204);
    });

});
