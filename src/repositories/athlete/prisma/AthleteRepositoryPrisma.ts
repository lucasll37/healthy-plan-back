import { Athlete, Prisma } from "@prisma/client";
import { IAthleteRepository } from "../IAthleteRepository";
import { prisma } from "../../../libs/prisma";

export class AthleteRepositoryPrisma implements IAthleteRepository {
    async getAthletesbyTrainer(id: string): Promise<Athlete[] | null> {
        return await prisma.athlete.findMany({
            where: {
                trainerId: id
            }
        });
    }

    async create(data: Prisma.AthleteCreateInput): Promise<Athlete> {
        return await prisma.athlete.create({ data });
    }
    async findByEmail(email: string): Promise<Athlete | null> {
        return await prisma.athlete.findUnique({
            where: { email }
        });
    }
    async findById(id: string): Promise<Athlete | null> {
        return await prisma.athlete.findUnique({
            where: { id }
        });
    }

    async update(id: string, data: Prisma.AthleteUpdateInput): Promise<Athlete> {
        const athlete = await prisma.athlete.update({
            where: { id },
            data
        });

        return athlete;
    }

    async delete(id: string): Promise<void> {
        await prisma.athlete.delete({
            where: { id }
        });
    }
}
