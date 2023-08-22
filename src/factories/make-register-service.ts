import { PrismaUsersRepository } from "@/repositories/prisma/prisma-users-repository";
import { RegisterService } from "@/services/register/register";

export function makeRegisterService(): RegisterService {
    const userRepository = new PrismaUsersRepository();
    const registerService = new RegisterService(userRepository);

    return registerService;
}