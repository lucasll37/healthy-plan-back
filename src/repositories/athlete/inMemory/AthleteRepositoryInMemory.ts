import { Athlete, Prisma } from "@prisma/client";
import { IAthleteRepository } from "../IAthleteRepository";
import { randomUUID } from "node:crypto";


export class AthleteRepositoryInMemory implements IAthleteRepository {
    
    private athletes: Athlete[] = [];

    async create(data: Prisma.AthleteCreateInput): Promise<Athlete> {
        const athlete: Athlete = {
            ...data,
            id: randomUUID(),
            avatar: null,
            observation: null,
            birthDate: new Date(data.birthDate),
            createdAt: new Date(),
            updatedAt: null
        };
        
        this.athletes.push(athlete);
        
        return new Promise(resolve => resolve(athlete));
    }

    async findByEmail(email: string): Promise<Athlete | null> {
        const athlete = this.athletes.find(athlete => athlete.email === email);
        return new Promise(resolve => resolve(athlete || null));
    }

    findById(id: string): Promise<Athlete | null> {
        const athlete = this.athletes.find(athlete => athlete.id === id);
        return new Promise(resolve => resolve(athlete || null));
    }
}