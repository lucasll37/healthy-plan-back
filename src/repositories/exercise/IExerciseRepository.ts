import { Prisma, Exercise } from "@prisma/client";

export interface IExerciseRepository {
    create(data: Prisma.ExerciseCreateInput): Promise<Exercise>
}