import { BodyEvaluation, Prisma } from "@prisma/client";
import { IBodyValuationRepository } from "../IBodyEvaluationRepository";

type IData = Prisma.AddressCreateArgs;

export class BodyEvaluationRepositoryInMemory implements IBodyValuationRepository {

    private bodyEvaluations: BodyEvaluation[] = [];

    async create(data: Prisma.BodyEvaluationCreateInput): Promise<BodyEvaluation> {
        const bodyEvaluation: BodyEvaluation = {
            id: String(this.bodyEvaluations.length + 1),
            ageAtTheMoment: data.ageAtTheMoment,
            fatMass_kg: data.fatMass_kg,
            leanMass_kg: data.leanMass_kg,
            weight_cm: data.weight_cm,
            height_kg: data.height_kg,
            bodyMassClass: data.bodyMassClass,
            bodyMassIndex: data.bodyMassIndex,
            skeletalMass: data.skeletalMass,
            bodyAge: data.bodyAge,
            basalMetabolicRate: data.basalMetabolicRate,
            waistRatioHip: data.waistRatioHip,
            visceralFat: data.visceralFat,
            neck_circ_cm: data.neck_circ_cm,
            chest_circ_cm: data.chest_circ_cm,
            rightForearm_circ_cm: data.rightForearm_circ_cm,
            leftForearm_circ_cm: data.leftForearm_circ_cm,
            rightArm_circ_cm: data.rightArm_circ_cm,
            leftArm_circ_cm: data.leftArm_circ_cm,
            waist_circ_cm: data.waist_circ_cm,
            abdomen_circ_cm: data.abdomen_circ_cm,
            hip_circ_cm: data.hip_circ_cm,
            rightThigh_circ_cm: data.rightThigh_circ_cm,
            leftThigh_circ_cm: data.leftThigh_circ_cm,
            rightCalf_circ_cm: data.rightCalf_circ_cm,
            leftCalf_circ_cm: data.leftCalf_circ_cm,
            fatPercentage: data.fatPercentage,
            athleteId: data.athlete.connect!.id!,
            createdAt: new Date(),
            updatedAt: new Date(),
        };
        this.bodyEvaluations.push(bodyEvaluation);

        return new Promise(resolve => resolve(bodyEvaluation));
    }
}