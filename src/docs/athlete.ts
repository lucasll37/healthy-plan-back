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
                avatar: {type: "string", format: "email"},
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
                    password: {type: "string"}
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
                    athletes: {type: "array",
                        items: {
                            id: { type: "string", format: "uuid" },
                            name: {type: "string"},
                            surname: {type: "string"},
                            phone: {type: "string"},
                            email: {type: "string", format: "email"},
                            password: {type: "string"}
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
                    password: {type: "string"}
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
                    id: { type: "string", format: "uuid" },
                    name: {type: "string"},
                    surname: {type: "string"},
                    phone: {type: "string"},
                    email: {type: "string", format: "email"},
                    password: {type: "string"}
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
            // 200: {
            //     description: "Successful response. Personal trainer created",
            //     type: "object",
            //     properties: {
            //         id: { type: "string", format: "uuid" },
            //         name: {type: "string"},
            //         surname: {type: "string"},
            //         phone: {type: "string"},
            //         email: {type: "string", format: "email"},
            //         password: {type: "string"}
            //     }
            // },
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
            // 200: {
            //     description: "Successful response. Personal trainer created",
            //     type: "object",
            //     properties: {
            //         id: { type: "string", format: "uuid" },
            //         name: {type: "string"},
            //         surname: {type: "string"},
            //         phone: {type: "string"},
            //         email: {type: "string", format: "email"},
            //         password: {type: "string"}
            //     }
            // },
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
