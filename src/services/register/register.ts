import { hash } from "bcryptjs";
import { IUsersRepository } from "@/repositories/users-repository";
import { UserAlreadyExistsError } from "../errors/user-already-exists";
import { User } from "@prisma/client";


interface RegisterServiceRequest {
    name: string;
    email: string;
    password: string;
}

interface RegisterServiceResponse {
    user: User;
}

export class RegisterService {

    private usersRepository: IUsersRepository;

    constructor(userRepository: IUsersRepository){
        this.usersRepository = userRepository;
    }

    async execute(params: RegisterServiceRequest): Promise<RegisterServiceResponse> {

        const { name, email, password } = params;
        
        const userWithSameEmail = await this.usersRepository.findByEmail(email);

        if(userWithSameEmail){
            throw new UserAlreadyExistsError();
        }
        
        const password_hash = await hash(password, 6);
    
        const user = await this.usersRepository.create({
            name,
            email,
            password_hash
        });

        return { user };
    }
}


