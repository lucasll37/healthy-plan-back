import { PrismaUsersRepository } from "@/repositories/prisma/prisma-users-repository";
import { AuthenticateService } from "@/services/authenticate/authenticate";

export function makeAuthenticateService(): AuthenticateService {
    const userRepository = new PrismaUsersRepository();
    const authenticateService = new AuthenticateService(userRepository);
    
    return authenticateService;
}