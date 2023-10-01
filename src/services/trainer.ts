import { EmailAlreadyExistsError } from "../errors/email-already-exists";
import { TrainerDontExistsError } from "../errors/trainer-dont-exists";
import { ITrainerRepository } from "../repositories/trainer/ITrainerRepository";
import { Trainer, Prisma } from "@prisma/client";
import bcrypt from "bcryptjs";
import { CacheRedis } from "@/cache/redis/CacheRedis";

export class TrainerCreateService {
    private cache = CacheRedis.getInstance();

    constructor(private trainerRepository: ITrainerRepository) {}

    async execute(data: Prisma.TrainerCreateInput): Promise<Trainer> {
        try {
            const trainer = await this.trainerRepository.create({
                ...data,
                password: await bcrypt.hash(data.password, 6)
            });

            // CacheRedis.isConnected && await this.cache!.set<Trainer>(trainer.id, trainer);
            return trainer;
        }

        catch (error) {
            throw new EmailAlreadyExistsError();
        }
    }
}

export class TrainerGetByIdService {
    private cache = CacheRedis.getInstance();

    constructor(private trainerRepository: ITrainerRepository) {}

    async execute(id: string): Promise<Trainer> {
        const trainer: Trainer | null = await this.trainerRepository.findById(id);

        // if(CacheRedis.isConnected) {
        //     trainer =
        //         await this.cache!.get<Trainer>(id)
        //         ??
        //         await this.trainerRepository.findById(id);
        // }

        // else {
        //     trainer = await this.trainerRepository.findById(id);
        // }


        if (!trainer) {
            throw new TrainerDontExistsError();
        }

        // CacheRedis.isConnected && await this.cache!.set<Trainer>(trainer.id, trainer);
        trainer.password = "*";

        return trainer;
    }
}

export class TrainerUpdateService {
    private cache = CacheRedis.getInstance();

    constructor(private trainerRepository: ITrainerRepository) {}

    async execute(id: string, data: Prisma.TrainerUpdateInput): Promise<Trainer> {
        try {
            const trainer = await this.trainerRepository.update(id, data);
            // if(CacheRedis.isConnected) await this.cache!.set<Trainer>(trainer.id, trainer);

            trainer.password = "*";
            return trainer;
        }

        catch {
            throw new TrainerDontExistsError();
        }
    }
}

export class TrainerDeleteService {
    private cache = CacheRedis.getInstance();

    constructor(private trainerRepository: ITrainerRepository) {}

    async execute(id: string): Promise<void> {
        try {
            await this.trainerRepository.delete(id);
            // if(CacheRedis.isConnected) await this.cache!.delete(id);
        }
        catch {
            throw new TrainerDontExistsError();
        }
    }
}
