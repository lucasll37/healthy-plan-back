import { Prisma, Anamnesis } from "@prisma/client";

export interface IAnamnesisRepository {
    create(data: Prisma.AnamnesisCreateArgs): Promise<Anamnesis>
}