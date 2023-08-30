import { AthleteDontExistsError } from "../errors/athlete-dont-exists";
import { EmailAlreadyExistsError } from "../errors/email-already-exists";
import { IAthleteRepository } from "../repositories/athlete/IAthleteRepository";
import { Athlete, Prisma } from "@prisma/client";

export class AthleteCreateService {

    constructor(private athleteRepository: IAthleteRepository) { }

    async execute(data: Prisma.AthleteCreateInput): Promise<Athlete> {
        const athlete = await this.athleteRepository.findByEmail(data.email);
        
        if(athlete) {
            throw new EmailAlreadyExistsError();
        }

        return await this.athleteRepository.create(data);
    }
}

export class AthleteGetByIdService {

    constructor(private athleteRepository: IAthleteRepository) { }

    async execute(id: string): Promise<Athlete> {
        const athlete = await this.athleteRepository.findById(id);

        if(!athlete) {
            throw new AthleteDontExistsError();
        }

        return athlete;
    }
}
