import { FastifyRequest, FastifyReply } from "fastify";
import { AthleteRepositoryPrisma } from "@/repositories/athlete/prisma/AthleteRepositoryPrisma"
import { AthleteCreateService, AthleteGetByIdService } from "@/services/athlete";
import { Prisma } from "@prisma/client";
import { z } from "zod";
import { EmailAlreadyExistsError } from "@/errors/email-already-exists";


export class AthleteCreateController {

    async handler(request: FastifyRequest, reply: FastifyReply) {

        await request.jwtVerify();

        
        const athleteRepositoryPrisma = new AthleteRepositoryPrisma()
        const athleteCreateService = new AthleteCreateService(athleteRepositoryPrisma)
    
        const athleteBodySchema = z.object({
            id: z.string().optional(),
            name: z.string(),
            surname: z.string(),
            phone: z.string(),
            avatar: z.string().optional(),
            email: z.string().email(),
            sex: z.string(),
            observation: z.string().optional(),
            birthDate: z.string().refine(stringData => new Date(stringData))
        });
        
        try {
            const requestBodyParsed = athleteBodySchema.parse(request.body)

            const data: Prisma.AthleteCreateInput = {
                ...requestBodyParsed,
                birthDate: new Date(requestBodyParsed.birthDate),
                trainer: {
                    connect: {
                        id: request.user.sub
                    }
                }
            };
            
            const athlete = await athleteCreateService.execute(data);
            return reply.status(200).send({athlete: athlete});    
        }
        
        catch(error) {
            if(error instanceof EmailAlreadyExistsError) {
                return reply.status(400).send(error);
            }
    
            throw error;
        }
        
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