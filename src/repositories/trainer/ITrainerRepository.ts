import { Prisma, Trainer } from "@prisma/client";

export interface ITrainerRepository {
    create(data: Prisma.TrainerCreateInput): Promise<Trainer>
}