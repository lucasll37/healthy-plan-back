import { Prisma, TrainingEvolution } from "@prisma/client";

export interface ITrainingEvolutionRepository {
    create(data: Prisma.TrainingEvolutionCreateArgs): Promise<TrainingEvolution>
}