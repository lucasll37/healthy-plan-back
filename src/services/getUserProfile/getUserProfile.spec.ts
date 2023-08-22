import { expect, describe, it, beforeEach } from "vitest";
import { InMemoryUserRepository } from "@/repositories/in-memory/in-memory-user-repository";
import { IUsersRepository } from "@/repositories/users-repository";
import { hash } from "bcryptjs";
import { GetUserProfileService } from "./getUserProfile";
import { ResourceNotFoundError } from "../errors/resource-not-found";

let usersRepository: IUsersRepository;
let sut: GetUserProfileService;

describe("Get User Profile Use Case", () => {

    beforeEach(() => {
        usersRepository = new InMemoryUserRepository();
        sut = new GetUserProfileService(usersRepository);
    });

    it("should be able to get user profile", async () => {

        const createdUser = await usersRepository.create({
            name: "John Doe",
            email: "johndoe@example.com",
            password_hash: await hash("123456", 6)
        });

        const { user } = await sut.execute({
            userId: createdUser.id
        });

        expect(user.id).toStrictEqual(expect.any(String));
        expect(user.name).toStrictEqual("John Doe");
    });

    it("should not be able to get user profile with wrong id", async () => {

        expect(() => sut.execute({
            userId: "non-existing-user-id",
        })).rejects.toBeInstanceOf(ResourceNotFoundError);
    });
});