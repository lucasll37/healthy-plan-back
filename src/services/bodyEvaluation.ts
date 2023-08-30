import { ICache } from "@/cache/ICache";
import { CacheRedis } from "@/cache/redis/CacheRedis";
import { AthleteAndTrainerDontMeet } from "@/errors/athlete-and-trainer-dont-meet";
import { AthleteDontExistsError } from "@/errors/athlete-dont-exists";
import { IAthleteRepository } from "@/repositories/athlete/IAthleteRepository";
import { IBodyValuationRepository } from "@/repositories/bodyEvaluation/IBodyEvaluationRepository";
import { Athlete, BodyEvaluation, Prisma } from "@prisma/client";

interface IServiceParams {
    data: Prisma.BodyEvaluationCreateInput
    trainerId: string
}
export class BodyEvaluationCreateService {
    private cache: ICache;

    constructor(
        private bodyEvaluationRepository: IBodyValuationRepository,
        private athleteRepository: IAthleteRepository
        ) {
        this.cache = new CacheRedis();
    }


    async execute({ data, trainerId }: IServiceParams): Promise<BodyEvaluation> {
        const athlete = await this.athleteRepository.findById(data.athlete.connect!.id!);

        if(!athlete){
            throw new AthleteDontExistsError();
        }

        this.cache.set<Athlete>(athlete.id, athlete);

        if(athlete.trainerId !== trainerId) {
            throw new AthleteAndTrainerDontMeet();
        }

        const bodyEvaluation = await this.bodyEvaluationRepository.create(data);
        this.cache.set<BodyEvaluation>(bodyEvaluation.id, bodyEvaluation);

        return bodyEvaluation;
    }
}
