import { AthleteAndTrainerDontMeet } from "@/errors/athlete-and-trainer-dont-meet";
import { AthleteDontExistsError } from "@/errors/athlete-dont-exists";
import { IAthleteRepository } from "@/repositories/athlete/IAthleteRepository";
import { IBodyValuationRepository } from "@/repositories/bodyEvaluation/IBodyEvaluationRepository";
import { BodyEvaluation, Prisma } from "@prisma/client";

interface IServiceParams {
    data: Prisma.BodyEvaluationCreateInput
    trainerId: string
}
export class BodyEvaluationCreateService {

    constructor(
        private bodyEvaluationRepository: IBodyValuationRepository,
        private athleteRepository: IAthleteRepository    
    ) { }


    async execute({ data, trainerId }: IServiceParams): Promise<BodyEvaluation> {
        const athlete = await this.athleteRepository.findById(data.athlete.connect!.id!);
        
        if(!athlete){
            throw new AthleteDontExistsError();
        }
        
        if(athlete.trainerId !== trainerId) {
            throw new AthleteAndTrainerDontMeet();
        }

        return await this.bodyEvaluationRepository.create(data);
    }
}