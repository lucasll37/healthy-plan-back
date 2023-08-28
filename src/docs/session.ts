export const sessionDoc = {
    schema: {
        description: 'Create session for personal trainer',
        tags: ['Session'],
        summary: 'Create session for personal trainer',
        body: {
            type: 'object',
            properties: {
                email: {type: 'string', format: 'email'},
                password: {type: 'string'}
            },
            required: ['email', 'password']
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
