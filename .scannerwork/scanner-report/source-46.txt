import { EmailAlreadyExistsError } from "../errors/email-already-exists";
import { TrainerDontExistsError } from "../errors/trainer-dont-exists";
import { ITrainerRepository } from "../repositories/trainer/ITrainerRepository";
import { Trainer, Prisma } from "@prisma/client";
import bcrypt from "bcryptjs";
import { CacheRedis } from "@/cache/redis/CacheRedis";
import { ICache } from "@/cache/ICache";

export class TrainerCreateService {
    private cache: ICache;

    constructor(private trainerRepository: ITrainerRepository) {
        this.cache = new CacheRedis();
    }

    async execute(data: Prisma.TrainerCreateInput): Promise<Trainer> {
        try {
            const trainer = await this.trainerRepository.create({
                ...data,
                password: await bcrypt.hash(data.password, 6),
            });
            this.cache.set<Trainer>(trainer.id, trainer);
            return trainer;
        }

        catch (error) {
            throw new EmailAlreadyExistsError();
        }
    }
}

export class TrainerGetByIdService {
    private cache: ICache;

    constructor(private trainerRepository: ITrainerRepository) {
        this.cache = new CacheRedis();
    }

    async execute(id: string): Promise<Trainer> {
        const trainer =
            await this.cache.get<Trainer>(id)
            ??
            await this.trainerRepository.findById(id);

        if (!trainer) {
            throw new TrainerDontExistsError();
        }

        return trainer;
    }
}
