import { expect, describe, it, beforeEach } from "vitest";
import { AuthenticateService } from "./authenticate";
import { InMemoryUserRepository } from "@/repositories/in-memory/in-memory-user-repository";
import { hash } from "bcryptjs";
import { InvalidCredenctialsError } from "../errors/invalid-credentials-error";

let usersRepository: InMemoryUserRepository;
let sut: AuthenticateService;

describe("Register Use Case", () => {

    beforeEach(() => {
        usersRepository = new InMemoryUserRepository();
        sut = new AuthenticateService(usersRepository);
    });

    it("should be able to authenticate", async () => {



        await usersRepository.create({
            name: "John Doe",
            email: "johndoe@example.com",
            password_hash: await hash("123456", 6)
        });

        const { user } = await sut.execute({
            email: "johndoe@example.com",
            password: "123456"
        });

        expect(user).toHaveProperty("id");
    });

    it("should not be able to authenticate with wrong password", async () => {

        await usersRepository.create({
            name: "John Doe",
            email: "johndoe@example.com",
            password_hash: await hash("123456", 6)
        });

        expect(() => sut.execute({
            email: "johndoe@example.com",
            password: "12345_"
        })).rejects.toBeInstanceOf(InvalidCredenctialsError);
    });

    it("should not be able to authenticate with wrong email", async () => {

        expect(() => sut.execute({
            email: "johndoe@example.com",
            password: "123456"
        })).rejects.toBeInstanceOf(InvalidCredenctialsError);
    });
});