export const createTrainerDoc = {
    schema: {
        description: 'Crete a new personal trainer',
        tags: ['Trainer'],
        summary: 'Crete a new personal trainer',
        body: {
            type: 'object',
            properties: {
                name: {type: 'string'},
                surname: {type: 'string'},
                phone: {type: 'string'},
                email: {type: 'string'},
                password: {type: 'string'}
            },
            required: ['name', 'surname', 'phone', 'email', 'password'],
            // example: {
            //     name: 'John',
            //     surname: 'Doe',
            //     phone: '123456789',
            //     email: 'john@doe.com',
            //     password: 'abcdefgh'
            // }
        },
        response: {
        201: {
            description: 'Successful response. Personal trainer created',
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
        security: [
        {
            "apiKey": []
        }
        ]
    }
}

export const getTrainerByIdDoc = {
    schema: {
        description: 'Get personal trainer by ID',
        tags: ['Trainer'],
        summary: 'Get personal trainer by ID',
        params: {
            type: 'object',
            properties: {
                id: {type: 'string'}
            },
            required: ['id'],
            // example: {
            //     name: 'John',
            //     surname: 'Doe',
            //     phone: '123456789',
            //     email: 'john@doe.com',
            //     password: 'abcdefgh'
            // }
        },
        response: {
        201: {
            description: 'Successful response. Personal trainer found',
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
                error: { type: 'string' }
            }
        },
        500: {
            description: 'Intern server error',
            type: 'object',
            properties: {
                error: { type: 'string' }
            }
        }

        },
        security: [
        {
            "apiKey": []
        }
        ]
    }
}

export const mockDoc = {
    schema: {
        tags: ['Trainer']
    }
}



// email: z.string().email(),
// password: z.string()


// export const mockDoc = {
//     schema: {
//         description: 'crete a new personal trainer',
//         tags: ['Trainer'],
//         summary: 'crete a new personal trainer',
//         params: {
//         type: 'object',
//         properties: {
//             id: {
//             type: 'string',
//             description: 'user id'
//             }
//         }
//         },
//         body: {
//         type: 'object',
//         properties: {
//             hello: { type: 'string' },
//             obj: {
//             type: 'object',
//             properties: {
//                 some: { type: 'string' }
//             }
//             }
//         }
//         },
//         response: {
//         201: {
//             description: 'Successful response',
//             type: 'object',
//             properties: {
//             hello: { type: 'string' }
//             }
//         },
//         default: {
//             description: 'Default response',
//             type: 'object',
//             properties: {
//             foo: { type: 'string' }
//             }
//         }
//         },
//         security: [
//         {
//             "apiKey": []
//         }
//         ]
//     }
// }