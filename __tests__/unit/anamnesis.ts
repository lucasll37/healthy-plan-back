import { expect, describe, it, beforeEach, beforeAll } from "vitest";
import { AnamnesisCreateService } from "../../src/services/anaminesis";
import { AnamnesisRepositoryInMemory } from "../../src/repositories/anamnesis/inMemory/AnamnesisRepositoryInMemory";
import { IAnamnesisRepository } from "../../src/repositories/anamnesis/IAnamnesisRepository";
import { randomUUID } from "crypto";
import { Prisma } from "@prisma/client";

let anamnesisRepository: IAnamnesisRepository;
let anamnesisMock: Prisma.AnamnesisCreateInput;

describe("Athlete Services", () => {

    beforeAll(async () => {

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
            haveAnxiety: false,
            haveDepression: false,
            haveBipolarDisorder: false,
            haveObsessiveCompDisorder: false,
            haveOtherDisorders: false,
            heartProblems: null,
            allergies: null,
            otherDiseases: null,
            medicalTreatments: null,
            medicationUse: null,
            UseHealthDevice: null,
            athlete: {
                connect: {
                    id: randomUUID()
                }
            }
        };
    });

    beforeEach(async () => {
        anamnesisRepository = new AnamnesisRepositoryInMemory();
    });

    it("should be able create a new anamnesis", async () => {
        const sut = new AnamnesisCreateService(anamnesisRepository);
        const anaminesisCreated = await sut.execute(anamnesisMock);

        expect(anaminesisCreated).toHaveProperty("id");
    });

    // it("should be able create a new athleteMock", async () => {
    //     const sut = new AthleteCreateService(athleteRepository);
    //     const athleteCreated = await sut.execute(athleteMock);
    //     expect(athleteCreated).toHaveProperty("id");
    // });

    // it("shouldn't be able create a new athleteMock that already exists", async () => {
    //     const sut = new AthleteCreateService(athleteRepository);
    //     await sut.execute(athleteMock);
    //     await expect(async () => {
    //         await sut.execute(athleteMock);
    //     }).rejects.toBeInstanceOf(EmailAlreadyExistsError);
    // });

    // it("should be able to query all athletes from a trainer", async () => {
    //     const sut = new AthletesGetbyTrainerService(athleteRepository);

    //     const athleteCreateService = new AthleteCreateService(athleteRepository);
    //     await athleteCreateService.execute(athleteMock);
    //     const trainerId = athleteMock.trainer.connect!.id!;

    //     const athlete2 = { ...athleteMock};
    //     athlete2.email = "mock2@mock.com";
    //     await athleteCreateService.execute(athlete2);


    //     const athlete3 = { ...athleteMock};
    //     athlete3.email = "mock3@mock.com";

    //     athlete3.trainer.connect!.id = randomUUID();
    //     const AtheleteCreated3 = await athleteCreateService.execute(athlete3);

    //     const athletes1 = await sut.execute(AtheleteCreated3.trainerId);
    //     const athletes2 = await sut.execute(trainerId);

    //     expect(athletes1).toHaveLength(1);
    //     expect(athletes2).toHaveLength(2);
    // });

    // it("should be able update a new athleteMock that already exists", async () => {
    //     const sut = new AthleteCreateService(athleteRepository);
    //     await sut.execute(athleteMock);
    //     await expect(async () => {
    //         await sut.execute(athleteMock);
    //     }).rejects.toBeInstanceOf(EmailAlreadyExistsError);
    // });
});
