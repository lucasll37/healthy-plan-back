import { Trainer, Prisma } from "@prisma/client";
import { ITrainerRepository } from "../ITrainerRepository";
import { randomUUID } from "crypto";
import { EmailAlreadyExistsError } from "@/errors/email-already-exists";


export class TrainerRepositoryInMemory implements ITrainerRepository {
    
    private trainer: Trainer[] = [];
    
    async create(data: Prisma.TrainerCreateInput): Promise<Trainer> {
        const trainer: Trainer = {
            ...data,
            id: randomUUID()            
        };

        const emailAlreadyExists = await this.findByEmail(trainer.email);

        if(emailAlreadyExists) {
            console.log("entrou")
            throw new EmailAlreadyExistsError();
        }

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