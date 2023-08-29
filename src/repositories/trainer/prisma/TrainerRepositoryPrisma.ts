import { Trainer, Prisma } from "@prisma/client";
import { ITrainerRepository } from "../ITrainerRepository";
import { prisma } from "../../../libs/prisma";

export class TrainerRepositoryPrisma implements ITrainerRepository {
    
    async create(data: Prisma.TrainerCreateInput): Promise<Trainer> {
        return await prisma.trainer.create({ data });
    }
    
    async findByEmail(email: string): Promise<Trainer | null> {
        const trainer = await prisma.trainer.findUnique({
            where: { email }
        })
        
        return trainer;
    }
    
    async findById(id: string): Promise<Trainer | null> {
        const trainer = await prisma.trainer.findUnique({
            where: { id }
        })
        
        return trainer;
    }
}