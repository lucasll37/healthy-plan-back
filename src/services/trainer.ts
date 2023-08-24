import { ITrainerRepository } from "@/repositories/trainer/ITrainerRepository";
import { Trainer, Prisma } from "@prisma/client";
import { hash } from "bcryptjs";

export class TrainerCreateService {

    constructor(private trainerRepository: ITrainerRepository) { }

    async execute(data: Prisma.TrainerCreateInput): Promise<Trainer> {
        return await this.trainerRepository.create({
            ...data,
            password: await hash(data.password, 6),
        });
    }
}

export class TrainerGetByIdService {

    constructor(private trainerRepository: ITrainerRepository) { }

    async execute(id: string): Promise<Trainer | null> {
        return await this.trainerRepository.findById(id);
    }
}