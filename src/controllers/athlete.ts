import { FastifyRequest, FastifyReply } from "fastify";
import { AthleteRepositoryPrisma } from "../repositories/athlete/prisma/AthleteRepositoryPrisma";
import { AthleteCreateService, AthletesGetbyTrainerService, AthleteGetByIdService, AthleteUpdateService, AthleteDeleteService } from "../services/athlete";
import { Prisma } from "@prisma/client";
import { z } from "zod";
import { EmailAlreadyExistsError } from "../errors/email-already-exists";
import { AthleteDontExistsError } from "../errors/athlete-dont-exists";


export class AthleteCreateController {

    async handler(request: FastifyRequest, reply: FastifyReply) {

        await request.jwtVerify();

        const athleteRepositoryPrisma = new AthleteRepositoryPrisma();
        const athleteCreateService = new AthleteCreateService(athleteRepositoryPrisma);

        const athleteBodySchema = z.object({
            id: z.string().optional(),
            name: z.string(),
            surname: z.string(),
            phone: z.string(),
            avatar: z.string().optional(),
            email: z.string().email(),
            sex: z.string(),
            observation: z.string().optional(),
            birthDate: z.string().refine(stringData => new Date(stringData)),
            addressInfo: z.string(),
            addressNumber: z.string(),
            city: z.string(),
            state: z.string(),
            cep: z.string()
        });


        try {
            const requestBodyParsed = athleteBodySchema.parse(request.body);

            const data: Prisma.AthleteCreateInput = {
                name: requestBodyParsed.name,
                surname: requestBodyParsed.surname,
                phone: requestBodyParsed.phone,
                avatar: requestBodyParsed.avatar,
                email: requestBodyParsed.email,
                sex: requestBodyParsed.sex,
                birthDate: new Date(requestBodyParsed.birthDate),
                trainer: {
                    connect: {
                        id: request.user.sub
                    }
                },
                address: {
                    create: {
                        addressInfo: requestBodyParsed.addressInfo,
                        addressNumber: requestBodyParsed.addressInfo,
                        cep: requestBodyParsed.cep,
                        city: requestBodyParsed.city,
                        state: requestBodyParsed.state
                    }
                }
            };

            const athlete = await athleteCreateService.execute(data);
            return reply.status(200).send({athlete: athlete});
        }

        catch(error) {
            if(error instanceof EmailAlreadyExistsError) {
                return reply.status(error.code).send(error);
            }

            throw error;
        }

    }
}


export class AthletesGetbyTrainerController {

    async handler(request: FastifyRequest, reply: FastifyReply) {

        await request.jwtVerify();

        const athleteRepositoryPrisma = new AthleteRepositoryPrisma();
        const athletesGetbyTrainerService = new AthletesGetbyTrainerService(athleteRepositoryPrisma);

        try {
            const athletes = await athletesGetbyTrainerService.execute(request.user.sub);
            return reply.status(200).send({ athletes });
        }

        catch(error) {
            if(error instanceof AthleteDontExistsError) {
                return reply.status(error.code).send({
                    error: error.message
                });
            }

            throw error;
        }
    }
}

export class AthleteGetByIdController {

    async handler(request: FastifyRequest, reply: FastifyReply) {

        await request.jwtVerify();

        const athleteRepositoryPrisma = new AthleteRepositoryPrisma();
        const athleteGetByIdService = new AthleteGetByIdService(athleteRepositoryPrisma);

        const registerBodySchema = z.object({
            id: z.string()
        });

        try {
            const { id } = registerBodySchema.parse(request.params);
            const athlete = await athleteGetByIdService.execute(id);
            return reply.status(200).send(athlete);
        }

        catch(error) {
            if(error instanceof AthleteDontExistsError) {
                return reply.status(error.code).send({
                    error: error.message
                });
            }

            throw error;
        }
    }
}


export class AthleteUpdateController {

    async handler(request: FastifyRequest, reply: FastifyReply) {

        await request.jwtVerify();

        const athleteRepositoryPrisma = new AthleteRepositoryPrisma();
        const athleteUpdateService = new AthleteUpdateService(athleteRepositoryPrisma);

        const registerParamsSchema = z.object({
            id: z.string()
        });

        const registerBodySchema = z.object({
            id: z.string().optional(),
            name: z.string(),
            surname: z.string(),
            phone: z.string(),
            avatar: z.string().optional(),
            email: z.string().email(),
            sex: z.string()
        });

        try {
            const { id } = registerParamsSchema.parse(request.params);
            const data: Prisma.AthleteUpdateInput = registerBodySchema.parse(request.body);

            const athlete = await athleteUpdateService.execute(id, data);
            return reply.status(200).send( athlete );
        }

        catch(error) {
            if(error instanceof AthleteDontExistsError) {
                return reply.status(error.code).send({
                    error: error.message
                });
            }

            throw error;
        }
    }
}


export class AthleteDeleteController {

    async handler(request: FastifyRequest, reply: FastifyReply) {

        await request.jwtVerify();

        const athleteRepositoryPrisma = new AthleteRepositoryPrisma();
        const athleteDeleteService = new AthleteDeleteService(athleteRepositoryPrisma);

        const registerParamsSchema = z.object({
            id: z.string()
        });

        try {
            const { id } = registerParamsSchema.parse(request.params);
            await athleteDeleteService.execute(id);
            return reply.status(204).send();
        }

        catch(error) {
            if(error instanceof AthleteDontExistsError) {
                return reply.status(error.code).send({
                    error: error.message
                });
            }

            throw error;
        }
    }
}
