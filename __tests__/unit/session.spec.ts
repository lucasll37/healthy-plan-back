import { expect, describe, it, beforeEach } from "vitest";
import { AuthenticateService } from "../../src/services/session";
import { TrainerRepositoryInMemory } from "../../src/repositories/trainer/inMemory/TrainerRepositoryInMemory";
import bcrypt from "bcryptjs";
import { InvalidCredenctialsError } from "../../src/errors/invalid-credentials";
import { ITrainerRepository } from "../../src/repositories/trainer/ITrainerRepository";
import { randomUUID } from "node:crypto";

let trainerRepository: ITrainerRepository;
let validTrainer;

describe("Authenticate Service", () => {

    beforeEach(async () => {
        trainerRepository = new TrainerRepositoryInMemory();
        const hashedPassword = await bcrypt.hash("validPassword", 6);
        validTrainer = await trainerRepository.create({
            name: "John",
            surname: "Doe",
            email: `${randomUUID()}@mock.com`,
            password: hashedPassword,
            phone: "123456789"
        });
    });

    it("should authenticate with valid credentials", async () => {
        const sut = new AuthenticateService(trainerRepository);
        const response = await sut.execute({ email: validTrainer.email, password: "validPassword" });

        expect(response).toHaveProperty("trainer");
        expect(response.trainer.id).toBe(validTrainer.id);
    });

    it("should not authenticate with invalid email", async () => {
        const sut = new AuthenticateService(trainerRepository);

        await expect(async () => {
            await sut.execute({ email: "invalidemail@mock.com", password: "validPassword" });
        }).rejects.toBeInstanceOf(InvalidCredenctialsError);
    });

    it("should not authenticate with invalid password", async () => {
        const sut = new AuthenticateService(trainerRepository);

        await expect(async () => {
            await sut.execute({ email: validTrainer.email, password: "invalidPassword" });
        }).rejects.toBeInstanceOf(InvalidCredenctialsError);
    });

});
