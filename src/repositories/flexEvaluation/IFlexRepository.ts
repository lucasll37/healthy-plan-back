import { Prisma, FlexEvaluation } from "@prisma/client";

export interface IFlexEvaluationRepository {
    create(data: Prisma.FlexEvaluationCreateArgs): Promise<FlexEvaluation>
}