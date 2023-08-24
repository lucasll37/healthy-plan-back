import { ITrainerRepository } from "@/repositories/trainer/ITrainerRepository";
import { Athlete, Prisma, Trainer } from "@prisma/client";
import { compare } from "bcryptjs";



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
            throw new Error();
        }
        
        const doesPasswordMatch = await compare(password, trainer.password);

        if(!doesPasswordMatch) {
            throw new Error();
        } 

        return { trainer };
    }
}
