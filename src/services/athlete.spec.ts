import { expect, describe, it, beforeEach } from "vitest";
import { compare } from "bcryptjs";
import { AthleteCreateService } from "./athlete";
import { IAthleteRepository } from "@/repositories/athlete/IAthleteRepository";
import { AthleteRepositoryInMemory } from "@/repositories/athlete/inMemory/AthleteRepositoryInMemory";

let athleteRepository: IAthleteRepository;
let sut: AthleteCreateService;

describe("Register Use Case", () => {
    
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
            phone: "123456789"
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