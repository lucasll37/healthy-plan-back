import { AthleteDontExistsError } from "../errors/athlete-dont-exists";
import { EmailAlreadyExistsError } from "../errors/email-already-exists";
import { IAthleteRepository } from "../repositories/athlete/IAthleteRepository";
import { Anamnesis, Athlete, BodyEvaluation, Prisma } from "@prisma/client";
import { CacheRedis } from "@/cache/redis/CacheRedis";
import { IAnamnesisRepository } from "@/repositories/anamnesis/IAnamnesisRepository";
import { AthleteAndTrainerDontMeet } from "@/errors/athlete-and-trainer-dont-meet";
import { IBodyEvaluationRepository } from "@/repositories/bodyEvaluation/IBodyEvaluationRepository";

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


export class AthleteUpdateService {
    private cache = CacheRedis.getInstance();

    constructor(private athleteRepository: IAthleteRepository) {}

    async execute(id: string, data: Prisma.AthleteUpdateInput): Promise<Athlete> {
        try {
            const athlete = await this.athleteRepository.update(id, data);
            // if(CacheRedis.isConnected) await this.cache!.set<Athlete>(athlete.id, athlete);

            return athlete;
        }

        catch {
            throw new AthleteDontExistsError();
        }
    }
}


export class AthleteDeleteService {
    private cache = CacheRedis.getInstance();

    constructor(private athleteRepository: IAthleteRepository) {}

    async execute(id: string): Promise<void> {
        try {
            await this.athleteRepository.delete(id);
            // if(CacheRedis.isConnected) await this.cache!.delete(id);
        }
        catch {
            throw new AthleteDontExistsError();
        }
    }
}


export class AthleteGetAnamnesisService {
    private cache = CacheRedis.getInstance();

    constructor(
        private athleteRepository: IAthleteRepository,
        private anamnesisRepository: IAnamnesisRepository
    ) {}

    async execute(athleteId: string, trainerId: string): Promise<Anamnesis[] | null> {
        const athlete = await this.athleteRepository.findById(athleteId);

        if(!athlete){
            throw new AthleteDontExistsError();
        }

        if(athlete.trainerId !== trainerId) {
            throw new AthleteAndTrainerDontMeet();
        }

        const anamnesis = await this.anamnesisRepository.findByAthleteId(athleteId);

        return anamnesis;
    }
}


export class AthleteGetBodyEvaluationsService {
    private cache = CacheRedis.getInstance();

    constructor(
        private athleteRepository: IAthleteRepository,
        private bodyEvaluationRepository: IBodyEvaluationRepository
    ) {}

    async execute(athleteId: string, trainerId: string): Promise<BodyEvaluation[] | null> {
        const athlete = await this.athleteRepository.findById(athleteId);

        if(!athlete){
            throw new AthleteDontExistsError();
        }

        if(athlete.trainerId !== trainerId) {
            throw new AthleteAndTrainerDontMeet();
        }

        const bodyEvaluations = await this.bodyEvaluationRepository.findByAthleteId(athleteId);

        return bodyEvaluations;
    }
}


export class AthletesGetAllService {

    constructor(private athleteRepository: IAthleteRepository) {}

    async execute(): Promise<Athlete[]> {
        const athletes = await this.athleteRepository.getAll();

        return athletes;
    }
}
