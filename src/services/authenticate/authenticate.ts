import { IUsersRepository } from "@/repositories/users-repository";
import { InvalidCredenctialsError } from "../errors/invalid-credentials-error";
import { compare } from "bcryptjs";
import { User } from "@prisma/client";

interface IAuthenticateRequest {
    email: string;
    password: string;
}

interface IAuthenticateResponse {
    user: User
}


export class AuthenticateService {

    private usersRepository: IUsersRepository;

    constructor(userRepository: IUsersRepository) {
        this.usersRepository = userRepository;
    }

    async execute({email, password}: IAuthenticateRequest): Promise<IAuthenticateResponse> {
        const user = await this.usersRepository.findByEmail(email);

        if(!user) {
            throw new InvalidCredenctialsError();
        }

        const doesPasswordMatch = await compare(password, user.password_hash);

        if(!doesPasswordMatch) {
            throw new InvalidCredenctialsError();
        }  

        return {
            user
        };
    }
}