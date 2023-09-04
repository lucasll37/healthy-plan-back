export const createTrainerDoc = {
    schema: {
        description: "Crete a new personal trainer",
        tags: ["Trainer"],
        summary: "Crete a new personal trainer",
        body: {
            type: "object",
            properties: {
                name: {type: "string"},
                surname: {type: "string"},
                phone: {type: "string"},
                email: {type: "string", format: "email"},
                password: {type: "string"},
                avatar: {type: "string", format: "url"}
            },
            required: ["name", "surname", "phone", "email", "password"]
        },
        response: {
            201: {
                description: "Successful response. Personal trainer created",
                type: "object",
                properties: {
                    id: { type: "string", format: "uuid" },
                    name: {type: "string", example: "John"},
                    surname: {type: "string", example: "Doe"},
                    email: {type: "string", example: "john@doe.com"},
                    password: {type: "string"},
                    phone: {type: "string", example: "123456789"},
                    avatar: {type: "string", format: "url"}
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
                description: "Conflict response. Personal trainer already exists",
                type: "object",
                properties: {
                    error: { type: "string" }
                }
            },
            500: {
                description: "testestsetse",
                type: "object",
                properties: {
                    error: { type: "string" }
                }
            }

        }
    }
};

export const getTrainerByIdDoc = {
    schema: {
        description: "Get personal trainer by Id",
        tags: ["Trainer"],
        summary: "Get personal trainer by Id",
        params: {
            type: "object",
            properties: {
                id: {type: "string", format: "uuid"}
            },
            required: ["id"]
        },
        response: {
            201: {
                description: "Successful response. Personal trainer found",
                type: "object",
                properties: {
                    id: { type: "string", format: "uuid" },
                    name: {type: "string", example: "John"},
                    surname: {type: "string", example: "Doe"},
                    phone: {type: "string", example: "123456789"},
                    email: {type: "string", example: "john@doe.com"},
                    password: {type: "string"},
                    avatar: {type: "string", format: "url"},
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
            404: {
                description: "Personal trainer doesn't exists",
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

export const updateTrainerDoc = {
    schema: {
        description: "Update a personal trainer",
        tags: ["Trainer"],
        summary: "Update personal trainer",
        params: {
            type: "object",
            properties: {
                id: {type: "string", format: "uuid"}
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
                password: {type: "string"}
            },
        },
        response: {
            200: {
                description: "Successful response. Personal trainer created",
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
            404: {
                description: "Personal trainer doesn't exists",
                type: "object",
                properties: {
                    error: { type: "string" }
                }
            },
            500: {
                description: "testestsetse",
                type: "object",
                properties: {
                    error: { type: "string" }
                }
            }

        },
        security: [{ apiKey: [] }]
    }
};

export const deleteTrainerDoc = {
    schema: {
        description: "Delete personal trainer by Id",
        tags: ["Trainer"],
        summary: "Delete personal trainer by Id",
        params: {
            type: "object",
            properties: {
                id: {type: "string", format: "uuid"}
            },
            required: ["id"]
        },
        response: {
            204: {
                description: "Successful response. Personal trainer deleteted",
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
                description: "Bad Request response. Trainer doesn't exists",
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


export const mockDoc = {
    schema: {
        tags: ["Body Evaluation"]
    }
};
