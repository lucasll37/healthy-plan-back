import { FastifyRequest, FastifyReply } from "fastify";
import { TrainerRepositoryPrisma } from "@/repositories/trainer/prisma/TrainerRepositoryPrisma"
import { TrainerCreateService, TrainerGetByIdService } from "@/services/trainer";
import { Prisma, Trainer } from "@prisma/client";
import { z } from "zod";


export class TrainerCreateController {

    handler(request: FastifyRequest, reply: FastifyReply) {

        const trainerRepositoryPrisma = new TrainerRepositoryPrisma()
        const trainerCreateService = new TrainerCreateService(trainerRepositoryPrisma)
    
        const registerBodySchema = z.object({
            id: z.string().optional(),
            name: z.string(),
            surname: z.string(),
            phone: z.string(),
            email: z.string().email(),
            passwordHash: z.string()
        });
            
        
        try {
            const data: Prisma.TrainerCreateInput = registerBodySchema.parse(request.body);
            trainerCreateService.execute(data);
        }
        
        catch(error) {
            return reply.status(200).send({msg: "mamou!!!"});    
        }
        
        return reply.status(200).send({msg: "brilhou!!!"});
    }
}

export class TrainerGetByIdController {

    async handler(request: FastifyRequest, reply: FastifyReply) {

        const trainerRepositoryPrisma = new TrainerRepositoryPrisma()
        const trainerGetByIdService = new TrainerGetByIdService(trainerRepositoryPrisma)
    
        const registerBodySchema = z.object({
            id: z.string()
        });
            
        try {
            const { id } = registerBodySchema.parse(request.params);
            const athlete = await trainerGetByIdService.execute(id);
            
            return reply.status(200).send({athlete: athlete});
        }
        
        catch(error) {
            return reply.status(200).send({msg: "mamou!!!"});    
        }  
    }
}