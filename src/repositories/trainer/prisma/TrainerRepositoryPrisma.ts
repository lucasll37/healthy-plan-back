import { Trainer, Prisma } from "@prisma/client";
import { ITrainerRepository } from "../ITrainerRepository";
import { prisma } from "@/libs/prisma";

export class TrainerRepositoryPrisma implements ITrainerRepository {

    async create(data: Prisma.TrainerCreateInput): Promise<Trainer> {
        return await prisma.trainer.create({ data });
    }
}