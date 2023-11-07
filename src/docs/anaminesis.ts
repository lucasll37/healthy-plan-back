export const mockDoc = {
    schema: {
        tags: ["Anamnesis"],
        security: [{ apiKey: [] }]
    }
};

export const AnamnesisCreateDoc = {
    schema: {
        description: "Crete a new anamnesis",
        tags: ["Anamnesis"],
        summary: "Crete a new anamnesis",
        body: {
            type: "object",
            properties: {
                AthleteId: {type: "string", format: "uuid"},
                isAlcoholic: {type: "boolean"},
                isSmoker: {type: "boolean"},
                sleepQuality: {type: "string"},
                PhysicalActivityHabits: {type: "string"},
                HydrationHabits: {type: "string"},
                EatingHabits: {type: "string"},
                AmountWater: {type: "number"},
                UseFoodSupplement: {type: "string"},
                isAnemic: {type: "boolean"},
                isDiabetic: {type: "boolean"},
                systolicBloodPressure: {type: "integer"},
                diastolicBloodPressure: {type: "integer"},
                restingHeartRate: {type: "integer"},
                haveAnxiety: {type: "boolean"},
                haveDepression: {type: "boolean"},
                haveBipolarDisorder: {type: "boolean"},
                haveObsessiveCompDisorder: {type: "boolean"},
                haveOtherDisorders: {type: "boolean"},
                heartProblems: {type: "string"},
                allergies: {type: "string"},
                otherDiseases: {type: "string"},
                medicalTreatments: {type: "string"},
                medicationUse: {type: "string"},
                UseHealthDevice: {type: "string"},
                additionalObservations: {type: "string"}
            },
            required: [
                "isAlcoholic",
                "isSmoker",
                "sleepQuality",
                "PhysicalActivityHabits",
                "HydrationHabits",
                "EatingHabits",
                "AmountWater",
                "UseFoodSupplement",
                "isAnemic",
                "isDiabetic",
                "systolicBloodPressure",
                "diastolicBloodPressure",
                "restingHeartRate",
                "haveAnxiety",
                "haveDepression",
                "haveBipolarDisorder",
                "haveObsessiveCompDisorder",
                "haveOtherDisorders",
                "AthleteId"
            ]
        },
        response: {
            201: {
                description: "Successful response. Anamnesis created",
                type: "object",
                properties: {
                    isAlcoholic: {type: "boolean"},
                    isSmoker: {type: "boolean"},
                    sleepQuality: {type: "string"},
                    PhysicalActivityHabits: {type: "string"},
                    HydrationHabits: {type: "string"},
                    EatingHabits: {type: "string"},
                    AmountWater: {type: "number"},
                    UseFoodSupplement: {type: "string"},
                    isAnemic: {type: "boolean"},
                    isDiabetic: {type: "boolean"},
                    systolicBloodPressure: {type: "integer"},
                    diastolicBloodPressure: {type: "integer"},
                    restingHeartRate: {type: "string"},
                    haveAnxiety: {type: "boolean"},
                    haveDepression: {type: "boolean"},
                    haveBipolarDisorder: {type: "boolean"},
                    haveObsessiveCompDisorder: {type: "boolean"},
                    haveOtherDisorders: {type: "boolean"},
                    AthleteId: {type: "string", format: "uuid"},
                    heartProblems: {type: "string"},
                    allergies: {type: "string"},
                    otherDiseases: {type: "string"},
                    medicalTreatments: {type: "string"},
                    medicationUse: {type: "string"},
                    UseHealthDevice: {type: "string"},
                    additionalObservations: {type: "string"}
                }
            },
            400: {
                description: "Bad Request response. Invalid data",
                type: "object",
                properties: {
                    message: { type: "string" }
                }
            },
            500: {
                description: "Intern Server Error",
                type: "object",
                properties: {
                    message: { type: "string" }
                }
            }
        },
        security: [{ apiKey: [] }]

    }
};


export const getByIdDoc = {
    schema: {
        description: "Get an anamnesis by Id",
        tags: ["Anamnesis"],
        summary: "Get an anamnesis by Id",
        params: {
            type: "object",
            properties: {
                id: { type: "string", format: "uuid"}
            },
            required: ["id"]
        },
        response: {
            201: {
                description: "Successful response. Anamnesis created",
                type: "object",
                properties: {
                    isAlcoholic: {type: "boolean"},
                    isSmoker: {type: "boolean"},
                    sleepQuality: {type: "string"},
                    PhysicalActivityHabits: {type: "string"},
                    HydrationHabits: {type: "string"},
                    EatingHabits: {type: "string"},
                    AmountWater: {type: "number"},
                    UseFoodSupplement: {type: "string"},
                    isAnemic: {type: "boolean"},
                    isDiabetic: {type: "boolean"},
                    systolicBloodPressure: {type: "integer"},
                    diastolicBloodPressure: {type: "integer"},
                    restingHeartRate: {type: "integer"},
                    haveAnxiety: {type: "boolean"},
                    haveDepression: {type: "boolean"},
                    haveBipolarDisorder: {type: "boolean"},
                    haveObsessiveCompDisorder: {type: "boolean"},
                    haveOtherDisorders: {type: "boolean"},
                    AthleteId: {type: "string", format: "uuid"},
                    heartProblems: {type: "string"},
                    allergies: {type: "string"},
                    otherDiseases: {type: "string"},
                    medicalTreatments: {type: "string"},
                    medicationUse: {type: "string"},
                    UseHealthDevice: {type: "string"},
                    additionalObservations: {type: "string"}
                }
            },
            400: {
                description: "Bad Request response. Invalid data",
                type: "object",
                properties: {
                    message: { type: "string" }
                }
            },
            500: {
                description: "Intern Server Error",
                type: "object",
                properties: {
                    message: { type: "string" }
                }
            }
        },
        security: [{ apiKey: [] }]

    }
};


export const UpdateByIdDoc = {
    schema: {
        description: "Update an anamnesis by Id",
        tags: ["Anamnesis"],
        summary: "Update an anamnesis by Id",
        params: {
            type: "object",
            properties: {
                id: { type: "string", format: "uuid"}
            },
            required: ["id"]
        },
        body: {
            type: "object",
            properties: {
                isAlcoholic: {type: "boolean"},
                isSmoker: {type: "boolean"},
                sleepQuality: {type: "string"},
                PhysicalActivityHabits: {type: "string"},
                HydrationHabits: {type: "string"},
                EatingHabits: {type: "string"},
                AmountWater: {type: "number"},
                UseFoodSupplement: {type: "string"},
                isAnemic: {type: "boolean"},
                isDiabetic: {type: "boolean"},
                systolicBloodPressure: {type: "integer"},
                diastolicBloodPressure: {type: "integer"},
                restingHeartRate: {type: "string"},
                haveAnxiety: {type: "boolean"},
                haveDepression: {type: "boolean"},
                haveBipolarDisorder: {type: "boolean"},
                haveObsessiveCompDisorder: {type: "boolean"},
                haveOtherDisorders: {type: "boolean"},
                heartProblems: {type: "string"},
                allergies: {type: "string"},
                otherDiseases: {type: "string"},
                medicalTreatments: {type: "string"},
                medicationUse: {type: "string"},
                UseHealthDevice: {type: "string"},
                additionalObservations: {type: "string"}
            },
            required: []
        },
        response: {
            201: {
                description: "Successful response. Anamnesis created",
                type: "object",
                properties: {
                    isAlcoholic: {type: "boolean"},
                    isSmoker: {type: "boolean"},
                    sleepQuality: {type: "string"},
                    PhysicalActivityHabits: {type: "string"},
                    HydrationHabits: {type: "string"},
                    EatingHabits: {type: "string"},
                    AmountWater: {type: "number"},
                    UseFoodSupplement: {type: "string"},
                    isAnemic: {type: "boolean"},
                    isDiabetic: {type: "boolean"},
                    systolicBloodPressure: {type: "integer"},
                    diastolicBloodPressure: {type: "integer"},
                    restingHeartRate: {type: "string"},
                    haveAnxiety: {type: "boolean"},
                    haveDepression: {type: "boolean"},
                    haveBipolarDisorder: {type: "boolean"},
                    haveObsessiveCompDisorder: {type: "boolean"},
                    haveOtherDisorders: {type: "boolean"},
                    AthleteId: {type: "string", format: "uuid"},
                    heartProblems: {type: "string"},
                    allergies: {type: "string"},
                    otherDiseases: {type: "string"},
                    medicalTreatments: {type: "string"},
                    medicationUse: {type: "string"},
                    UseHealthDevice: {type: "string"},
                    additionalObservations: {type: "string"}
                }
            },
            400: {
                description: "Bad Request response. Invalid data",
                type: "object",
                properties: {
                    message: { type: "string" }
                }
            },
            404: {
                description: "Bad Request response. Anamnensis don't exists",
                type: "object",
                properties: {
                    message: { type: "string" }
                }
            },
            500: {
                description: "Intern Server Error",
                type: "object",
                properties: {
                    message: { type: "string" }
                }
            }
        },
        security: [{ apiKey: [] }]
    }
};


export const DeleteByIdDoc = {
    schema: {
        description: "Delete an anamnesis by id",
        tags: ["Anamnesis"],
        summary: "Delete an anamnesis by id",
        params: {
            type: "object",
            properties: {
                id: { type: "string", format: "uuid"}
            },
            required: ["id"]
        },
        response: {
            204: {
                description: "Successful response. Athlete deleteted",
                type: "object"
            },
            400: {
                description: "Bad Request response. Invalid data",
                type: "object",
                properties: {
                    error: { type: "string" }
                }
            },
            404: {
                description: "Bad Request response. Athlete doesn't exists",
                type: "object",
                properties: {
                    error: { type: "string" }
                }
            },
            500: {
                description: "Intern server error",
                type: "object",
                properties: {
                    error: { type: "string" }
                }
            }
        },
        security: [{ apiKey: [] }]

    }
};
