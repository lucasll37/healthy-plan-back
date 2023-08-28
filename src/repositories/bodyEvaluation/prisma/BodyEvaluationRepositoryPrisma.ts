import { BodyEvaluation, Prisma } from "@prisma/client";
import { IBodyValuationRepository } from "../IBodyEvaluationRepository";
import { prisma } from "@/libs/prisma";

export class BodyEvaluationRepositoryPrisma implements IBodyValuationRepository {

    async create(data: Prisma.BodyEvaluationCreateInput): Promise<BodyEvaluation> {
        return await prisma.bodyEvaluation.create({data});
    }
}