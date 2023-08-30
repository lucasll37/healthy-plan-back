import { Prisma, StatusPhoto } from "@prisma/client";

export interface IStatusPhotoRepository {
    create(data: Prisma.StatusPhotoCreateInput): Promise<StatusPhoto>
}