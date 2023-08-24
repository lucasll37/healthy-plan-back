import { FastifyRequest, FastifyReply } from "fastify";
import { AthleteRepositoryPrisma } from "@/repositories/athlete/prisma/AthleteRepositoryPrisma"
import { AthleteCreateService, AthleteGetByIdService } from "@/services/athlete";
import { Prisma, Athlete } from "@prisma/client";
import { z } from "zod";


export class AthleteCreateController {

    async handler(request: FastifyRequest, reply: FastifyReply) {

        // await request.jwtVerify();
        // console.log(request.user);


        const athleteRepositoryPrisma = new AthleteRepositoryPrisma()
        const athleteCreateService = new AthleteCreateService(athleteRepositoryPrisma)
    
        const registerBodySchema = z.object({
            id: z.string().optional(),
            name: z.string(),
            surname: z.string(),
            phone: z.string(),
            email: z.string().email(),
            avatar: z.string().optional(),
            sex: z.string(),
            observation: z.string().optional(),
            birthDate: z.string()
        });
            
        
        try {
            const data: Prisma.AthleteCreateInput = registerBodySchema.parse(request.body);
            athleteCreateService.execute(data);
        }
        
        catch(error) {
            return reply.status(200).send({msg: "mamou!!!"});    
        }
        
        return reply.status(200).send({msg: "brilhou!!!"});
    }
}

export class AthleteGetByIdController {

    async handler(request: FastifyRequest, reply: FastifyReply) {

        const athleteRepositoryPrisma = new AthleteRepositoryPrisma()
        const athleteGetByIdService = new AthleteGetByIdService(athleteRepositoryPrisma)
    
        const registerBodySchema = z.object({
            id: z.string()
        });
            
        try {
            const { id } = registerBodySchema.parse(request.params);
            const athlete = await athleteGetByIdService.execute(id);
            return reply.status(200).send({athlete: athlete});
        }
        
        catch(error) {
            return reply.status(200).send({msg: "mamou!!!"});    
        }  
    }
}