// import { FastifyRequest, FastifyReply } from "fastify";
// import { makeAuthenticateService } from "@/factories/make-register-service"; 
// import { z } from "zod";
// import { InvalidCredenctialsError } from "@/services/errors/invalid-credentials-error";


// export async function authenticate(request: FastifyRequest, reply: FastifyReply) {

//     const authenticateBodySchema = z.object({
//         email: z.string().email(),
//         password: z.string().min(6),
//     });
    
//     const { email, password } = authenticateBodySchema.parse(request.body);
    
//     try {
//         const authenticateService = makeAuthenticateService();

//         await authenticateService.execute({
//             email,
//             password
//         });
//     }

//     catch(error) {
//         if(error instanceof InvalidCredenctialsError) {
//             return reply.status(400).send({
//                 message: error.message
//             });
//         }

//         throw error;
//     }
    
//     return reply.status(200).send();
// }

import { FastifyRequest, FastifyReply } from "fastify";
import { AddressRepositoryPrisma } from "@/repositories/address/prisma/AddressRepositoryPrisma";
import { AddressTestService } from "@/services/address";
// import { z } from "zod";

export class AddressTest {

    handler(request: FastifyRequest, reply: FastifyReply) {

        const addressRespository = new AddressRepositoryPrisma()
        const addressTestService = new AddressTestService(addressRespository)
        
            // const registerBodySchema = z.object({
                
                // });
                
                // const { name, email, password } = registerBodySchema.parse(request.body);
                
        try {
            addressTestService.execute();
        }
        
        catch(error) {
            console.log("mamou!!!");
            
        }
        
        return reply.status(200).send({msg: "brilhou!!!"});
    }
}