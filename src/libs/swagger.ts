export const swaggerConfig = {
    swagger: {
        info: {
            title: 'Healthy Plan API',
            description: 'Testing the Fastify swagger API',
            version: '1.0.0'
        },
        externalDocs: {
            description: 'Find more info here',
            url: 'https://swagger.io'
        },
        host: 'http://localhost',
        schemes: ['http'],
        consumes: ['application/json'],
        produces: ['application/json'],
        tags: [
            { name: 'Address', description: 'Address related end-points' },
            { name: 'Anamnesis', description: 'Anamnesis related end-points' },
            { name: 'Athlete', description: 'Athlete related end-points' },
            { name: 'Body Evaluation', description: 'Body Evaluation related end-points' },
            { name: 'Exercise', description: 'Exercise related end-points' },
            { name: 'Flexibility Evaluation', description: 'Flexibility Evaluation related end-points' },
            { name: 'Method Exercise', description: 'Method Exercise related end-points' },
            { name: 'Session', description: 'Session related end-points' },
            { name: 'Status Photo', description: 'Status Photo related end-points' },
            { name: 'Target', description: 'Target related end-points' },
            { name: 'Trainer', description: 'Trainer related end-points' },
            { name: 'Training', description: 'Training related end-points' },
            { name: 'Training Evolution', description: 'Training Evolution related end-points' }
        ],
        definitions: {
            User: {
                type: 'object',
                required: ['id', 'email'],
                properties: {
                id: { type: 'string', format: 'uuid' },
                firstName: { type: 'string' },
                lastName: { type: 'string' },
                email: {type: 'string', format: 'email' }
                }
            }
        },
        securityDefinitions: {
            apiKey: {
                type: 'apiKey',
                name: 'apiKey',
                in: 'header'
            }
        }
    }
}

export const swaggerUIConfig = {
    routePrefix: '/docs',
    uiConfig: {
        docExpansion: 'list',
        deepLinking: false
    }
}