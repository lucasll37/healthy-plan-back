import { Prisma, BodyEvaluation } from "@prisma/client";

export interface IBodyEvaluationRepository {
    create(data: Prisma.BodyEvaluationCreateInput): Promise<BodyEvaluation>
    findById(id: string): Promise<BodyEvaluation | null>
    update(id: string, data: Prisma.BodyEvaluationUpdateInput): Promise<BodyEvaluation>
    delete(id: string): Promise<void>
}
