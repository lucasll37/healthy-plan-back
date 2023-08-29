import { FastifySwaggerOptions, SwaggerOptions } from "@fastify/swagger"
import { FastifySwaggerUiOptions } from "@fastify/swagger-ui"

export const swaggerUIConfig: FastifySwaggerUiOptions = {
    routePrefix: '/docs',
    uiConfig: {
        docExpansion: 'none',
        deepLinking: false
    }
}

export const swaggerConfig: SwaggerOptions = {
    swagger: {
        info: {
            title: 'Healthy Plan API',
            description: 'Testing the Fastify swagger API',
            version: '1.0.0'
        },
        externalDocs: {
            description: 'Find more info here',
            url: 'https://swagger.io'
        },
        schemes: ['http'],
        consumes: ['application/json'],
        produces: ['application/json'],
        tags: [
            { name: 'Address', description: 'Address related end-points' },
            { name: 'Anamnesis', description: 'Anamnesis related end-points' },
            { name: 'Athlete', description: 'Athlete related end-points' },
            { name: 'Body Evaluation', description: 'Body Evaluation related end-points' },
            // { name: 'Exercise', description: 'Exercise related end-points' },
            // { name: 'Flexibility Evaluation', description: 'Flexibility Evaluation related end-points' },
            // { name: 'Method Exercise', description: 'Method Exercise related end-points' },
            { name: 'Session', description: 'Session related end-points' },
            // { name: 'Status Photo', description: 'Status Photo related end-points' },
            // { name: 'Target', description: 'Target related end-points' },
            { name: 'Trainer', description: 'Trainer related end-points' },
            // { name: 'Training', description: 'Training related end-points' },
            // { name: 'Training Evolution', description: 'Training Evolution related end-points' }
        ],
        definitions: {
            Address: {
                type: 'object',
                required: [
                    'id',
                    'addressInfo',
                    'addressNumber',
                    'city',
                    'state',
                    'cep',
                    'createdAt',
                    'updatedAt'
                    ],
                properties: {
                    id: { type: 'string', format: 'uuid' },
                    addressInfo: { type: 'string'},
                    addressNumber: { type: 'string'},
                    city: { type: 'string'},
                    state: { type: 'string'},
                    cep: { type: 'string'},
                    createdAt: { type: 'datetime'},
                    updatedAt: { type: 'datetime'}
                }
            },
            Anamnesis: {
                type: 'object',
                required: [
                    'isAlcoholic',
                    'isSmoker',
                    'sleepQuality',
                    'PhysicalActivityHabits',
                    'HydrationHabits',
                    'EatingHabits',
                    'AmountWater',
                    'UseFoodSupplement',
                    'isAnemic',
                    'isDiabetic',
                    'systolicBloodPressure',
                    'diastolicBloodPressure',
                    'restingHeartRate',
                    'haveAnxiety',
                    'haveDepression',
                    'haveBipolarDisorder',
                    'haveObsessiveCompDisorder',
                    'haveOtherDisorders',
                    'AthleteId'
                ],
                properties: {
                    isAlcoholic: {type: 'boolean'},
                    isSmoker: {type: 'boolean'},
                    sleepQuality: {type: 'string'},
                    PhysicalActivityHabits: {type: 'string'},
                    HydrationHabits: {type: 'string'},
                    EatingHabits: {type: 'string'},
                    AmountWater: {type: 'float'},
                    UseFoodSupplement: {type: 'string'},
                    isAnemic: {type: 'boolean'},
                    isDiabetic: {type: 'boolean'},
                    systolicBloodPressure: {type: 'integer'},
                    diastolicBloodPressure: {type: 'integer'},
                    restingHeartRate: {type: 'string'},
                    haveAnxiety: {type: 'boolean'},
                    haveDepression: {type: 'boolean'},
                    haveBipolarDisorder: {type: 'boolean'},
                    haveObsessiveCompDisorder: {type: 'boolean'},
                    haveOtherDisorders: {type: 'boolean'},
                    AthleteId: {type: 'string', format: 'uuid'},
                    heartProblems: {type: 'string'},
                    allergies: {type: 'string'},
                    otherDiseases: {type: 'string'},
                    medicalTreatments: {type: 'string'},
                    medicationUse: {type: 'string'},
                    UseHealthDevice: {type: 'string'},
                    additionalObservations: {type: 'string'}
                }
            },
            Athlete: {
                type: 'object',
                required: [
                    'id',
                    'name',
                    'surname',
                    'phone',
                    'email',
                    'password',
                    'sex',
                    'birthDate',
                    'trainerId',
                    'addressId',
                    'createdAt',
                    'updatedAt'
                ],
                properties: {
                    id: { type: 'string', format: 'uuid'},
                    name: {type: 'string'},
                    surname: {type: 'string'},
                    phone: {type: 'string'},
                    email: {type: 'string', format: 'email'},
                    password: {type: 'string'},
                    avatar: {type: 'string', format: 'url'},
                    sex: {type: 'string'},
                    observation: {type: 'string'},
                    birthDate: {type: 'datetime'},
                    trainerId: {type: 'string'},
                    addressId: {type: 'string'},
                    createdAt: {type: 'datetime'},
                    updatedAt: {type: 'datetime'}
                }
            },
            Trainer: {
                type: 'object',
                required: [
                    'id',
                    'name', 
                    'surname', 
                    'phone', 
                    'email', 
                    'password',
                    'createdAt',
                    'updatedAt'
                ],
                properties: {
                    id: { type: 'string', format: 'uuid'},
                    name: {type: 'string'},
                    surname: {type: 'string'},
                    phone: {type: 'string'},
                    email: {type: 'string', format: 'email'},
                    password: {type: 'string'},
                    avatar: {type: 'string', format: 'url'},
                    createdAt: {type: 'datetime'},
                    updatedAt: {type: 'datetime'}
                }
            },
            BodyEvaluation: {
                type: 'object',
                required: [
                    'id',
                    'ageAtTheMoment',
                    'fatMass_kg',
                    'leanMass_kg',
                    'weight_cm',
                    'height_kg',
                    'bodyMassIndex', 
                    'bodyMassClass', 
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
                    'athleteId',
                    'createdAt',
                    'updatedAt'
                ],
                properties: {
                    id: {type: 'string', format: 'uuid'},
                    ageAtTheMoment: {type: 'integer'},
                    fatMass_kg: {type: 'float'},
                    leanMass_kg: {type: 'float'},
                    weight_cm: {type: 'float'},
                    height_kg: {type: 'float'},
                    bodyMassIndex: {type: 'float'},
                    bodyMassClass: {type: 'string'},
                    skeletalMass: {type: 'float'},
                    bodyAge: {type: 'integer'},
                    basalMetabolicRate: {type: 'integer'},
                    waistRatioHip: {type: 'float'},
                    visceralFat: {type: 'float'},
                    neck_circ_cm: {type: 'float'},
                    chest_circ_cm: {type: 'float'},
                    rightForearm_circ_cm: {type: 'float'},
                    leftForearm_circ_cm: {type: 'float'},
                    rightArm_circ_cm: {type: 'float'},
                    leftArm_circ_cm: {type: 'float'},
                    waist_circ_cm: {type: 'float'},
                    abdomen_circ_cm: {type: 'float'},
                    hip_circ_cm: {type: 'float'},
                    rightThigh_circ_cm: {type: 'float'},
                    leftThigh_circ_cm: {type: 'float'},
                    rightCalf_circ_cm: {type: 'float'},
                    leftCalf_circ_cm: {type: 'float'},
                    fatPercentage: {type: 'float'},
                    athleteId: {type: 'string'},                    
                    createdAt: {type: 'datetime'},
                    updatedAt: {type: 'datetime'}
                }
            }
        },
        securityDefinitions: {
            apiKey: {
                type: 'apiKey',
                name: 'Authorization',
                in: 'header',
                description: 'Digite "Bearer" e em seguida, cole o seu token [Bearer "seu Token"]'
            }
        }
    }

}
