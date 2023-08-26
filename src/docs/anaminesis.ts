export const mockDoc = {
    schema: {
        tags: ['Anamnisis']
    }
}

export const AnamnesisCreateDoc = {
    schema: {
        description: 'Crete a new anamnesis',
        tags: ['Anamnesis'],
        summary: 'Crete a new anamnesis',
        body: {
            type: 'object',
            properties: {
                name: {type: 'string'},
                surname: {type: 'string'},
                phone: {type: 'string'},
                email: {type: 'string', format: 'email'},
                sex: {type: 'string'},
                birthDate: {type: 'string', format: 'date'},
                avatar: {type: 'string'},
                observation: {type: 'string'},
                addressInfo: {type: 'string'},
                addressNumber: {type: 'string'},
                cep: {type: 'string'},
                city: {type: 'string'},
                state: {type: 'string'}



                isAlcoholic: {type: 'boolean'},
                isSmoker: {type: 'boolean'},
                sleepQuality: {type: 'string'},
                PhysicalActivityHabits: {type: 'string'},
                HydrationHabits: {type: 'string'},
                EatingHabits: {type: 'string'},
                AmountWater: {type: 'float'}, // float ou number ?
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
                UseHealthDevice: {type: 'string'}
            },
            required: [

                // TO BO CONTINUE!!!
            ]
        },
        response: {
            201: {
                description: 'Successful response. Anamnesis created',
                type: 'object',
                properties: {
                    id: { type: 'string', format: 'uuid' },
                    name: {type: 'string', example: 'John'},
                    surname: {type: 'string', example: 'Doe'},
                    phone: {type: 'string', example: '123456789'},
                    email: {type: 'string', example: 'john@doe.com'},
                    password: {type: 'string'}
                }
            },
            400: {
                description: 'Bad Request response. Invalid data',
                type: 'object',
                properties: {
                    message: { type: 'string' }
                }
            },
            409: {
                description: 'Conflict response. Personal trainer already exists',
                type: 'object',
                properties: {
                    message: { type: 'string' }
                }
            },
            500: {
                description: 'testestsetse',
                type: 'object',
                properties: {
                    message: { type: 'string' }
                }
            }
        },
        security: [{ apiKey: [] }]

    }
}