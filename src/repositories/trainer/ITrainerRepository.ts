import { Prisma, Trainer } from "@prisma/client";

export interface ITrainerRepository {
    create(data: Prisma.TrainerCreateInput): Promise<Trainer>
    findByEmail(email: string): Promise<Trainer | null>
    findById(id: string): Promise<Trainer | null>
    update(id: string, data: Prisma.TrainerUpdateInput): Promise<Trainer>
    delete(id: string): Promise<void>
}
