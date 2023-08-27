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
                email: {type: 'string', format: 'email'},
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

        }
    }
}

export const getTrainerByIdDoc = {
    schema: {
        description: 'Get personal trainer by Id',
        tags: ['Trainer'],
        summary: 'Get personal trainer by Id',
        params: {
            type: 'object',
            properties: {
                id: {type: 'string', format: 'uuid'}
            },
            required: ['id']
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
        }
    }
}

export const mockDoc = {
    schema: {
        tags: ['Trainer']
    }
}