import { Prisma, Athlete } from "@prisma/client";

export interface IAthleteRepository {
    create(data: Prisma.AthleteCreateArgs): Promise<Athlete>
}