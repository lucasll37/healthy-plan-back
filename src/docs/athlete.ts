export const mockDoc = {
    schema: {
        tags: ["Athlete"],
        security: [{ apiKey: [] }]
    }
};

export const athleteCreateDoc = {
    schema: {
        description: "Crete a new athlete",
        tags: ["Athlete"],
        summary: "Crete a new athlete",
        body: {
            type: "object",
            properties: {
                name: {type: "string"},
                surname: {type: "string"},
                phone: {type: "string"},
                email: {type: "string", format: "email"},
                sex: {type: "string"},
                birthDate: {type: "string", format: "date"},
                avatar: {type: "string", format: "url"},
                observation: {type: "string"},
                addressInfo: {type: "string"},
                addressNumber: {type: "string"},
                cep: {type: "string"},
                city: {type: "string"},
                state: {type: "string"}
            },
            required: [
                "name",
                "surname",
                "phone",
                "email",
                "sex",
                "birthDate",
                "addressInfo",
                "addressNumber",
                "cep",
                "city",
                "state"
            ]
        },
        response: {
            201: {
                description: "Successful response. Athlete created",
                type: "object",
                properties: {
                    id: { type: "string", format: "uuid" },
                    name: {type: "string", example: "John"},
                    surname: {type: "string", example: "Doe"},
                    phone: {type: "string", example: "123456789"},
                    email: {type: "string", example: "john@doe.com"},
                    createdAt: {type: "string", format: "date-time"},
                    updatedAt: {type: "string", format: "date-time"}
                }
            },
            400: {
                description: "Bad Request response. Invalid data",
                type: "object",
                properties: {
                    error: { type: "string" }
                }
            },
            409: {
                description: "Conflict response. Athlete already exists",
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

export const AthletesGetbyTrainerDoc = {
    schema: {
        description: "Get athletes by Trainer Id",
        tags: ["Athlete"],
        summary: "Get athletes by Trainer Id",
        response: {
            200: {
                description: "Successful response. Personal trainer created",
                type: "object",
                properties: {
                    athletes: {
                        type: "array",
                        items: {
                            type: "object",
                            properties: {
                                id: { type: "string", format: "uuid" },
                                name: {type: "string"},
                                surname: {type: "string"},
                                phone: {type: "string"},
                                email: {type: "string", format: "email"},
                                createdAt: {type: "string", format: "date-time"},
                                updatedAt: {type: "string", format: "date-time"}
                            }
                        }
                    }
                }
            },
            400: {
                description: "Bad Request response. Invalid data",
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

export const athleteGetByIdDoc = {
    schema: {
        description: "Get athlete by Id",
        tags: ["Athlete"],
        summary: "Get athlete by Id",
        params: {
            type: "object",
            properties: {
                id: { type: "string", format: "uuid"}
            },
            required: ["id"]
        },
        response: {
            200: {
                description: "Successful response. Personal trainer created",
                type: "object",
                properties: {
                    id: { type: "string", format: "uuid" },
                    name: {type: "string"},
                    surname: {type: "string"},
                    phone: {type: "string"},
                    email: {type: "string", format: "email"},
                    createdAt: {type: "string", format: "date-time"},
                    updatedAt: {type: "string", format: "date-time"}
                }
            },
            400: {
                description: "Bad Request response. Invalid data",
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


export const athleteUpdateDoc = {
    schema: {
        description: "Update athlete by Id",
        tags: ["Athlete"],
        summary: "Update athlete by Id",
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
                name: {type: "string"},
                surname: {type: "string"},
                phone: {type: "string"},
                email: {type: "string", format: "email"},
                sex: {type: "string"},
                birthDate: {type: "string", format: "date"},
                avatar: {type: "string"}
            },
            required: []
        },
        response: {
            200: {
                description: "Successful response. Personal trainer created",
                type: "object",
                properties: {
                    athletes: {
                        type: "array",
                        items: {
                            type: "object",
                            properties: {
                                id: { type: "string", format: "uuid" },
                                name: {type: "string"},
                                surname: {type: "string"},
                                phone: {type: "string"},
                                email: {type: "string", format: "email"},
                                createdAt: {type: "string", format: "date-time"},
                                updatedAt: {type: "string", format: "date-time"}
                            }
                        }
                    }
                }
            },
            400: {
                description: "Bad Request response. Invalid data",
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

export const athleteDeleteDoc = {
    schema: {
        description: "Delete athlete by Id",
        tags: ["Athlete"],
        summary: "Delete athlete by Id",
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

export const athleteGetBodyEvaluationsDoc = {
    schema: {
        description: "Get Body Evaluations through athlete Id",
        tags: ["Athlete"],
        summary: "Get Body Evaluations through athlete Id",
        params: {
            type: "object",
            properties: {
                id: { type: "string", format: "uuid"}
            },
            required: ["id"]
        },
        response: {
            200: {
                description: "Successful response. Personal trainer created",
                type: "object",
                properties: {
                    bodyEvaluations: {
                        type: "array",
                        items: {
                            type: "object",
                            properties: {
                                id: { type: "string", format: "uuid" },
                                athleteId: {type: "string", format: "uuid"},
                                ageAtTheMoment: {type: "number"},
                                fatMass_kg: {type: "number"},
                                leanMass_kg: {type: "number"},
                                weight_cm: {type: "number"},
                                height_kg: {type: "number"},
                                bodyMassClass: {type: "string"},
                                bodyMassIndex: {type: "number"},
                                skeletalMass: {type: "number"},
                                bodyAge: {type: "number"},
                                basalMetabolicRate: {type: "number"},
                                waistRatioHip: {type: "number"},
                                visceralFat: {type: "string"},
                                neck_circ_cm: {type: "number"},
                                chest_circ_cm: {type: "number"},
                                rightForearm_circ_cm: {type: "number"},
                                leftForearm_circ_cm: {type: "number"},
                                rightArm_circ_cm: {type: "number"},
                                leftArm_circ_cm: {type: "number"},
                                waist_circ_cm: {type: "number"},
                                abdomen_circ_cm: {type: "number"},
                                hip_circ_cm: {type: "number"},
                                rightThigh_circ_cm: {type: "number"},
                                leftThigh_circ_cm: {type: "number"},
                                rightCalf_circ_cm: {type: "number"},
                                leftCalf_circ_cm: {type: "number"},
                                fatPercentage: {type: "number"},
                                createdAt: {type: "string", format: "date-time"},
                                updatedAt: {type: "string", format: "date-time"}
                            }
                        }
                    }
                }
            },
            400: {
                description: "Bad Request response. Invalid data",
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

export const athleteGetAnamnesisDoc = {
    schema: {
        description: "Get Anamnesis through athlete Id",
        tags: ["Athlete"],
        summary: "Get Anamnesis through athlete Id",
        params: {
            type: "object",
            properties: {
                id: { type: "string", format: "uuid"}
            },
            required: ["id"]
        },
        response: {
            200: {
                description: "Successful response. Personal trainer created",
                type: "object",
                properties: {
                    anamnesis: {
                        type: "array",
                        items: {
                            type: "object",
                            properties: {
                                id: { type: "string", format: "uuid" },
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
                                additionalObservations: {type: "string"},
                                createdAt: {type: "string", format: "date-time"},
                                updatedAt: {type: "string", format: "date-time"}
                            }
                        }
                    }
                }
            },
            400: {
                description: "Bad Request response. Invalid data",
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

export const AthletesGetAllDoc = {
    schema: {
        description: "Get All Athletes",
        tags: ["Athlete"],
        summary: "Get All Athletes",
        // params: {
        //     type: "object",
        //     properties: {
        //         id: { type: "string", format: "uuid"}
        //     },
        //     required: ["id"]
        // },
        response: {
            200: {
                description: "Successful response. Personal trainer created",
                type: "object",
                properties: {
                    anamnesis: {
                        type: "array",
                        items: {
                            type: "object",
                            properties: {
                                id: { type: "string", format: "uuid" },
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
                                additionalObservations: {type: "string"},
                                createdAt: {type: "string", format: "date-time"},
                                updatedAt: {type: "string", format: "date-time"}
                            }
                        }
                    }
                }
            },
            400: {
                description: "Bad Request response. Invalid data",
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
