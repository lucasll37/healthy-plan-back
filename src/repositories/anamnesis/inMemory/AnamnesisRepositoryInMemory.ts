// import { Anamnesis, Prisma } from "@prisma/client";
// import { IAnamnesisRepository } from "../IAnamnesisRepository";
// import { randomUUID } from "node:crypto";

// type IData = Prisma.AddressCreateArgs;

// export class AnamnesisRepositoryInMemory implements IAnamnesisRepository {

//     private anamnesis: Anamnesis[] = [];

//     async create(data: Prisma.AnamnesisCreateInput): Promise<Anamnesis> {
//         const anamnesis: Anamnesis = {
//             ...data,
//             id: randomUUID(),
//             additionalObservations: null,
//             heartProblems: null,
//             allergies: null,
//             otherDiseases: null,
//             medicalTreatments: null,
//             medicationUse: null,
//             UseHealthDevice: null,
//             athleteId: randomUUID(),
//             trainerId: randomUUID(),
//             createdAt: new Date(),
//             updatedAt: null
//         };
//         this.anamnesis.push(anamnesis);

//         return new Promise(resolve => resolve(anamnesis));
//     }
// }