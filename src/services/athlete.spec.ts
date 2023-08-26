import { expect, describe, it, beforeEach, beforeAll } from "vitest";
import { AthleteCreateService } from "./athlete";
import { IAthleteRepository } from "@/repositories/athlete/IAthleteRepository";
import { AthleteRepositoryInMemory } from "@/repositories/athlete/inMemory/AthleteRepositoryInMemory";
import { randomUUID } from "crypto";
import { EmailAlreadyExistsError } from "@/errors/email-already-exists";

let athleteRepository: IAthleteRepository;
let sut: AthleteCreateService;
let athlete: any;

describe("Athlete Use Case", () => {

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
        }
        
    })
    
    beforeEach(() => {
        athleteRepository = new AthleteRepositoryInMemory();
        sut = new AthleteCreateService(athleteRepository);
    });

    it("should be able create a new athlete", async () => {

        const athleteCreated = await sut.execute(athlete);
        expect(athleteCreated).toHaveProperty("id");
    });

    it("shouldn't be able create a new athlete that already exists", async () => {

        await sut.execute(athlete);
        await expect(async () => {
            await sut.execute(athlete);
            }).rejects.toBeInstanceOf(EmailAlreadyExistsError);
    });
});