import { FastifyInstance } from "fastify";
import Swagger from "@fastify/swagger";
import SwaggerUi from "@fastify/swagger-ui";

export async function swagger(app: FastifyInstance) {
    await app.register(Swagger,
        {
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
                { name: 'user', description: 'User related end-points' },
                { name: 'code', description: 'Code related end-points' }
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
    );

    await app.register(SwaggerUi, {
        routePrefix: '/docs',
        uiConfig: {
            docExpansion: 'full',
            deepLinking: false
        },
        uiHooks: {
            onRequest: function (request, reply, next) { next() },
            preHandler: function (request, reply, next) { next() }
        },
        staticCSP: true,
        transformStaticCSP: (header) => header,
        transformSpecification: (swaggerObject, request, reply) => { return swaggerObject },
        transformSpecificationClone: true
        }
    );
}