import { expect, describe, it, beforeEach, beforeAll } from "vitest";

import {
    AthleteCreateService,
    AthleteDeleteService,
    AthleteUpdateService,
    AthletesGetbyTrainerService,
    AthleteGetBodyEvaluationsService,
    AthleteGetAnamnesisService
} from "../../src/services/athlete";

import { IAthleteRepository } from "../../src/repositories/athlete/IAthleteRepository";
import { AthleteRepositoryInMemory } from "../../src/repositories/athlete/inMemory/AthleteRepositoryInMemory";
import { randomUUID } from "crypto";
import { EmailAlreadyExistsError } from "../../src/errors/email-already-exists";
import { Prisma } from "@prisma/client";
import { AthleteDontExistsError } from "../../src/errors/athlete-dont-exists";
import { BodyEvaluationRepositoryInMemory } from "../../src/repositories/bodyEvaluation/inMemory/BodyEvaluationRepositoryInMemory";
import { AnamnesisRepositoryInMemory } from "../../src/repositories/anamnesis/inMemory/AnamnesisRepositoryInMemory";


let athleteRepository: IAthleteRepository;
let athlete: Prisma.AthleteCreateInput;

describe("Athlete Services", () => {

    beforeAll(async () => {

        athlete = {
            name: "John",
            surname: "Doe",
            email: "mock@mock.com",
            sex: "M",
            birthDate: new Date("1995-05-05"),
            createdAt: new Date("1995-05-05"),
            updatedAt: new Date("1995-05-05"),
            phone: "123456789",
            avatar: "https://www.google.com",
            observation: "observation",
            trainer: {
                connect: {
                    id: randomUUID()
                    // id: trainer.id
                }
            },
            address: {
                create: {
                    addressInfo: "Rua dos bobos",
                    addressNumber: "0",
                    cep: "12228-610",
                    city: "São Sosé dos Campos",
                    state: "SP"
                }
            }
        };

    });

    beforeEach(() => {
        athleteRepository = new AthleteRepositoryInMemory();
    });

    it("should be able create a new athlete", async () => {
        const sut = new AthleteCreateService(athleteRepository);
        const athleteCreated = await sut.execute(athlete);
        expect(athleteCreated).toHaveProperty("id");
    });

    it("shouldn't be able create a new athlete that already exists", async () => {
        const sut = new AthleteCreateService(athleteRepository);
        await sut.execute(athlete);

        await expect(async () => {
            await sut.execute(athlete);
        }).rejects.toBeInstanceOf(EmailAlreadyExistsError);
    });

    it("should be able to query all athletes from a trainer", async () => {
        const sut = new AthletesGetbyTrainerService(athleteRepository);

        const athleteCreateService = new AthleteCreateService(athleteRepository);
        await athleteCreateService.execute(athlete);
        const trainerId = athlete.trainer.connect!.id!;

        const athlete2 = { ...athlete};
        athlete2.email = "mock2@mock.com";
        await athleteCreateService.execute(athlete2);


        const athlete3 = { ...athlete};
        athlete3.email = "mock3@mock.com";

        athlete3.trainer.connect!.id = randomUUID();
        const AtheleteCreated3 = await athleteCreateService.execute(athlete3);

        const athletes1 = await sut.execute(AtheleteCreated3.trainerId);
        const athletes2 = await sut.execute(trainerId);

        expect(athletes1).toHaveLength(1);
        expect(athletes2).toHaveLength(2);
    });

    it("should be able update a new athlete that already exists", async () => {
        const sut = new AthleteCreateService(athleteRepository);
        await sut.execute(athlete);

        await expect(async () => {
            await sut.execute(athlete);
        }).rejects.toBeInstanceOf(EmailAlreadyExistsError);
    });

    it("should fail to update a non-existent athlete", async () => {
        const athleteCreateService = new AthleteCreateService(athleteRepository);
        const sut = new AthleteUpdateService(athleteRepository);
        await athleteCreateService.execute(athlete);

        await expect(async () => {
            await sut.execute(randomUUID(), { ...athlete, name: "Non-existent" });
        }).rejects.toBeInstanceOf(AthleteDontExistsError);
    });

    it("should retrieve body evaluations for an athlete", async () => {
        const athleteCreateService = new AthleteCreateService(athleteRepository);
        const createdAthlete = await athleteCreateService.execute(athlete);

        const bodyEvaluationMock = {
            ageAtTheMoment: 0,
            fatMass_kg: 0,
            leanMass_kg: 0,
            weight_cm: 0,
            height_kg: 0,
            bodyMassIndex: 0,
            bodyMassClass: "",
            skeletalMass: 0,
            bodyAge: 0,
            basalMetabolicRate: 0,
            waistRatioHip: 0,
            visceralFat: "",
            neck_circ_cm: 0,
            chest_circ_cm: 0,
            rightForearm_circ_cm: 0,
            leftForearm_circ_cm: 0,
            rightArm_circ_cm: 0,
            leftArm_circ_cm: 0,
            waist_circ_cm: 0,
            abdomen_circ_cm: 0,
            hip_circ_cm: 0,
            rightThigh_circ_cm: 0,
            leftThigh_circ_cm: 0,
            rightCalf_circ_cm: 0,
            leftCalf_circ_cm: 0,
            fatPercentage: 0,
            athlete: {
                connect: {
                    id: createdAthlete.id
                }
            }
        };

        const bodyEvaluationRepository = new BodyEvaluationRepositoryInMemory();
        await bodyEvaluationRepository.create(bodyEvaluationMock);

        const sut = new AthleteGetBodyEvaluationsService(athleteRepository, bodyEvaluationRepository);
        const evaluations = await sut.execute(createdAthlete.id!, athlete.trainer.connect!.id!);

        expect(evaluations).toBeInstanceOf(Array);
        expect(evaluations).toHaveLength(1);
        expect(evaluations![0]).toHaveProperty("id");
    });

    it("should retrieve anamnesis for an athlete", async () => {
        const athleteCreateService = new AthleteCreateService(athleteRepository);
        const createdAthlete = await athleteCreateService.execute(athlete);

        const anamnesisMock = {
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
                    id: createdAthlete.id
                }
            }
        };

        const anamnesisRepository = new AnamnesisRepositoryInMemory();
        await anamnesisRepository.create(anamnesisMock);

        const sut = new AthleteGetAnamnesisService(athleteRepository, anamnesisRepository);
        const anamnesis = await sut.execute(createdAthlete.id!, athlete.trainer.connect!.id!);

        expect(anamnesis).toBeInstanceOf(Array);
        expect(anamnesis).toHaveLength(1);
        expect(anamnesis![0]).toHaveProperty("id");
    });

    it("should be able to delete an athlete", async () => {
        const athleteCreateService = new AthleteCreateService(athleteRepository);
        const sut = new AthleteDeleteService(athleteRepository);

        const createdAthlete = await athleteCreateService.execute(athlete);

        await expect(async () => {
            await sut.execute(createdAthlete.id);
        }).not.toThrow();
    });

    it("should fail to delete a non-existent athlete", async () => {
        const athleteCreateService = new AthleteCreateService(athleteRepository);
        const sut = new AthleteDeleteService(athleteRepository);
        await athleteCreateService.execute(athlete);

        await expect(async () => {
            await sut.execute(randomUUID());
        }).rejects.toBeInstanceOf(AthleteDontExistsError);
    });


});
