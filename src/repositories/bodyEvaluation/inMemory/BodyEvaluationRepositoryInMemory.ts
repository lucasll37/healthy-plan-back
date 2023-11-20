import { BodyEvaluation, Prisma } from "@prisma/client";
import { IBodyEvaluationRepository } from "../IBodyEvaluationRepository";

export class BodyEvaluationRepositoryInMemory implements IBodyEvaluationRepository {

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

    async findById(id: string): Promise<BodyEvaluation | null> {
        const bodyEvaluation = this.bodyEvaluations.find(bodyEvaluation => bodyEvaluation.id === id);

        return new Promise(resolve => resolve( bodyEvaluation || null));
    }

    async update(id: string, data: Prisma.BodyEvaluationUpdateInput): Promise<BodyEvaluation> {
        const index = this.bodyEvaluations.findIndex(bodyEvaluation => bodyEvaluation.id === id);
        if(index === -1) throw new Error();
        const updatedBodyEvaluation = Object.assign(this.bodyEvaluations[index], data);

        return new Promise<BodyEvaluation>(resolve => resolve(updatedBodyEvaluation));
    }

    async delete(id: string): Promise<void> {
        const index = this.bodyEvaluations.findIndex(bodyEvaluation => bodyEvaluation.id === id);
        if(index === -1) throw new Error();
        this.bodyEvaluations.splice(index, 1);

        return new Promise<void>(resolve => resolve());
    }

    async findByAthleteId(athleteId: string): Promise<BodyEvaluation[] | null> {
        const bodyEvaluations = this.bodyEvaluations.filter(bodyEvaluation => bodyEvaluation.athleteId === athleteId);

        return new Promise(resolve => resolve( bodyEvaluations || null));
    }
}
