import { Trainer, Prisma } from "@prisma/client";
import { ITrainerRepository } from "../ITrainerRepository";
import { prisma } from "../../../libs/prisma";

export class TrainerRepositoryPrisma implements ITrainerRepository {

    async create(data: Prisma.TrainerCreateInput): Promise<Trainer> {
        const trainer = await prisma.trainer.create({ data });

        return trainer;
    }

    async findByEmail(email: string): Promise<Trainer | null> {
        const trainer = await prisma.trainer.findUnique({
            where: { email }
        });

        return trainer;
    }

    async findById(id: string): Promise<Trainer | null> {
        const trainer = await prisma.trainer.findUnique({
            where: { id }
        });

        return trainer;
    }

    async update(id: string, data: Prisma.TrainerUpdateInput): Promise<Trainer> {
        const trainer = await prisma.trainer.update({
            where: { id },
            data
        });

        return trainer;
    }

    async delete(id: string): Promise<void> {
        await prisma.trainer.delete({
            where: { id }
        });
    }

}
