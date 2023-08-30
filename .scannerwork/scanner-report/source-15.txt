import { Prisma, FlexEvaluation } from "@prisma/client";

export interface IFlexEvaluationRepository {
    create(data: Prisma.FlexEvaluationCreateInput): Promise<FlexEvaluation>
}