import { Prisma, Athlete } from "@prisma/client";

export interface IAthleteRepository {
    create(data: Prisma.AthleteCreateInput): Promise<Athlete>
    findByEmail(email: string): Promise<Athlete | null>
    findById(id: string): Promise<Athlete | null>
    getAthletesbyTrainer(id: string): Promise<Athlete[] | null>
    update(id: string, data: Prisma.AthleteUpdateInput): Promise<Athlete>
    delete(id: string): Promise<void>
}
