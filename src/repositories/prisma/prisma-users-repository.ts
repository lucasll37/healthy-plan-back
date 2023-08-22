import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client";
import { IUsersRepository } from "../users-repository";

export class PrismaUsersRepository implements IUsersRepository{
    
    // async findById(id: string) {
    //     throw new Error("Method not implemented.");

    // }

    async findByEmail(email: string) {
        
        const user = await prisma.user.findUnique({
            where: {email}
        });
        
        return user;
    }
    
    async create(data: Prisma.UserCreateInput) {
        const user = await prisma.user.create({
            data
        });

        return user;
    }
}