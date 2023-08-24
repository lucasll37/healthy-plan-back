import { Anamnesis, Prisma } from "@prisma/client";
import { IAnamnesisRepository } from "../IAnamnesisRepository";
import { prisma } from "@/libs/prisma";

export class AnamnesisRepositoryPrisma implements IAnamnesisRepository {

    async create(data: Prisma.AnamnesisCreateInput): Promise<Anamnesis> {
        return await prisma.anamnesis.create({ data });
    }
}