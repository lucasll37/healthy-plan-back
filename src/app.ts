import fastify, { FastifyInstance } from "fastify";
import { appRoutes } from "./routers";
import { swagger } from "./libs/swagger"; 
import { ZodError } from "zod";
import { env } from "./env";
import { populateRepositoriesWithMock } from "./mocks";
import fastifyJwt from "@fastify/jwt";






import Swagger from "@fastify/swagger";
import SwaggerUi from "@fastify/swagger-ui";




// if(env.NODE_ENV !== "production") populateRepositoriesWithMock()

export async function generateApp(): Promise<FastifyInstance> {

    const app = fastify();
    app.register(fastifyJwt, { secret: env.JWT_SECRET })
    
    // if(env.NODE_ENV !== "production") await app.register(swagger);







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
    );

    await app.register(SwaggerUi, {
        routePrefix: '/docs',
        uiConfig: {
            docExpansion: 'list',
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









    await app.register(appRoutes);

    app.setErrorHandler((error, _, reply) => {

    
        if(error instanceof ZodError) {
            return reply
                .status(400)
                .send({message: "Validation failed",
                    issues: error.format()});
        }
    
        if(env.NODE_ENV !== "production") {
            console.error(error.message);
        }
    
        else {
            // TODO: Send error to Sentry
        }
    
        return reply.status(500).send({message: "Internal server error"});
    });
    
    await app.ready();
    // app.swagger();

    return app;
}
