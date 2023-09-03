import { InvalidCredenctialsError } from "@/errors/invalid-credentials";
import { ITrainerRepository } from "@/repositories/trainer/ITrainerRepository";
import { Trainer } from "@prisma/client";
import bcrypt from "bcryptjs";



interface IAuthenticateRequest {
    email: string,
    password: string
}

interface IAuthenticateResponse {
    trainer: Trainer
}

export class AuthenticateService {

    constructor(private trainerRepository: ITrainerRepository) { }

    async execute({ email, password }: IAuthenticateRequest): Promise<IAuthenticateResponse> {
        const trainer = await this.trainerRepository.findByEmail(email);

        if (!trainer) {
            throw new InvalidCredenctialsError();
        }

        const doesPasswordMatch = await bcrypt.compare(password, trainer.password);

        if(!doesPasswordMatch) {
            throw new InvalidCredenctialsError();
        }

        return { trainer };
    }
}
