import { expect, describe, it, beforeAll, beforeEach } from "vitest";
import { TrainerCreateService, TrainerDeleteService, TrainerGetByIdService, TrainerUpdateService } from "../../services/trainer";
import { TrainerRepositoryInMemory } from "../../repositories/trainer/inMemory/TrainerRepositoryInMemory";
import { randomUUID } from "node:crypto";
import { EmailAlreadyExistsError } from "../../errors/email-already-exists";
import { TrainerDontExistsError } from "../../errors/trainer-dont-exists";
import { ITrainerRepository } from "@/repositories/trainer/ITrainerRepository";
import { Prisma } from "@prisma/client";

let trainerRepository: ITrainerRepository;
let trainerMock: Prisma.TrainerCreateInput;

describe("Trainer Services", () => {

    beforeAll(() => {
        trainerMock = {
            name: "John",
            surname: "Doe",
            email: `${randomUUID()}@mock.com`,
            password: "123456",
            phone: "123456789"
        };
    });

    beforeEach(() => {
        trainerRepository = new TrainerRepositoryInMemory();
    });

    it("should be able create a new personal trainer", async () => {
        const sut = new TrainerCreateService(trainerRepository);
        const trainer = await sut.execute(trainerMock);
        expect(trainer).toHaveProperty("id");
    });

    it("shouldn't be able create a new personal trainer that already exists", async () => {
        const sut = new TrainerCreateService(trainerRepository);
        await sut.execute(trainerMock);

        await expect(async () => await sut.execute(trainerMock))
            .rejects.toBeInstanceOf(EmailAlreadyExistsError);
    });

    it("should be able to find a personal trainer that exists", async () => {
        const trainerCreateService = new TrainerCreateService(trainerRepository);
        const sut = new TrainerGetByIdService(trainerRepository);
        const trainerCreated = await trainerCreateService.execute(trainerMock);
        const trainerFound = await sut.execute(trainerCreated.id);

        expect(trainerFound).toHaveProperty("id");
    });

    it("shouldn't be able to find a personal trainer that doesn't exists", async () => {
        const sut = new TrainerGetByIdService(trainerRepository);

        await expect(async () => {
            await sut.execute(randomUUID());
        }).rejects.toBeInstanceOf(TrainerDontExistsError);
    });

    it("should be able to update a personal trainer that exists", async () => {
        const trainerCreateService = new TrainerCreateService(trainerRepository);
        const sut = new TrainerUpdateService(trainerRepository);
        const trainerCreated = await trainerCreateService.execute(trainerMock);
        const newTrainerName = "John Doe 2";
        const trainerUpdated = await sut.execute(trainerCreated.id, { name: newTrainerName });

        expect(trainerUpdated).toHaveProperty("name");
        expect(trainerUpdated.name).not.toBe(trainerMock.name);
        expect(trainerUpdated.name).toBe(newTrainerName);
    });

    it("shouldn't be able to update a personal trainer that dont exists", async () => {
        const sut = new TrainerUpdateService(trainerRepository);
        const newTrainerName = "John Doe 2";

        await expect(async () => {
            await sut.execute(randomUUID(), { name: newTrainerName });
        }).rejects.toBeInstanceOf(TrainerDontExistsError);
    });

    it("should be able to delete a personal trainer that exists", async () => {
        const trainerCreateService = new TrainerCreateService(trainerRepository);
        const sut = new TrainerDeleteService(trainerRepository);
        const trainerCreated = await trainerCreateService.execute(trainerMock);
        expect(async () => {
            await sut.execute(trainerCreated.id);
        }).not.toThrow();
    });

    it("shouldn't be able to delete a personal trainer that doesn't exists", async () => {
        const sut = new TrainerDeleteService(trainerRepository);
        expect(async () => {
            await sut.execute(randomUUID());
        }).rejects.toBeInstanceOf(TrainerDontExistsError);
    });

});
