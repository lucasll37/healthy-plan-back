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