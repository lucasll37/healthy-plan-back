import { Prisma, BodyEvaluation } from "@prisma/client";

export interface IBodyValuationRepository {
    create(data: Prisma.BodyEvaluationCreateInput): Promise<BodyEvaluation>
}