import { Prisma, Trainer } from "@prisma/client";

export interface ITrainerRepository {
    create(data: Prisma.TrainerCreateInput): Promise<Trainer>
    findByEmail(email: string): Promise<Trainer | null>
    findById(id: string): Promise<Trainer | null>
}