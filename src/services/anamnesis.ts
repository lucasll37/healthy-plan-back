import { CacheRedis } from "@/cache/redis/CacheRedis";
import { AnamnesisDontExistsError } from "@/errors/anamnesis-dont-exists";
import { IAnamnesisRepository } from "@/repositories/anamnesis/IAnamnesisRepository";
import { Anamnesis, Prisma } from "@prisma/client";

export class AnamnesisCreateService {
    private cache = CacheRedis.getInstance();

    constructor(private anamnesisRepository: IAnamnesisRepository) {}

    async execute(data: Prisma.AnamnesisCreateInput): Promise<Anamnesis> {
        const anamnesis = await this.anamnesisRepository.create(data);
        // this.cache.set<Anamnesis>(anamnesis.id, anamnesis);

        return anamnesis;
    }
}


export class AnamnesisGetByIdService {
    private cache = CacheRedis.getInstance();

    constructor(private anamnesisRepository: IAnamnesisRepository) {}

    async execute(id: string): Promise<Anamnesis> {
        const anamnesis: Anamnesis | null = await this.anamnesisRepository.findById(id);

        // if(CacheRedis.isConnected) {
        //     trainer =
        //         await this.cache!.get<Anamnesis>(id)
        //         ??
        //         await this.anamnesisRepository.findById(id);
        // }

        // else {
        //     trainer = await this.anamnesisRepository.findById(id);
        // }


        if (!anamnesis) {
            throw new AnamnesisDontExistsError();
        }

        // CacheRedis.isConnected && await this.cache!.set<Anamnesis>(anamnesis.id, anamnesis);

        return anamnesis;
    }
}


export class AnamnesisUpdateService {
    private cache = CacheRedis.getInstance();

    constructor(private anamnesisRepository: IAnamnesisRepository) {}

    async execute(id: string, data: Prisma.AnamnesisUpdateInput): Promise<Anamnesis> {
        try {
            const anamnesis = await this.anamnesisRepository.update(id, data);
            // if(CacheRedis.isConnected) await this.cache!.set<Anamnesis>(anamesis.id, anamesis);

            return anamnesis;
        }

        catch {
            throw new AnamnesisDontExistsError();
        }
    }
}

export class AnamnesisDeleteService {
    private cache = CacheRedis.getInstance();

    constructor(private anamnesisRepository: IAnamnesisRepository) {}

    async execute(id: string): Promise<void> {
        try {
            await this.anamnesisRepository.delete(id);
            // if(CacheRedis.isConnected) await this.cache!.delete(id);
        }
        catch {
            throw new AnamnesisDontExistsError();
        }
    }
}
