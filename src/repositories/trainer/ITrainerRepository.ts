import { Prisma, Trainer } from "@prisma/client";

export interface IBodyValuationRepository {
    create(data: Prisma.TrainerCreateArgs): Promise<Trainer>
}