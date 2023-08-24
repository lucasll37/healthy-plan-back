import { Prisma, Anamnesis } from "@prisma/client";

export interface IAnamnesisRepository {
    create(data: Prisma.AnamnesisCreateInput): Promise<Anamnesis>
}