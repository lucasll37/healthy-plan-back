import { TrainingEvolution, Prisma } from "@prisma/client";
import { ITrainingEvolutionRepository } from "../ITrainingEvolutionRepository";
import { prisma } from "../../../libs/prisma";

export class TrainingEvolutionRepositoryPrisma implements ITrainingEvolutionRepository {

    async create(data: Prisma.TrainingEvolutionCreateInput): Promise<TrainingEvolution> {
        return await prisma.trainingEvolution.create({ data });
    }
}