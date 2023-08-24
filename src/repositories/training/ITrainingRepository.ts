import { Prisma, Training } from "@prisma/client";

export interface ITrainingRepository {
    create(data: Prisma.TrainingCreateInput): Promise<Training>
}