import { FastifyRequest, FastifyReply } from "fastify";
import { TrainerRepositoryPrisma } from "@/repositories/trainer/prisma/TrainerRepositoryPrisma"
import { TrainerCreateService, TrainerGetByIdService } from "@/services/trainer";
import { Prisma, Trainer } from "@prisma/client";
import { z } from "zod";
import { EmailAlreadyExistsError } from "@/errors/email-already-exists";
import { TrainerDontExistsError } from "@/errors/trainer-dont-exists";


export class TrainerCreateController {

    async handler(request: FastifyRequest, reply: FastifyReply) {

        const trainerRepositoryPrisma = new TrainerRepositoryPrisma()
        const trainerCreateService = new TrainerCreateService(trainerRepositoryPrisma)

        const registerBodySchema = z.object({
            id: z.string().optional(),
            name: z.string(),
            surname: z.string(),
            phone: z.string(),
            email: z.string().email(),
            password: z.string().min(6)
        });


        try {
            const data: Prisma.TrainerCreateInput = registerBodySchema.parse(request.body);
            const trainer = await trainerCreateService.execute(data);
            trainer.password = "*";

            return reply.status(200).send({ trainer: trainer });
        }

        catch(error) {
            if(error instanceof EmailAlreadyExistsError) {
                return reply.status(error.code).send({
                    error
                });
            }

            throw error;
        }

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
            const trainer = await trainerGetByIdService.execute(id);

            // if(trainer) {
            //     trainer.password = "*";
            // }

            return reply.status(200).send( trainer );
        }

        catch(error) {
            if(error instanceof TrainerDontExistsError) {
                return reply.status(error.code).send({
                    error: error.message
                });
            }

            throw error;
        }
    }
}
