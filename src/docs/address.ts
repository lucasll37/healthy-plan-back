    export const docPost  = {
        schema: {
            description: 'post some data',
            tags: ['Address'],
            summary: 'qwerty',
            params: {
            type: 'object',
            properties: {
                id: {
                type: 'string',
                description: 'user id'
                }
            }
            },
            body: {
            type: 'object',
            properties: {
                hello: { type: 'string' },
                obj: {
                type: 'object',
                properties: {
                    some: { type: 'string' }
                }
                }
            }
            },
            response: {
            201: {
                description: 'Successful response',
                type: 'object',
                properties: {
                hello: { type: 'string' }
                }
            },
            default: {
                description: 'Default response',
                type: 'object',
                properties: {
                foo: { type: 'string' }
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
            tags: ['Address']
        }
    }