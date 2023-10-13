import { BodyEvaluation, Prisma } from "@prisma/client";
import { IBodyEvaluationRepository } from "../IBodyEvaluationRepository";
import { prisma } from "../../../libs/prisma";

export class BodyEvaluationRepositoryPrisma implements IBodyEvaluationRepository {

    async create(data: Prisma.BodyEvaluationCreateInput): Promise<BodyEvaluation> {
        return await prisma.bodyEvaluation.create({data});
    }

    async findById(id: string): Promise<BodyEvaluation | null> {
        const bodyEvaluation = await prisma.bodyEvaluation.findUnique({
            where: { id }
        });

        return bodyEvaluation;
    }

    async update(id: string, data: Prisma.BodyEvaluationUpdateInput): Promise<BodyEvaluation> {
        const bodyEvaluation = prisma.bodyEvaluation.update({
            where: { id },
            data
        });

        return bodyEvaluation;
    }

    async delete(id: string): Promise<void> {
        await prisma.bodyEvaluation.delete({
            where: { id }
        });
    }
}
