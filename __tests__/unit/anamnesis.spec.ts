import { expect, describe, it, beforeAll, beforeEach } from "vitest";

import {
    AnamnesisCreateService,
    AnamnesisGetByIdService,
    AnamnesisUpdateService,
    AnamnesisDeleteService
} from "../../src/services/anamnesis";


import { AnamnesisRepositoryInMemory } from "../../src/repositories/anamnesis/inMemory/AnamnesisRepositoryInMemory";
import { randomUUID } from "node:crypto";
import { AnamnesisDontExistsError } from "../../src/errors/anamnesis-dont-exists";
import { IAnamnesisRepository } from "../../src/repositories/anamnesis/IAnamnesisRepository";
import { Prisma } from "@prisma/client";

let anamnesisRepository: IAnamnesisRepository;
let anamnesisMock: Prisma.AnamnesisCreateInput;

describe("Anamnesis Services", () => {

    beforeAll(() => {
        anamnesisMock = {
            isAlcoholic: false,
            isSmoker: false,
            sleepQuality: "",
            PhysicalActivityHabits: "",
            HydrationHabits: "",
            EatingHabits: "",
            AmountWater: 0,
            UseFoodSupplement: "",
            isAnemic: false,
            isDiabetic: false,
            systolicBloodPressure: 0,
            diastolicBloodPressure: 0,
            restingHeartRate: 0,
            heartProblems: null,
            allergies: null,
            otherDiseases: null,
            medicalTreatments: null,
            medicationUse: null,
            UseHealthDevice: null,
            additionalObservations: null,
            haveAnxiety: false,
            haveDepression: false,
            haveBipolarDisorder: false,
            haveObsessiveCompDisorder: false,
            haveOtherDisorders: false,
            athlete: {
                connect: {
                    id: randomUUID()
                }
            }
        };
    });

    beforeEach(() => {
        anamnesisRepository = new AnamnesisRepositoryInMemory();
    });

    it("should be able create a new anamnesis record", async () => {
        const sut = new AnamnesisCreateService(anamnesisRepository);
        const anamnesis = await sut.execute(anamnesisMock);
        expect(anamnesis).toHaveProperty("id");
    });

    it("should be able to find an anamnesis record that exists", async () => {
        const anamnesisCreateService = new AnamnesisCreateService(anamnesisRepository);
        const sut = new AnamnesisGetByIdService(anamnesisRepository);
        const anamnesisCreated = await anamnesisCreateService.execute(anamnesisMock);
        const anamnesisFound = await sut.execute(anamnesisCreated.id);

        expect(anamnesisFound).toHaveProperty("id");
    });

    it("shouldn't be able to find an anamnesis record that doesn't exists", async () => {
        const sut = new AnamnesisGetByIdService(anamnesisRepository);

        await expect(async () => {
            await sut.execute(randomUUID());
        }).rejects.toBeInstanceOf(AnamnesisDontExistsError);
    });

    it("should be able to update an anamnesis record that exists", async () => {
        const anamnesisCreateService = new AnamnesisCreateService(anamnesisRepository);
        const sut = new AnamnesisUpdateService(anamnesisRepository);
        const anamnesisCreated = await anamnesisCreateService.execute(anamnesisMock);
        const updatedData = { AmountWater: 0 };
        const anamnesisUpdated = await sut.execute(anamnesisCreated.id, updatedData);

        expect(anamnesisUpdated).toMatchObject(updatedData);
    });

    it("shouldn't be able to update an anamnesis record that doesn't exist", async () => {
        const sut = new AnamnesisUpdateService(anamnesisRepository);
        const updatedData = { /* dados atualizados aqui */ };

        await expect(async () => {
            await sut.execute(randomUUID(), updatedData);
        }).rejects.toBeInstanceOf(AnamnesisDontExistsError);
    });

    it("should be able to delete an anamnesis record that exists", async () => {
        const anamnesisCreateService = new AnamnesisCreateService(anamnesisRepository);
        const sut = new AnamnesisDeleteService(anamnesisRepository);
        const anamnesisCreated = await anamnesisCreateService.execute(anamnesisMock);

        await expect(async () => {
            await sut.execute(anamnesisCreated.id);
        }).not.toThrow();
    });

    it("shouldn't be able to delete an anamnesis record that doesn't exist", async () => {
        const sut = new AnamnesisDeleteService(anamnesisRepository);

        await expect(async () => {
            await sut.execute(randomUUID());
        }).rejects.toBeInstanceOf(AnamnesisDontExistsError);
    });

});
