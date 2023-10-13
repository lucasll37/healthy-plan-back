import { Trainer, Prisma } from "@prisma/client";
import { ITrainerRepository } from "../ITrainerRepository";
import { randomUUID } from "crypto";
import { EmailAlreadyExistsError } from "../../../errors/email-already-exists";


export class TrainerRepositoryInMemory implements ITrainerRepository {

    private trainers: Trainer[] = [];

    async create(data: Prisma.TrainerCreateInput): Promise<Trainer> {
        const trainers: Trainer = {
            ...data,
            id: randomUUID(),
            avatar: data.avatar || null,
            createdAt: new Date(),
            updatedAt: new Date()
        };

        const emailAlreadyExists = await this.findByEmail(trainers.email);

        if(emailAlreadyExists) {
            throw new EmailAlreadyExistsError();
        }

        this.trainers.push(trainers);

        return new Promise(resolve => resolve(trainers));
    }

    findByEmail(email: string): Promise<Trainer | null> {
        const trainers = this.trainers.find(trainer => trainer.email === email);

        return new Promise(resolve => resolve( trainers || null));
    }

    findById(id: string): Promise<Trainer | null> {
        const trainers = this.trainers.find(trainers => trainers.id === id);

        return new Promise(resolve => resolve( trainers || null));
    }

    update(id: string, data: Prisma.TrainerUpdateInput): Promise<Trainer> {
        const index = this.trainers.findIndex(trainers => trainers.id === id);
        if(index === -1) throw new Error();
        const updatedTrainer = Object.assign(this.trainers[index], data);

        return new Promise<Trainer>(resolve => resolve(updatedTrainer));
    }

    delete(id: string): Promise<void> {
        const index = this.trainers.findIndex(trainers => trainers.id === id);
        if(index === -1) throw new Error();
        this.trainers.splice(index, 1);

        return new Promise<void>(resolve => resolve());
    }
}
