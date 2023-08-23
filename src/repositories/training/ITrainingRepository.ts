import { Prisma, Training } from "@prisma/client";

export interface ITrainingRepository {
    create(data: Prisma.TrainingCreateArgs): Promise<Training>
}