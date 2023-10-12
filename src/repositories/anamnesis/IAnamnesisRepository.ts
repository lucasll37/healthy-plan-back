import { Prisma, Anamnesis } from "@prisma/client";

export interface IAnamnesisRepository {
    create(data: Prisma.AnamnesisCreateInput): Promise<Anamnesis>
    findById(id: string): Promise<Anamnesis | null>
    update(id: string, data: Prisma.AnamnesisUpdateInput): Promise<Anamnesis>
    delete(id: string): Promise<void>
}
