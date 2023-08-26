import { IAnamnesisRepository } from "@/repositories/anamnesis/IAnamnesisRepository";
import { Anamnesis, Prisma } from "@prisma/client";

export class AnamnesisCreateService {

    constructor(private anamnesisRepository: IAnamnesisRepository) { }

    async execute(data: Prisma.AnamnesisCreateInput): Promise<Anamnesis> {
        
        return await this.anamnesisRepository.create(data);
    }
}