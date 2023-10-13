import { expect, describe, it, beforeEach, beforeAll } from "vitest";
import { AthleteCreateService, AthletesGetbyTrainerService } from "../../src/services/athlete";
import { IAthleteRepository } from "../../src/repositories/athlete/IAthleteRepository";
import { AthleteRepositoryInMemory } from "../../src/repositories/athlete/inMemory/AthleteRepositoryInMemory";
import { randomUUID } from "crypto";
import { EmailAlreadyExistsError } from "../../src/errors/email-already-exists";
import { Prisma } from "@prisma/client";


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
});
