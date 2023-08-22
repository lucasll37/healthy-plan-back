import { Prisma, Athlete } from "@prisma/client";

export interface IUsersRepository {
    create(data: Prisma.AthleteCreateInput): Promise<Athlete>
    findById(id: string): Promise<Athlete | null>
    findByEmail(email: string): Promise<Athlete | null>
}