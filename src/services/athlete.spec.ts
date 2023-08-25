import { expect, describe, it, beforeEach, beforeAll } from "vitest";
import { compare } from "bcryptjs";
import { AthleteCreateService } from "./athlete";
import { IAthleteRepository } from "@/repositories/athlete/IAthleteRepository";
import { AthleteRepositoryInMemory } from "@/repositories/athlete/inMemory/AthleteRepositoryInMemory";
import { Trainer } from "@prisma/client";
import { TrainerRepositoryInMemory } from "@/repositories/trainer/inMemory/TrainerRepositoryInMemory";
import { TrainerCreateService } from "./trainer";
import { randomUUID } from "crypto";
import { debug } from "console";

let athleteRepository: IAthleteRepository;
let sut: AthleteCreateService;
let trainer: Trainer

describe("Athlete Use Case", () => {

    beforeAll(async () => {

        const trainerRepository = new TrainerRepositoryInMemory();
        const sut = new TrainerCreateService(trainerRepository);

        trainer = await sut.execute({
            name: "John",
            surname: "Doe",
            email: `${randomUUID()}@mock.com`,
            password: "123456",
            phone: "123456789"
        });
    })
    
    beforeEach(() => {
        athleteRepository = new AthleteRepositoryInMemory();
        sut = new AthleteCreateService(athleteRepository);
    });

    it("should be able create a new athlete", async () => {

        const athlete = await sut.execute({
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
                    id: trainer.id
                }
            }
        });

        expect(athlete).toHaveProperty("id");
    });

    // it("should hash user password upon registration", async () => {

    //     const { user } = await sut.execute({
    //         name: "John Doe",
    //         email: "johndoe@example.com",
    //         password: "123456"
    //     });

    //     const isPasswordCorrectlyHashed = await compare(
    //         "123456",
    //         user.password_hash
    //     );
        
    //     expect(isPasswordCorrectlyHashed).toBe(true);
    // });



    // it("should not be able to register with email twice", async () => {

    //     const email = "johndoe@example.com";

    //     await sut.execute({
    //         name: "John Doe",
    //         email,
    //         password: "123456"
    //     });

    //     await expect(() =>
    //         sut.execute({
    //             name: "John Doe",
    //             email,
    //             password: "123456"
    //         })
    //     ).rejects.toBeInstanceOf(UserAlreadyExistsError);
    // });
});