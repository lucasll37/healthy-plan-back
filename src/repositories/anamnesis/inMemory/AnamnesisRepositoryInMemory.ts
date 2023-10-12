import { Anamnesis, Prisma } from "@prisma/client";
import { IAnamnesisRepository } from "../IAnamnesisRepository";
import { randomUUID } from "node:crypto";

export class AnamnesisRepositoryInMemory implements IAnamnesisRepository {

    private anamnesis: Anamnesis[] = [];

    async create(data: Prisma.AnamnesisCreateInput): Promise<Anamnesis> {
        const anamnesis: Anamnesis = {
            ...data,
            id: randomUUID(),
            additionalObservations: null,
            heartProblems: null,
            allergies: null,
            otherDiseases: null,
            medicalTreatments: null,
            medicationUse: null,
            UseHealthDevice: null,
            athleteId: data.athlete.create!.id!,
            createdAt: new Date(),
            updatedAt: new Date()
        };
        this.anamnesis.push(anamnesis);

        return new Promise(resolve => resolve(anamnesis));
    }

    async findById(id: string): Promise<Anamnesis | null> {
        const anamnesis = this.anamnesis.find(anamnesis => anamnesis.id === id);

        return new Promise(resolve => resolve( anamnesis || null));
    }

    async update(id: string, data: Prisma.AnamnesisUpdateInput): Promise<Anamnesis> {
        const index = this.anamnesis.findIndex(anamnesis => anamnesis.id === id);
        if(index === -1) throw new Error();
        const updatedAnamnesis = Object.assign(this.anamnesis[index], data);

        return new Promise<Anamnesis>(resolve => resolve(updatedAnamnesis));
    }

    async delete(id: string): Promise<void> {
        const index = this.anamnesis.findIndex(anamnesis => anamnesis.id === id);
        if(index === -1) throw new Error();
        this.anamnesis.splice(index, 1);

        return new Promise<void>(resolve => resolve());
    }
}
