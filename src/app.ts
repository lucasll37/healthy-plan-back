import fastify, { FastifyInstance } from "fastify";
import { appRoutes } from "./routers";
import { swagger } from "./libs/swagger"; 
import { ZodError } from "zod";
import { env } from "./env";
import { populateRepositoriesWithMock } from "./mocks";
import fastifyJwt from "@fastify/jwt";

if(env.NODE_ENV !== "production") populateRepositoriesWithMock()

export async function generateApp(): Promise<FastifyInstance> {

    const app = fastify();
    app.register(fastifyJwt, {
        secret: env.JWT_SECRET
    })
    
    await app.register(appRoutes);

    if(env.NODE_ENV !== "production") await app.register(swagger);
    
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
