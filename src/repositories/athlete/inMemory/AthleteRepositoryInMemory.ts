import { Athlete, Prisma } from "@prisma/client";
import { IAthleteRepository } from "../IAthleteRepository";
import { randomUUID } from "node:crypto";


export class AthleteRepositoryInMemory implements IAthleteRepository {
    getAthletesbyTrainer(id: string): Promise<Athlete[] | null> {
        return new Promise(resolve => resolve(this.athletes.filter(athlete => athlete.trainerId === id)));
    }

    private athletes: Athlete[] = [];

    async create(data: Prisma.AthleteCreateInput): Promise<Athlete> {

        const athlete: Athlete = {
            id: randomUUID(),
            email: data.email,
            name: data.name,
            surname: data.surname,
            phone: data.phone,
            sex: data.sex,
            addressId: data.address.create!.id!,
            avatar: null,
            observation: null,
            trainerId: data.trainer.connect!.id!,
            birthDate: new Date(data.birthDate),
            createdAt: new Date(),
            updatedAt: new Date()
        };

        this.athletes.push(athlete);

        return new Promise(resolve => resolve(athlete));
    }

    async findByEmail(email: string): Promise<Athlete | null> {
        const athlete = this.athletes.find(athlete => athlete.email === email);
        return new Promise(resolve => resolve(athlete || null));
    }

    async findById(id: string): Promise<Athlete | null> {
        const athlete = this.athletes.find(athlete => athlete.id === id);
        return new Promise(resolve => resolve(athlete || null));
    }

    async update(id: string, data: Prisma.AthleteUpdateInput): Promise<Athlete> {
        const index = this.athletes.findIndex(athlete => athlete.id === id);
        if(index === -1) throw new Error();

        const updatedAthlete = Object.assign(this.athletes[index], data);

        return new Promise<Athlete>(resolve => resolve(updatedAthlete));
    }

    async delete(id: string): Promise<void> {
        const index = this.athletes.findIndex(athlete => athlete.id === id);
        if(index === -1) throw new Error();
        this.athletes.splice(index, 1);

        return new Promise<void>(resolve => resolve());
    }
}
