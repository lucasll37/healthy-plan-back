import { Prisma, Exercise } from "@prisma/client";

export interface IExerciseRepository {
    create(data: Prisma.ExerciseCreateArgs): Promise<Exercise>
}