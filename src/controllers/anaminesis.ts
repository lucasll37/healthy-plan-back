import { FastifyRequest, FastifyReply } from "fastify";
import { Prisma } from "@prisma/client";
import { z } from "zod";
import { AthleteDontExistsError } from "../errors/athlete-dont-exists";
import { AnamnesisRepositoryPrisma } from "../repositories/anamnesis/prisma/AnamnesisRepositoryPrisma";
import { AnamnesisCreateService, AnamnesisDeleteService, AnamnesisGetByIdService, AnamnesisUpdateService } from "../services/anamnesis";
import { AnamnesisDontExistsError } from "@/errors/anamnesis-dont-exists";


export class AnamnesisCreateController {

    async handler(request: FastifyRequest, reply: FastifyReply) {

        await request.jwtVerify();


        const anamnesisRepositoryPrisma = new AnamnesisRepositoryPrisma();
        const anamnesisCreateService = new AnamnesisCreateService(anamnesisRepositoryPrisma);

        const athleteBodySchema = z.object({
            AthleteId: z.string(),
            isAlcoholic: z.boolean(),
            isSmoker: z.boolean(),
            sleepQuality: z.string(),
            PhysicalActivityHabits: z.string(),
            HydrationHabits: z.string(),
            EatingHabits: z.string(),
            AmountWater: z.number(),
            UseFoodSupplement: z.string(),
            isAnemic: z.boolean(),
            isDiabetic: z.boolean(),
            systolicBloodPressure: z.number(),
            diastolicBloodPressure: z.number(),
            restingHeartRate: z.number(),
            haveAnxiety: z.boolean(),
            haveDepression: z.boolean(),
            haveBipolarDisorder: z.boolean(),
            haveObsessiveCompDisorder: z.boolean(),
            haveOtherDisorders: z.boolean(),
            heartProblems: z.string().optional(),
            allergies: z.string().optional(),
            otherDiseases: z.string().optional(),
            medicalTreatments: z.string().optional(),
            medicationUse: z.string().optional(),
            UseHealthDevice: z.string().optional(),
            additionalObservations: z.string().optional()
        });

        try {
            const requestBodyParsed = athleteBodySchema.parse(request.body);

            const data: Prisma.AnamnesisCreateInput = {
                isAlcoholic: requestBodyParsed.isAlcoholic,
                isSmoker: requestBodyParsed.isSmoker,
                sleepQuality: requestBodyParsed.sleepQuality,
                PhysicalActivityHabits: requestBodyParsed.PhysicalActivityHabits,
                HydrationHabits: requestBodyParsed.HydrationHabits,
                EatingHabits: requestBodyParsed.EatingHabits,
                AmountWater: requestBodyParsed.AmountWater,
                UseFoodSupplement: requestBodyParsed.UseFoodSupplement,
                isAnemic: requestBodyParsed.isAnemic,
                isDiabetic: requestBodyParsed.isDiabetic,
                systolicBloodPressure: requestBodyParsed.systolicBloodPressure,
                diastolicBloodPressure: requestBodyParsed.diastolicBloodPressure,
                restingHeartRate: requestBodyParsed.restingHeartRate,
                haveAnxiety: requestBodyParsed.haveAnxiety,
                haveDepression: requestBodyParsed.haveDepression,
                haveBipolarDisorder: requestBodyParsed.haveBipolarDisorder,
                haveObsessiveCompDisorder: requestBodyParsed.haveObsessiveCompDisorder,
                haveOtherDisorders: requestBodyParsed.haveOtherDisorders,
                heartProblems: requestBodyParsed.heartProblems,
                allergies: requestBodyParsed.allergies,
                otherDiseases: requestBodyParsed.otherDiseases,
                medicalTreatments: requestBodyParsed.medicalTreatments,
                medicationUse: requestBodyParsed.medicationUse,
                UseHealthDevice: requestBodyParsed.UseHealthDevice,
                additionalObservations: requestBodyParsed.additionalObservations,
                athlete: {
                    connect: {
                        id: requestBodyParsed.AthleteId
                    }
                }
            };

            const anamnesis = await anamnesisCreateService.execute(data);
            return reply.status(201).send( anamnesis );
        }

        catch(error) {
            if(error instanceof AthleteDontExistsError) {
                return reply.status(error.code).send(error);
            }

            throw error;
        }

    }
}

export class AnamnesisGetByIdController {

    async handler(request: FastifyRequest, reply: FastifyReply) {

        await request.jwtVerify();

        const anamnesisRepositoryPrisma = new AnamnesisRepositoryPrisma();
        const anamnesisGetByIdService = new AnamnesisGetByIdService(anamnesisRepositoryPrisma);

        const registerParamsSchema = z.object({
            id: z.string()
        });

        try {
            const { id } = registerParamsSchema.parse(request.params);
            const anamnesis = await anamnesisGetByIdService.execute(id);

            return reply.status(200).send( anamnesis );
        }

        catch(error) {
            if(error instanceof AnamnesisDontExistsError) {
                return reply.status(error.code).send({
                    error: error.message
                });
            }

            throw error;
        }
    }
}

export class AnamnesisUpdateController {

    async handler(request: FastifyRequest, reply: FastifyReply) {

        await request.jwtVerify();

        const anamnesisRepositoryPrisma = new AnamnesisRepositoryPrisma();
        const anamnesisUpdateService = new AnamnesisUpdateService(anamnesisRepositoryPrisma);

        const registerParamsSchema = z.object({
            id: z.string()
        });

        const registerBodySchema = z.object({
            isAlcoholic: z.boolean().optional(),
            isSmoker: z.boolean().optional(),
            sleepQuality: z.string().optional(),
            PhysicalActivityHabits: z.string().optional(),
            HydrationHabits: z.string().optional(),
            EatingHabits: z.string().optional(),
            AmountWater: z.number().optional(),
            UseFoodSupplement: z.string().optional(),
            isAnemic: z.boolean().optional(),
            isDiabetic: z.boolean().optional(),
            systolicBloodPressure: z.number().optional(),
            diastolicBloodPressure: z.number().optional(),
            restingHeartRate: z.number().optional(),
            haveAnxiety: z.boolean().optional(),
            haveDepression: z.boolean().optional(),
            haveBipolarDisorder: z.boolean().optional(),
            haveObsessiveCompDisorder: z.boolean().optional(),
            haveOtherDisorders: z.boolean().optional(),
            heartProblems: z.string().optional(),
            allergies: z.string().optional(),
            otherDiseases: z.string().optional(),
            medicalTreatments: z.string().optional(),
            medicationUse: z.string().optional(),
            UseHealthDevice: z.string().optional(),
            additionalObservations: z.string().optional()
        });

        try {
            const { id } = registerParamsSchema.parse(request.params);
            const data: Prisma.AnamnesisUpdateInput = registerBodySchema.parse(request.body);

            const anaminesis = await anamnesisUpdateService.execute(id, data);
            return reply.status(200).send( anaminesis );
        }

        catch(error) {
            if(error instanceof AnamnesisDontExistsError) {
                return reply.status(error.code).send({
                    error: error.message
                });
            }

            throw error;
        }
    }
}


export class AnamnesisDeleteController {

    async handler(request: FastifyRequest, reply: FastifyReply) {

        await request.jwtVerify();

        const anamnesisRepositoryPrisma = new AnamnesisRepositoryPrisma();
        const anamnesisDeleteService = new AnamnesisDeleteService(anamnesisRepositoryPrisma);

        const registerParamsSchema = z.object({
            id: z.string()
        });

        try {
            const { id } = registerParamsSchema.parse(request.params);
            await anamnesisDeleteService.execute(id);
            return reply.status(204).send();
        }

        catch(error) {
            if(error instanceof AnamnesisDontExistsError) {
                return reply.status(error.code).send({
                    error: error.message
                });
            }

            throw error;
        }
    }
}
