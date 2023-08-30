import { ICache } from "@/cache/ICache";
import { AthleteDontExistsError } from "../errors/athlete-dont-exists";
import { EmailAlreadyExistsError } from "../errors/email-already-exists";
import { IAthleteRepository } from "../repositories/athlete/IAthleteRepository";
import { Athlete, Prisma } from "@prisma/client";
import { CacheRedis } from "@/cache/redis/CacheRedis";

export class AthleteCreateService {
    private cache: ICache;

    constructor(private athleteRepository: IAthleteRepository) {
        this.cache = new CacheRedis();
    }

    async execute(data: Prisma.AthleteCreateInput): Promise<Athlete> {
        const athlete = await this.athleteRepository.findByEmail(data.email);
        if(athlete) {
            this.cache.set<Athlete>(athlete.id, athlete);
            throw new EmailAlreadyExistsError();
        }

        return await this.athleteRepository.create(data);
    }
}

export class AthleteGetByIdService {
    private cache: ICache;

    constructor(private athleteRepository: IAthleteRepository) {
        this.cache = new CacheRedis();
    }

    async execute(id: string): Promise<Athlete> {
        const athlete = await this.athleteRepository.findById(id);

        if(!athlete) {
            throw new AthleteDontExistsError();
        }

        this.cache.set<Athlete>(athlete.id, athlete);

        return athlete;
    }
}
