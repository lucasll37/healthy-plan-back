import { PrismaClient } from "@prisma/client";
import { env } from "../env";

const prismaClientSingleton = () => {
    return new PrismaClient({
        log: env.NODE_ENV === "dev" ? ["query"]: []
        //     log: []
    });
};

type PrismaClientSingleton = ReturnType<typeof prismaClientSingleton>

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClientSingleton | undefined
};

export const prisma = globalForPrisma.prisma ?? prismaClientSingleton();

globalForPrisma.prisma = prisma;
// if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
