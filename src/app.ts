import fastify from "fastify";
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

    app.register(swagger, swaggerConfig);
    app.register(swaggerUI, swaggerUIConfig);
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
            return reply.status(400).send({
                error: error.message
            });
        }
        
        else {
            // TODO: Send error to Sentry
        }
        
    return reply.status(500).send({message: "Internal server error"});
});