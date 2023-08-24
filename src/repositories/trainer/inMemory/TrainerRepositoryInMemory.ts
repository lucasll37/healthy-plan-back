import { Trainer, Prisma } from "@prisma/client";
import { ITrainerRepository } from "../ITrainerRepository";
import { randomUUID } from "crypto";


export class TrainerRepositoryInMemory implements ITrainerRepository {
    
    private trainer: Trainer[] = [];
    
    async create(data: Prisma.TrainerCreateInput): Promise<Trainer> {
        const trainer: Trainer = {
            ...data,
            id: randomUUID()            
        };
        this.trainer.push(trainer);
        
        return new Promise(resolve => resolve(trainer));
    }

    findByEmail(email: string): Promise<Trainer | null> {
        const trainer = this.trainer.find(trainer => trainer.email === email)
        return new Promise(resolve => resolve( trainer || null));
    }

    findById(id: string): Promise<Trainer | null> {
        const trainer = this.trainer.find(trainer => trainer.id === id)
        return new Promise(resolve => resolve( trainer || null));
    }
}