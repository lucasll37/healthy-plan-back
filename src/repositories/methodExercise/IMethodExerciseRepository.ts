import { Prisma, MethodExercise } from "@prisma/client";

export interface IBodyValuationRepository {
    create(data: Prisma.MethodExerciseCreateInput): Promise<MethodExercise>
}