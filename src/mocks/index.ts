import { AthleteRepositoryPrisma } from "@/repositories/athlete/prisma/AthleteRepositoryPrisma"
import { TrainerRepositoryPrisma } from "@/repositories/trainer/prisma/TrainerRepositoryPrisma"

import { AthleteCreateService } from "@/services/athlete"
import { TrainerCreateService } from "@/services/trainer"


import { athleteMock, trainerMock } from "./data"


const athleteRepositoryPrisma = new AthleteRepositoryPrisma();
const trainerRepositoryPrisma = new TrainerRepositoryPrisma();

const athleteCreateService = new AthleteCreateService(athleteRepositoryPrisma);
const trainerCreateService = new TrainerCreateService(trainerRepositoryPrisma);



export async function populateRepositoriesWithMock() {
    const createTrainerMock = await trainerCreateService.execute(trainerMock);
    athleteMock.trainer.connect!.id = createTrainerMock.id;
    await athleteCreateService.execute(athleteMock);
};
