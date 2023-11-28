import { expect, describe, it, beforeAll, beforeEach } from "vitest";

import {
    BodyEvaluationCreateService,
    BodyEvaluationGetByIdService,
    BodyEvaluationUpdateService,
    BodyEvaluationDeleteService
} from "../../src/services/bodyEvaluation";

import { AthleteCreateService } from "../../src/services/athlete";
import { BodyEvaluationRepositoryInMemory } from "../../src/repositories/bodyEvaluation/inMemory/BodyEvaluationRepositoryInMemory";
import { AthleteRepositoryInMemory } from "../../src/repositories/athlete/inMemory/AthleteRepositoryInMemory";
import { randomUUID } from "node:crypto";
import { BodyEvaluationDontExistsError } from "../../src/errors/bodyEvaluation-dont-exists";
import { IAthleteRepository } from "../../src/repositories/athlete/IAthleteRepository";
import { IBodyEvaluationRepository } from "../../src/repositories/bodyEvaluation/IBodyEvaluationRepository";
import { Prisma, Athlete } from "@prisma/client";


let bodyEvaluationRepository: IBodyEvaluationRepository;
let athleteRepository: IAthleteRepository;
let bodyEvaluationMock: Prisma.BodyEvaluationCreateInput;
let athleteMock: Prisma.AthleteCreateInput;
let trainerId: string;

let athleteCreateService;
let athleteCreated: Athlete;

describe("Body Evaluation Services", () => {

    beforeAll(() => {
        trainerId = randomUUID();

        bodyEvaluationMock = {
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
                    id: randomUUID()
                }
            }
        };

        athleteMock = {
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
                    id: trainerId
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

    beforeEach(async () => {
        bodyEvaluationRepository = new BodyEvaluationRepositoryInMemory();
        athleteRepository = new AthleteRepositoryInMemory();

        athleteCreateService = new AthleteCreateService(athleteRepository);
        athleteCreated = await athleteCreateService.execute(athleteMock);

        bodyEvaluationMock.athlete.connect!.id = athleteCreated.id;
    });

    it("should be able create a new body evaluation record", async () => {
        const sut = new BodyEvaluationCreateService(bodyEvaluationRepository, athleteRepository);
        const bodyEvaluation = await sut.execute({ data: bodyEvaluationMock, trainerId });
        expect(bodyEvaluation).toHaveProperty("id");
    });

    it("should be able to find a body evaluation record that exists", async () => {
        const bodyEvaluationCreateService = new BodyEvaluationCreateService(bodyEvaluationRepository, athleteRepository);
        const sut = new BodyEvaluationGetByIdService(bodyEvaluationRepository);
        const bodyEvaluationCreated = await bodyEvaluationCreateService.execute({ data: bodyEvaluationMock, trainerId });
        const bodyEvaluationFound = await sut.execute(bodyEvaluationCreated.id);

        expect(bodyEvaluationFound).toHaveProperty("id");
    });

    it("shouldn't be able to find a body evaluation record that doesn't exist", async () => {
        const sut = new BodyEvaluationGetByIdService(bodyEvaluationRepository);

        await expect(async () => {
            await sut.execute(randomUUID());
        }).rejects.toBeInstanceOf(BodyEvaluationDontExistsError);
    });

    it("should be able to update a body evaluation record that exists", async () => {
        const bodyEvaluationCreateService = new BodyEvaluationCreateService(bodyEvaluationRepository, athleteRepository);
        const sut = new BodyEvaluationUpdateService(bodyEvaluationRepository);
        const bodyEvaluationCreated = await bodyEvaluationCreateService.execute({ data: bodyEvaluationMock, trainerId });
        const updatedData = { /* dados atualizados aqui */ };
        const bodyEvaluationUpdated = await sut.execute(bodyEvaluationCreated.id, updatedData);

        expect(bodyEvaluationUpdated).toMatchObject(updatedData);
    });

    it("shouldn't be able to update a body evaluation record that doesn't exist", async () => {
        const sut = new BodyEvaluationUpdateService(bodyEvaluationRepository);
        const updatedData = { /* dados atualizados aqui */ };

        await expect(async () => {
            await sut.execute(randomUUID(), updatedData);
        }).rejects.toBeInstanceOf(BodyEvaluationDontExistsError);
    });

    it("should be able to delete a body evaluation record that exists", async () => {
        const bodyEvaluationCreateService = new BodyEvaluationCreateService(bodyEvaluationRepository, athleteRepository);
        const sut = new BodyEvaluationDeleteService(bodyEvaluationRepository);
        const bodyEvaluationCreated = await bodyEvaluationCreateService.execute({ data: bodyEvaluationMock, trainerId });

        await expect(async () => {
            await sut.execute(bodyEvaluationCreated.id);
        }).not.toThrow();
    });

    it("shouldn't be able to delete a body evaluation record that doesn't exist", async () => {
        const sut = new BodyEvaluationDeleteService(bodyEvaluationRepository);

        await expect(async () => {
            await sut.execute(randomUUID());
        }).rejects.toBeInstanceOf(BodyEvaluationDontExistsError);
    });

});
