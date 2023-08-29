import { expect, describe, it } from "vitest";
import { TrainerCreateService, TrainerGetByIdService } from "../../services/trainer";
import { TrainerRepositoryInMemory } from "../../repositories/trainer/inMemory/TrainerRepositoryInMemory";
import { randomUUID } from "crypto";
import { EmailAlreadyExistsError } from "../../errors/email-already-exists";
import { TrainerDontExistsError } from "../../errors/trainer-dont-exists";

describe("Trainer Use Case", () => {

    it("should be able create a new personal trainer", async () => {

        const trainerRepository = new TrainerRepositoryInMemory();
        const sut = new TrainerCreateService(trainerRepository);

        const trainer = await sut.execute({
            name: "John",
            surname: "Doe",
            email: `${randomUUID()}@mock.com`,
            password: "123456",
            phone: "123456789"
        });

        expect(trainer).toHaveProperty("id");
    });

    it("shouldn't be able create a new personal trainer that already exists", async () => {

        const trainerRepository = new TrainerRepositoryInMemory();
        const sut = new TrainerCreateService(trainerRepository);

        const trainer = {
            name: "John",
            surname: "Doe",
            email: `${randomUUID()}@mock.com`,
            password: "123456",
            phone: "123456789"
        };
        
        await sut.execute(trainer);

        await expect(async () => await sut.execute(trainer))
            .rejects.toBeInstanceOf(EmailAlreadyExistsError);
    });

    it("should be able to find a personal trainer that exists", async () => {

        
        const trainerRepository = new TrainerRepositoryInMemory();
        const trainerCreateService = new TrainerCreateService(trainerRepository);
        const sut = new TrainerGetByIdService(trainerRepository);
        
        const trainer = {
            name: "John",
            surname: "Doe",
            email: `${randomUUID()}@mock.com`,
            password: "123456",
            phone: "123456789"
        };

        const trainerCreated = await trainerCreateService.execute(trainer);
        const trainerFound = await sut.execute(trainerCreated.id);

        expect(trainerFound).toHaveProperty("id");
    });

    it("shouldn't be able to find a personal trainer that doesn't exists", async () => {

        const trainerRepository = new TrainerRepositoryInMemory();
        const sut = new TrainerGetByIdService(trainerRepository);
        
        await expect(async () => {
            await sut.execute(randomUUID());
        }).rejects.toBeInstanceOf(TrainerDontExistsError);
    });
});