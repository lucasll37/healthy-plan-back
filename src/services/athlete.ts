import { AthleteDontExistsError } from "../errors/athlete-dont-exists";
import { EmailAlreadyExistsError } from "../errors/email-already-exists";
import { IAthleteRepository } from "../repositories/athlete/IAthleteRepository";
import { Athlete, Prisma } from "@prisma/client";
import { CacheRedis } from "@/cache/redis/CacheRedis";

export class AthleteCreateService {
    private cache = CacheRedis.getInstance();

    constructor(private athleteRepository: IAthleteRepository) {}

    async execute(data: Prisma.AthleteCreateInput): Promise<Athlete> {
        const athlete = await this.athleteRepository.findByEmail(data.email);
        if(athlete) {
            // this.cache.set<Athlete>(athlete.id, athlete);
            throw new EmailAlreadyExistsError();
        }

        return await this.athleteRepository.create(data);
    }
}

export class AthletesGetbyTrainerService {
    private cache = CacheRedis.getInstance();


    constructor(private athleteRepository: IAthleteRepository) {}

    async execute(id: string): Promise<Athlete[]> {
        const athletes = await this.athleteRepository.getAthletesbyTrainer(id);

        if(!athletes) {
            throw new AthleteDontExistsError();
        }

        // this.cache.set<Athlete>(athlete.id, athlete);

        return athletes;
    }
}


export class AthleteGetByIdService {
    private cache = CacheRedis.getInstance();

    constructor(private athleteRepository: IAthleteRepository) {}

    async execute(id: string): Promise<Athlete> {
        const athlete = await this.athleteRepository.findById(id);

        if(!athlete) {
            throw new AthleteDontExistsError();
        }

        // this.cache.set<Athlete>(athlete.id, athlete);

        return athlete;
    }
}
