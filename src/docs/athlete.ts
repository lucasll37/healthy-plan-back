export const mockDoc = {
    schema: {
        tags: ['Athlete'],
        security: [{ apiKey: [] }]
    }
}


export const athleteCreateDoc = {
    schema: {
        description: 'Crete a new athlete',
        tags: ['Athlete'],
        summary: 'Crete a new athlete',
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
                observation: {type: 'string'}
            },
            required: ['name', 'surname', 'phone', 'email', 'sex', 'birthDate'],
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
        security: [{ apiKey: [] }]

    }
}