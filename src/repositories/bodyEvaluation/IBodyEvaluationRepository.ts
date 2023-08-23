import { Prisma, BodyValuation } from "@prisma/client";

export interface IBodyValuationRepository {
    create(data: Prisma.BodyValuationCreateArgs): Promise<BodyValuation>
}