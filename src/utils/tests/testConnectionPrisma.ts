import { PrismaClient } from "@prisma/client";


export async function testConnection(): Promise<void> {
    const prisma = new PrismaClient();
    try {
        await prisma.$connect();
        await prisma.$disconnect();
    } catch (error) {
        await prisma.$disconnect();
        throw error;
    }
}
