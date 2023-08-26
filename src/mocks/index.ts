import { AthleteRepositoryPrisma } from "@/repositories/athlete/prisma/AthleteRepositoryPrisma"
import { TrainerRepositoryPrisma } from "@/repositories/trainer/prisma/TrainerRepositoryPrisma"
import { AnamnesisRepositoryPrisma } from "@/repositories/anamnesis/prisma/AnamnesisRepositoryPrisma"

import { AthleteCreateService } from "@/services/athlete"
import { TrainerCreateService } from "@/services/trainer"
import { AnamnesisCreateService } from "@/services/anaminesis"


import { athleteMock, trainerMock, anamnesisMock } from "./data"


const athleteRepositoryPrisma = new AthleteRepositoryPrisma();
const trainerRepositoryPrisma = new TrainerRepositoryPrisma();
const anamnesisRepositoryPrisma = new AnamnesisRepositoryPrisma();

const athleteCreateService = new AthleteCreateService(athleteRepositoryPrisma);
const trainerCreateService = new TrainerCreateService(trainerRepositoryPrisma);
const anamnesisCreateService = new AnamnesisCreateService(anamnesisRepositoryPrisma);



export async function populateRepositoriesWithMock() {
    const createdTrainerMock = await trainerCreateService.execute(trainerMock);

    athleteMock.trainer.connect!.id = createdTrainerMock.id;
    const createdAthleteMock = await athleteCreateService.execute(athleteMock);

    anamnesisMock.athlete.connect!.id = createdAthleteMock.id;
    const createdAnamnesisMock = await anamnesisCreateService.execute(anamnesisMock);
};
