import { Prisma, Target } from "@prisma/client";

export interface ITargetRepository {
    create(data: Prisma.TargetCreateInput): Promise<Target>
}