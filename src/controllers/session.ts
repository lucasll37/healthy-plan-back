import { FastifyRequest, FastifyReply } from "fastify";
import { TrainerRepositoryPrisma } from "@/repositories/trainer/prisma/TrainerRepositoryPrisma";
import { AuthenticateService } from "@/services/session";
import { z } from "zod";


export class AuthenticateController {

    async handler(request: FastifyRequest, reply: FastifyReply) {

        const trainerRepositoryPrisma = new TrainerRepositoryPrisma()
        const authenticateService = new AuthenticateService(trainerRepositoryPrisma)
    
        const authenticateBodySchema = z.object({
            email: z.string().email(),
            password: z.string().min(6),
        });
            
        
        try {  
            const { email, password } = authenticateBodySchema.parse(request.body);
            const { trainer } = await authenticateService.execute({ email, password });

            const token = await reply.jwtSign({}, {
                sign: {
                    sub: trainer.id,
                }
            })

            return reply.status(200).send({ token });
        }
    
        catch(error) {
            // if(error instanceof InvalidCredenctialsError) {
            //     return reply.status(400).send({
            //         message: error.message
            //     });
            // }
    
            throw error;
        }
    }
}

