import { AthleteRepositoryPrisma } from "@/repositories/athlete/prisma/AthleteRepositoryPrisma"
import { TrainerRepositoryPrisma } from "@/repositories/trainer/prisma/TrainerRepositoryPrisma"

import { AthleteCreateService } from "@/services/athlete"
import { TrainerCreateService } from "@/services/trainer"


import { athleteMock } from "./athlete"
import { trainerMock } from "./trainer"


const athleteRepositoryPrisma = new AthleteRepositoryPrisma();
const trainerRepositoryPrisma = new TrainerRepositoryPrisma();

const athleteCreateService = new AthleteCreateService(athleteRepositoryPrisma);
const trainerCreateService = new TrainerCreateService(trainerRepositoryPrisma);



export async function populateRepositoriesWithMock() {
    await athleteCreateService.execute(athleteMock);
    await trainerCreateService.execute(trainerMock);
};
