// import { TrainingEvolution, Prisma } from "@prisma/client";
// import { ITrainingEvolutionRepository } from "../ITrainingEvolutionRepository";

// type IData = Prisma.AddressCreateArgs;

// export class ITrainingEvolutionRepositoryInMemory implements ITrainingEvolutionRepository {

//     private trainingEvolution: TrainingEvolution[] = [];

//     async create(data: Prisma.TrainingEvolutionCreateInput): Promise<TrainingEvolution> {
//         const trainingEvolution: TrainingEvolution = {
//             id: String(this.trainingEvolution.length + 1),
//             ...data,
//             createdAt: new Date(),
//             updatedAt: new Date()
//         };
//         this.trainingEvolution.push(trainingEvolution);

//         return new Promise(resolve => resolve(trainingEvolution));
//     }
// }