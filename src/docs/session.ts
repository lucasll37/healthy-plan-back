import fastifyJwt from "@fastify/jwt";

export const sessionDoc = {
    schema: {
        description: 'Create session for personal trainer',
        tags: ['Session'],
        summary: 'Create session for personal trainer',
        body: {
            type: 'object',
            properties: {
                email: {type: 'string'},
                password: {type: 'string'}
            },
            required: ['email', 'password'],
            // example: {
            //     email: 'john@doe.com',
            //     password: 'abcdefgh'
            // }
        },
        response: {
        201: {
            description: 'Successful response. Personal trainer created',
            type: 'object',
            properties: {
                token: { type: 'string'}
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

        }
    }
}
