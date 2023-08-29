import { FastifyRequest, FastifyReply } from "fastify";
import { Prisma } from "@prisma/client";
import { z } from "zod";
import { AthleteDontExistsError } from "../errors/athlete-dont-exists";
import { AnamnesisRepositoryPrisma } from "../repositories/anamnesis/prisma/AnamnesisRepositoryPrisma";
import { AnamnesisCreateService } from "../services/anaminesis";


export class AnamnesisCreateController {

    async handler(request: FastifyRequest, reply: FastifyReply) {

        await request.jwtVerify();

        
        const anamnesisRepositoryPrisma = new AnamnesisRepositoryPrisma()
        const anamnesisCreateService = new AnamnesisCreateService(anamnesisRepositoryPrisma)
    
        const athleteBodySchema = z.object({
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
            AthleteId: z.string(),
            heartProblems: z.string().optional(),
            allergies: z.string().optional(),
            otherDiseases: z.string().optional(),
            medicalTreatments: z.string().optional(),
            medicationUse: z.string().optional(),
            UseHealthDevice: z.string().optional(),
        });

        
        try {
            const requestBodyParsed = athleteBodySchema.parse(request.body)

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
                athlete: {
                    connect: {
                        id: requestBodyParsed.AthleteId
                    }
                }
            };
            
            const anamnesis = await anamnesisCreateService.execute(data);
            return reply.status(200).send({anamnesis: anamnesis});    
        }
        
        catch(error) {
            if(error instanceof AthleteDontExistsError) {
                return reply.status(error.code).send(error);
            }
    
            throw error;
        }
        
    }
}