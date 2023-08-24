import { Prisma, Athlete } from "@prisma/client";

export interface IAthleteRepository {
    create(data: Prisma.AthleteCreateInput): Promise<Athlete>
    findByEmail(email: string): Promise<Athlete | null>
    findById(id: string): Promise<Athlete | null>
}