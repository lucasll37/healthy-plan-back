import { PrismaClient } from "@prisma/client";
// import { env } from "../env";

export const prisma = new PrismaClient({
    log: [],
    // log: env.NODE_ENV === "dev" ? ["query"]: [],
});
