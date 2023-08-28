import { format } from "path"

export const mockDoc = {
    schema: {
        tags: ['Body Evaluation']
    }
}


export const bodyEvaluationCreateDoc = {
    schema: {
        description: 'Crete a new body evaluation',
        tags: ['Body Evaluation'],
        summary: 'Crete a new body evaluation',
        body: {
            type: 'object',
            properties: {
                ageAtTheMoment: {type: 'number'},
                fatMass_kg: {type: 'number'},
                leanMass_kg: {type: 'number'},
                weight_cm: {type: 'number'},
                height_kg: {type: 'number'},
                bodyMassClass: {type: 'string'},
                bodyMassIndex: {type: 'number'},
                skeletalMass: {type: 'number'},
                bodyAge: {type: 'number'},
                basalMetabolicRate: {type: 'number'},
                waistRatioHip: {type: 'number'},
                visceralFat: {type: 'string'},
                neck_circ_cm: {type: 'number'},
                chest_circ_cm: {type: 'number'},
                rightForearm_circ_cm: {type: 'number'},
                leftForearm_circ_cm: {type: 'number'},
                rightArm_circ_cm: {type: 'number'},
                leftArm_circ_cm: {type: 'number'},
                waist_circ_cm: {type: 'number'},
                abdomen_circ_cm: {type: 'number'},
                hip_circ_cm: {type: 'number'},
                rightThigh_circ_cm: {type: 'number'},
                leftThigh_circ_cm: {type: 'number'},
                rightCalf_circ_cm: {type: 'number'},
                leftCalf_circ_cm: {type: 'number'},
                fatPercentage: {type: 'number'},
                athleteId: {type: 'string'}
            },
            required: [
                'ageAtTheMoment',
                'fatMass_kg',
                'leanMass_kg',
                'weight_cm',
                'height_kg',
                'bodyMassClass',
                'bodyMassIndex',
                'skeletalMass',
                'bodyAge',
                'basalMetabolicRate',
                'waistRatioHip',
                'visceralFat',
                'neck_circ_cm',
                'chest_circ_cm',
                'rightForearm_circ_cm',
                'leftForearm_circ_cm',
                'rightArm_circ_cm',
                'leftArm_circ_cm',
                'waist_circ_cm',
                'abdomen_circ_cm',
                'hip_circ_cm',
                'rightThigh_circ_cm',
                'leftThigh_circ_cm',
                'rightCalf_circ_cm',
                'leftCalf_circ_cm',
                'fatPercentage',
                'athleteId'
            ]
        },
        response: {
            201: {
                description: 'Successful response. Anamnesis created',
                type: 'object',
                properties: {
                    id: { type: 'string', format: 'uuid' },
                    ageAtTheMoment: {type: 'number'},
                    fatMass_kg: {type: 'number'},
                    leanMass_kg: {type: 'number'},
                    weight_cm: {type: 'number'},
                    height_kg: {type: 'number'},
                    bodyMassClass: {type: 'number'},
                    bodyMassIndex: {type: 'number'},
                    skeletalMass: {type: 'number'},
                    bodyAge: {type: 'number'},
                    basalMetabolicRate: {type: 'number'},
                    waistRatioHip: {type: 'number'},
                    visceralFat: {type: 'number'},
                    neck_circ_cm: {type: 'number'},
                    chest_circ_cm: {type: 'number'},
                    rightForearm_circ_cm: {type: 'number'},
                    leftForearm_circ_cm: {type: 'number'},
                    rightArm_circ_cm: {type: 'number'},
                    leftArm_circ_cm: {type: 'number'},
                    waist_circ_cm: {type: 'number'},
                    abdomen_circ_cm: {type: 'number'},
                    hip_circ_cm: {type: 'number'},
                    rightThigh_circ_cm: {type: 'number'},
                    leftThigh_circ_cm: {type: 'number'},
                    rightCalf_circ_cm: {type: 'number'},
                    leftCalf_circ_cm: {type: 'number'},
                    fatPercentage: {type: 'number'},
                    athleteId: {type: 'number'}
                }
            },
            400: {
                description: 'Bad Request response. Invalid data',
                type: 'object',
                properties: {
                    error: { type: 'string' }
                }
            },
            409: {
                description: 'Conflict response. Personal trainer already exists',
                type: 'object',
                properties: {
                    error: { type: 'string' }
                }
            },
            500: {
                description: 'testestsetse',
                type: 'object',
                properties: {
                    error: { type: 'string' }
                }
            }
        },
        security: [{ apiKey: [] }]

    }
}