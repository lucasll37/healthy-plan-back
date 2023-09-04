import { FastifyRequest, FastifyReply } from "fastify";
import { TrainerRepositoryPrisma } from "@/repositories/trainer/prisma/TrainerRepositoryPrisma";
import { TrainerCreateService, TrainerDeleteService, TrainerGetByIdService, TrainerUpdateService } from "@/services/trainer";
import { Prisma } from "@prisma/client";
import { z } from "zod";
import { EmailAlreadyExistsError } from "@/errors/email-already-exists";
import { TrainerDontExistsError } from "@/errors/trainer-dont-exists";


export class TrainerCreateController {

    async handler(request: FastifyRequest, reply: FastifyReply) {

        const trainerRepositoryPrisma = new TrainerRepositoryPrisma();
        const trainerCreateService = new TrainerCreateService(trainerRepositoryPrisma);

        const registerBodySchema = z.object({
            id: z.string().optional(),
            name: z.string(),
            surname: z.string(),
            phone: z.string(),
            email: z.string().email(),
            password: z.string().min(6),
            avatar: z.string().url().optional()
        });


        try {
            const data: Prisma.TrainerCreateInput = registerBodySchema.parse(request.body);
            const trainer = await trainerCreateService.execute(data);
            trainer.password = "*";
            return reply.status(201).send( trainer );
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

        await request.jwtVerify();

        const trainerRepositoryPrisma = new TrainerRepositoryPrisma();
        const trainerGetByIdService = new TrainerGetByIdService(trainerRepositoryPrisma);

        const registerParamsSchema = z.object({
            id: z.string()
        });

        try {
            const { id } = registerParamsSchema.parse(request.params);
            const trainer = await trainerGetByIdService.execute(id);

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

export class TrainerUpdateController {

    async handler(request: FastifyRequest, reply: FastifyReply) {

        await request.jwtVerify();

        const trainerRepositoryPrisma = new TrainerRepositoryPrisma();
        const trainerUpdateService = new TrainerUpdateService(trainerRepositoryPrisma);

        const registerParamsSchema = z.object({
            id: z.string()
        });

        const registerBodySchema = z.object({
            name: z.string().optional(),
            surname: z.string().optional(),
            email: z.string().email().optional(),
            password: z.string().min(6).optional(),
            phone: z.string().optional()
        });

        try {
            const { id } = registerParamsSchema.parse(request.params);
            const data: Prisma.TrainerUpdateInput = registerBodySchema.parse(request.body);

            const trainer = await trainerUpdateService.execute(id, data);
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


export class TrainerDeleteController {

    async handler(request: FastifyRequest, reply: FastifyReply) {

        await request.jwtVerify();

        const trainerRepositoryPrisma = new TrainerRepositoryPrisma();
        const trainerUpdateService = new TrainerDeleteService(trainerRepositoryPrisma);

        const registerParamsSchema = z.object({
            id: z.string()
        });

        try {
            const { id } = registerParamsSchema.parse(request.params);
            await trainerUpdateService.execute(id);
            return reply.status(204).send();
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
