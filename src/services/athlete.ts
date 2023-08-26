import { EmailAlreadyExistsError } from "@/errors/email-already-exists";
import { IAthleteRepository } from "@/repositories/athlete/IAthleteRepository";
import { Athlete, Prisma } from "@prisma/client";

export class AthleteCreateService {

    constructor(private athleteRepository: IAthleteRepository) { }

    async execute(data: Prisma.AthleteCreateInput): Promise<Athlete> {
        const athlete = await this.athleteRepository.findByEmail(data.email);
        
        if(athlete) {
            console.log("la ele")
            throw new EmailAlreadyExistsError();
        }

        return await this.athleteRepository.create(data);
    }
}

export class AthleteGetByIdService {

    constructor(private athleteRepository: IAthleteRepository) { }

    async execute(id: string): Promise<Athlete | null> {
        return await this.athleteRepository.findById(id);
    }
}
