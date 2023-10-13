import { FastifyRequest, FastifyReply } from "fastify";
import { BodyEvaluationRepositoryPrisma } from "@/repositories/bodyEvaluation/prisma/BodyEvaluationRepositoryPrisma";
import { AthleteRepositoryPrisma } from "@/repositories/athlete/prisma/AthleteRepositoryPrisma";
import { Prisma } from "@prisma/client";
import { z } from "zod";
import { BodyEvaluationCreateService, BodyEvaluationDeleteService, BodyEvaluationGetByIdService, BodyEvaluationUpdateService } from "@/services/bodyEvaluation";
import { AthleteDontExistsError } from "@/errors/athlete-dont-exists";
import { AthleteAndTrainerDontMeet } from "@/errors/athlete-and-trainer-dont-meet";
import { BodyEvaluationDontExistsError } from "@/errors/bodyEvaluation-dont-exists";


export class BodyEvaluationCreateController {

    async handler(request: FastifyRequest, reply: FastifyReply) {

        await request.jwtVerify();

        const athleteRepositoryPrisma = new AthleteRepositoryPrisma();
        const bodyEvaluationRepositoryPrisma = new BodyEvaluationRepositoryPrisma();

        const bodyEvaluationCreateService = new BodyEvaluationCreateService(
            bodyEvaluationRepositoryPrisma,
            athleteRepositoryPrisma
        );

        const athleteBodySchema = z.object({
            ageAtTheMoment: z.number(),
            fatMass_kg: z.number(),
            leanMass_kg: z.number(),
            weight_cm: z.number(),
            height_kg: z.number(),
            bodyMassClass: z.string(),
            bodyMassIndex: z.number(),
            skeletalMass: z.number(),
            bodyAge: z.number(),
            basalMetabolicRate: z.number(),
            waistRatioHip: z.number(),
            visceralFat: z.string(),
            neck_circ_cm: z.number(),
            chest_circ_cm: z.number(),
            rightForearm_circ_cm: z.number(),
            leftForearm_circ_cm: z.number(),
            rightArm_circ_cm: z.number(),
            leftArm_circ_cm: z.number(),
            waist_circ_cm: z.number(),
            abdomen_circ_cm: z.number(),
            hip_circ_cm: z.number(),
            rightThigh_circ_cm: z.number(),
            leftThigh_circ_cm: z.number(),
            rightCalf_circ_cm: z.number(),
            leftCalf_circ_cm: z.number(),
            fatPercentage: z.number(),
            athleteId: z.string()
        });

        try {
            const requestBodyParsed = athleteBodySchema.parse(request.body);

            const data: Prisma.BodyEvaluationCreateInput = {
                ageAtTheMoment: requestBodyParsed.ageAtTheMoment,
                fatMass_kg: requestBodyParsed.fatMass_kg,
                leanMass_kg: requestBodyParsed.leanMass_kg,
                weight_cm: requestBodyParsed.weight_cm,
                height_kg: requestBodyParsed.height_kg,
                bodyMassIndex: requestBodyParsed.bodyMassIndex,
                bodyMassClass: requestBodyParsed.bodyMassClass,
                skeletalMass: requestBodyParsed.skeletalMass,
                bodyAge: requestBodyParsed.bodyAge,
                basalMetabolicRate: requestBodyParsed.basalMetabolicRate,
                waistRatioHip: requestBodyParsed.waistRatioHip,
                visceralFat: requestBodyParsed.visceralFat,
                neck_circ_cm: requestBodyParsed.neck_circ_cm,
                chest_circ_cm: requestBodyParsed.chest_circ_cm,
                rightForearm_circ_cm: requestBodyParsed.rightForearm_circ_cm,
                leftForearm_circ_cm: requestBodyParsed.leftForearm_circ_cm,
                rightArm_circ_cm: requestBodyParsed.rightArm_circ_cm,
                leftArm_circ_cm: requestBodyParsed.leftArm_circ_cm,
                waist_circ_cm: requestBodyParsed.waist_circ_cm,
                abdomen_circ_cm: requestBodyParsed.abdomen_circ_cm,
                hip_circ_cm: requestBodyParsed.hip_circ_cm,
                rightThigh_circ_cm: requestBodyParsed.rightThigh_circ_cm,
                leftThigh_circ_cm: requestBodyParsed.leftThigh_circ_cm,
                rightCalf_circ_cm: requestBodyParsed.rightCalf_circ_cm,
                leftCalf_circ_cm: requestBodyParsed.leftCalf_circ_cm,
                fatPercentage: requestBodyParsed.fatPercentage,
                athlete: {
                    connect: {
                        id: requestBodyParsed.athleteId
                    }
                }
            };

            const bodyEvaluation = await bodyEvaluationCreateService.execute({
                data,
                trainerId: request.user.sub
            });

            return reply.status(200).send(bodyEvaluation);
        }

        catch(error) {
            if(error instanceof AthleteDontExistsError) {
                return reply.status(error.code).send(error);
            }

            else if(error instanceof AthleteAndTrainerDontMeet) {
                return reply.status(error.code).send(error);
            }

            throw error;
        }

    }
}

export class BodyEvaluationGetByIdController {

    async handler(request: FastifyRequest, reply: FastifyReply) {

        await request.jwtVerify();

        const bodyEvaluationRepositoryPrisma = new BodyEvaluationRepositoryPrisma();
        const bodyEvaluationGetByIdService = new BodyEvaluationGetByIdService(bodyEvaluationRepositoryPrisma);

        const registerParamsSchema = z.object({
            id: z.string()
        });

        try {
            const { id } = registerParamsSchema.parse(request.params);
            const bodyEvaluation = await bodyEvaluationGetByIdService.execute(id);

            return reply.status(200).send( bodyEvaluation );
        }

        catch(error) {
            if(error instanceof BodyEvaluationDontExistsError) {
                return reply.status(error.code).send({
                    error: error.message
                });
            }

            throw error;
        }
    }
}

export class BodyEvaluationUpdateController {

    async handler(request: FastifyRequest, reply: FastifyReply) {

        await request.jwtVerify();

        const bodyEvaluationRepositoryPrisma = new BodyEvaluationRepositoryPrisma();
        const bodyEvaluationUpdateService = new BodyEvaluationUpdateService(bodyEvaluationRepositoryPrisma);

        const registerParamsSchema = z.object({
            id: z.string()
        });

        const registerBodySchema = z.object({
            ageAtTheMoment: z.number().optional(),
            fatMass_kg: z.number().optional(),
            leanMass_kg: z.number().optional(),
            weight_cm: z.number().optional(),
            height_kg: z.number().optional(),
            bodyMassClass: z.string().optional(),
            bodyMassIndex: z.number().optional(),
            skeletalMass: z.number().optional(),
            bodyAge: z.number().optional(),
            basalMetabolicRate: z.number().optional(),
            waistRatioHip: z.number().optional(),
            visceralFat: z.string().optional(),
            neck_circ_cm: z.number().optional(),
            chest_circ_cm: z.number().optional(),
            rightForearm_circ_cm: z.number().optional(),
            leftForearm_circ_cm: z.number().optional(),
            rightArm_circ_cm: z.number().optional(),
            leftArm_circ_cm: z.number().optional(),
            waist_circ_cm: z.number().optional(),
            abdomen_circ_cm: z.number().optional(),
            hip_circ_cm: z.number().optional(),
            rightThigh_circ_cm: z.number().optional(),
            leftThigh_circ_cm: z.number().optional(),
            rightCalf_circ_cm: z.number().optional(),
            leftCalf_circ_cm: z.number().optional(),
            fatPercentage: z.number().optional(),
            athleteId: z.string().optional()
        });

        try {
            const { id } = registerParamsSchema.parse(request.params);
            const data: Prisma.BodyEvaluationUpdateInput = registerBodySchema.parse(request.body);

            const bodyEvaluation = await bodyEvaluationUpdateService.execute(id, data);
            return reply.status(200).send( bodyEvaluation );
        }

        catch(error) {
            if(error instanceof BodyEvaluationDontExistsError) {
                return reply.status(error.code).send({
                    error: error.message
                });
            }

            throw error;
        }
    }
}


export class BodyEvaluationDeleteController {

    async handler(request: FastifyRequest, reply: FastifyReply) {

        await request.jwtVerify();

        const bodyEvaluationRepositoryPrisma = new BodyEvaluationRepositoryPrisma();
        const bodyEvaluationDeleteService = new BodyEvaluationDeleteService(bodyEvaluationRepositoryPrisma);

        const registerParamsSchema = z.object({
            id: z.string()
        });

        try {
            const { id } = registerParamsSchema.parse(request.params);
            await bodyEvaluationDeleteService.execute(id);
            return reply.status(204).send();
        }

        catch(error) {
            if(error instanceof BodyEvaluationDontExistsError) {
                return reply.status(error.code).send({
                    error: error.message
                });
            }

            throw error;
        }
    }
}
