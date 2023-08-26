import fastify, { FastifyInstance } from "fastify";
import { appRoutes } from "./routers";
import swagger from "@fastify/swagger";
import swaggerUI from "@fastify/swagger-ui";
import { swaggerConfig, swaggerUIConfig } from "./libs/swagger"; 
import cors from '@fastify/cors';
import { ZodError } from "zod";
import { env } from "./env";
import { populateRepositoriesWithMock } from "./mocks";
import fastifyJwt from "@fastify/jwt";
import { corsOptions } from "../config/cors"


if(env.NODE_ENV !== "production") populateRepositoriesWithMock()

export const app = fastify();

app.register(cors, corsOptions);

app.register(fastifyJwt, { secret: env.JWT_SECRET })

if(env.NODE_ENV !== "production") {
    app.register(swagger, {
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
            schemes: ['http'],
            consumes: ['application/json'],
            produces: ['application/json'],
            tags: [
                // { name: 'Address', description: 'Address related end-points' },
                // { name: 'Anamnesis', description: 'Anamnesis related end-points' },
                { name: 'Athlete', description: 'Athlete related end-points' },
                // { name: 'Body Evaluation', description: 'Body Evaluation related end-points' },
                // { name: 'Exercise', description: 'Exercise related end-points' },
                // { name: 'Flexibility Evaluation', description: 'Flexibility Evaluation related end-points' },
                // { name: 'Method Exercise', description: 'Method Exercise related end-points' },
                { name: 'Session', description: 'Session related end-points' },
                // { name: 'Status Photo', description: 'Status Photo related end-points' },
                // { name: 'Target', description: 'Target related end-points' },
                { name: 'Trainer', description: 'Trainer related end-points' },
                // { name: 'Training', description: 'Training related end-points' },
                // { name: 'Training Evolution', description: 'Training Evolution related end-points' }
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
                },
                Trainer: {
                    type: 'object',
                    required: ['id', 'name', 'surname', 'phone', 'email', 'password'],
                    properties: {
                        id: { type: 'string'},
                        name: {type: 'string'},
                        surname: {type: 'string'},
                        phone: {type: 'string'},
                        email: {type: 'string'},
                        password: {type: 'string'}
                    }
                }
            },
            securityDefinitions: {
                apiKey: {
                    type: 'apiKey',
                    name: 'Authorization',
                    in: 'header',
                    description: 'Digite "Bearer" e em seguida, cole o seu token [Bearer "seu Token"]'
                }
            }
        }
    });

    app.register(swaggerUI, {
        routePrefix: '/docs',
        uiConfig: {
            docExpansion: 'none',
            deepLinking: false
        }
    });
}

app.register(appRoutes);

app.setErrorHandler((error, _, reply) => {

    
    if(error instanceof ZodError) {
        return reply
            .status(400)
            .send({
                message: "Validation failed",
                issues: error.format()
            });
    }

    if(env.NODE_ENV !== "production") {
        console.error(error.message);
    }

    else {
        // TODO: Send error to Sentry
    }

    return reply.status(500).send({message: "Internal server error"});
});