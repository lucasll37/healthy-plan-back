// import { Trainer, Prisma } from "@prisma/client";
// import { ITrainerRepository } from "../ITrainerRepository";


// export class TrainerRepositoryInMemory implements ITrainerRepository {

//     private trainer: Trainer[] = [];

//     async create(data: Prisma.TrainerCreateInput): Promise<Trainer> {
//         const trainer: Trainer = {
//             ...data,
//             id: "123",
//             birthDate: new Date(data.birthDate),
//             addressId: null,
//             avatar: null,
//             createdAt: new Date(),
//             updatedAt: null

//         };
//         this.trainer.push(trainer);

//         return new Promise(resolve => resolve(trainer));
//     }
// }