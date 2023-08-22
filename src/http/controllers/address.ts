import { FastifyRequest, FastifyReply } from "fastify";
// import { z } from "zod";

export async function addressTest(request: FastifyRequest, reply: FastifyReply) {

    // const registerBodySchema = z.object({

    // });
    
    // const { name, email, password } = registerBodySchema.parse(request.body);
    
    try {
        console.log("brilhou!!!")
    }

    catch(error) {

    }
    
    return reply.status(200).send({msg: "brilhou!!!"});
}