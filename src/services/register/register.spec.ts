import { expect, describe, it, beforeEach } from "vitest";
import { RegisterService } from "./register";
import { compare } from "bcryptjs";
import { InMemoryUserRepository } from "@/repositories/in-memory/in-memory-user-repository";
import { UserAlreadyExistsError } from "../errors/user-already-exists";

let usersRepository: InMemoryUserRepository;
let sut: RegisterService;

describe("Register Use Case", () => {
    
    beforeEach(() => {
        usersRepository = new InMemoryUserRepository();
        sut = new RegisterService(usersRepository);
    });

    it("should be able to register", async () => {



        const { user } = await sut.execute({
            name: "John Doe",
            email: "johndoe@example.com",
            password: "123456"
        });

        expect(user).toHaveProperty("id");
    });


    it("should hash user password upon registration", async () => {

        const { user } = await sut.execute({
            name: "John Doe",
            email: "johndoe@example.com",
            password: "123456"
        });

        const isPasswordCorrectlyHashed = await compare(
            "123456",
            user.password_hash
        );
        
        expect(isPasswordCorrectlyHashed).toBe(true);
    });



    it("should not be able to register with email twice", async () => {

        const email = "johndoe@example.com";

        await sut.execute({
            name: "John Doe",
            email,
            password: "123456"
        });

        await expect(() =>
            sut.execute({
                name: "John Doe",
                email,
                password: "123456"
            })
        ).rejects.toBeInstanceOf(UserAlreadyExistsError);
    });
});