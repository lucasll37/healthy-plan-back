import { FastifyError, FastifyReply } from "fastify";
import { env } from "../env";
import { ZodError } from "zod";

export function errorHandler(error: FastifyError, _: any, reply: FastifyReply) {

    
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
}