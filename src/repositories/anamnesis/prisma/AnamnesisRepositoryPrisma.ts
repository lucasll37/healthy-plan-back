import { Anamnesis, Prisma } from "@prisma/client";
import { IAnamnesisRepository } from "../IAnamnesisRepository";
import { prisma } from "../../../libs/prisma";

export class AnamnesisRepositoryPrisma implements IAnamnesisRepository {

    async create(data: Prisma.AnamnesisCreateInput): Promise<Anamnesis> {
        return await prisma.anamnesis.create({ data });
    }

    async findById(id: string): Promise<Anamnesis | null> {
        const anamnesis = await prisma.anamnesis.findUnique({
            where: { id }
        });

        return anamnesis;
    }

    async update(id: string, data: Prisma.AnamnesisUpdateInput): Promise<Anamnesis> {
        const anamnesis = await prisma.anamnesis.update({
            where: { id },
            data
        });

        return anamnesis;
    }

    async delete(id: string): Promise<void> {
        await prisma.anamnesis.delete({
            where: { id }
        });
    }

    async findByAthleteId(athleteId: string): Promise<Anamnesis[] | null> {
        const anamnesis = await prisma.anamnesis.findMany({
            where: { athleteId }
        });

        return anamnesis;
    }
}
