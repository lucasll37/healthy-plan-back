import { Athlete, Prisma } from "@prisma/client";
import { IAthleteRepository } from "../IAthleteRepository";
import { prisma } from "../../../libs/prisma";

export class AthleteRepositoryPrisma implements IAthleteRepository {

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

}