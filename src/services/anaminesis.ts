import { ICache } from "@/cache/ICache";
import { CacheRedis } from "@/cache/redis/CacheRedis";
import { IAnamnesisRepository } from "@/repositories/anamnesis/IAnamnesisRepository";
import { Anamnesis, Prisma } from "@prisma/client";

export class AnamnesisCreateService {
    private cache: ICache;

    constructor(private anamnesisRepository: IAnamnesisRepository) {
        this.cache = new CacheRedis();
    }

    async execute(data: Prisma.AnamnesisCreateInput): Promise<Anamnesis> {
        const anamnesis = await this.anamnesisRepository.create(data);
        this.cache.set<Anamnesis>(anamnesis.id, anamnesis);

        return anamnesis;
    }
}
