import { CacheRedis } from "@/cache/redis/CacheRedis";
import { AthleteAndTrainerDontMeet } from "@/errors/athlete-and-trainer-dont-meet";
import { AthleteDontExistsError } from "@/errors/athlete-dont-exists";
import { BodyEvaluationDontExistsError } from "@/errors/bodyEvaluation-dont-exists";
import { IAthleteRepository } from "@/repositories/athlete/IAthleteRepository";
import { IBodyEvaluationRepository } from "@/repositories/bodyEvaluation/IBodyEvaluationRepository";
import { BodyEvaluation, Prisma } from "@prisma/client";

interface IServiceParams {
    data: Prisma.BodyEvaluationCreateInput
    trainerId: string
}

export class BodyEvaluationCreateService {
    private cache = CacheRedis.getInstance();


    constructor(
        private bodyEvaluationRepository: IBodyEvaluationRepository,
        private athleteRepository: IAthleteRepository
    ) {}

    async execute({ data, trainerId }: IServiceParams): Promise<BodyEvaluation> {
        const athlete = await this.athleteRepository.findById(data.athlete.connect!.id!);

        if(!athlete){
            throw new AthleteDontExistsError();
        }

        // this.cache.set<Athlete>(athlete.id, athlete);

        if(athlete.trainerId !== trainerId) {
            throw new AthleteAndTrainerDontMeet();
        }

        const bodyEvaluation = await this.bodyEvaluationRepository.create(data);
        // this.cache.set<BodyEvaluation>(bodyEvaluation.id, bodyEvaluation);

        return bodyEvaluation;
    }
}



export class BodyEvaluationGetByIdService {
    private cache = CacheRedis.getInstance();

    constructor(private bodyEvaluationRepository: IBodyEvaluationRepository) {}

    async execute(id: string): Promise<BodyEvaluation> {
        const bodyEvaluation: BodyEvaluation | null = await this.bodyEvaluationRepository.findById(id);

        // if(CacheRedis.isConnected) {
        //     bodyEvaluation =
        //         await this.cache!.get<BodyEvaluation>(id)
        //         ??
        //         await this.trainerRepository.findById(id);
        // }

        // else {
        //     bodyEvaluation = await this.bodyEvaluationRepository.findById(id);
        // }


        if (!bodyEvaluation) {
            throw new BodyEvaluationDontExistsError();
        }

        // CacheRedis.isConnected && await this.cache!.set<BodyEvaluation>(bodyEvaluation.id, bodyEvaluation);

        return bodyEvaluation;
    }
}

export class BodyEvaluationUpdateService {
    private cache = CacheRedis.getInstance();

    constructor(private bodyEvaluationRepository: IBodyEvaluationRepository) {}

    async execute(id: string, data: Prisma.TrainerUpdateInput): Promise<BodyEvaluation> {
        try {
            const bodyEvaluation = await this.bodyEvaluationRepository.update(id, data);
            // if(CacheRedis.isConnected) await this.cache!.set<BodyEvaluation>(bodyEvaluation.id, bodyEvaluation);

            return bodyEvaluation;
        }

        catch {
            throw new BodyEvaluationDontExistsError();
        }
    }
}

export class BodyEvaluationDeleteService {
    private cache = CacheRedis.getInstance();

    constructor(private bodyEvaluationRepository: IBodyEvaluationRepository) {}

    async execute(id: string): Promise<void> {
        try {
            await this.bodyEvaluationRepository.delete(id);
            // if(CacheRedis.isConnected) await this.cache!.delete(id);
        }
        catch {
            throw new BodyEvaluationDontExistsError();
        }
    }
}
