import { AthleteRepositoryPrisma } from "../repositories/athlete/prisma/AthleteRepositoryPrisma";
import { TrainerRepositoryPrisma } from "../repositories/trainer/prisma/TrainerRepositoryPrisma";
import { AnamnesisRepositoryPrisma } from "../repositories/anamnesis/prisma/AnamnesisRepositoryPrisma";
import { BodyEvaluationRepositoryPrisma } from "../repositories/bodyEvaluation/prisma/BodyEvaluationRepositoryPrisma";

import { AthleteCreateService } from "../services/athlete";
import { TrainerCreateService } from "../services/trainer";
import { AnamnesisCreateService } from "../services/anamnesis";
import { BodyEvaluationCreateService } from "../services/bodyEvaluation";


import {
    athleteMock,
    trainerMock,
    anamnesisMock,
    bodyEvaluationMock
} from "./data";


const athleteRepositoryPrisma = new AthleteRepositoryPrisma();
const trainerRepositoryPrisma = new TrainerRepositoryPrisma();
const anamnesisRepositoryPrisma = new AnamnesisRepositoryPrisma();
const bodyEvaluationRepositoryPrisma = new BodyEvaluationRepositoryPrisma();


const athleteCreateService = new AthleteCreateService(athleteRepositoryPrisma);
const trainerCreateService = new TrainerCreateService(trainerRepositoryPrisma);
const anamnesisCreateService = new AnamnesisCreateService(anamnesisRepositoryPrisma);

const bodyEvaluationCreateService = new BodyEvaluationCreateService(
    bodyEvaluationRepositoryPrisma,
    athleteRepositoryPrisma
);



export async function populateRepositoriesWithMock() {
    const createdTrainerMock = await trainerCreateService.execute(trainerMock);

    athleteMock.trainer.connect!.id = createdTrainerMock.id;
    const createdAthleteMock = await athleteCreateService.execute(athleteMock);

    anamnesisMock.athlete.connect!.id = createdAthleteMock.id;
    await anamnesisCreateService.execute(anamnesisMock);

    bodyEvaluationMock.athlete.connect!.id = createdAthleteMock.id;
    await bodyEvaluationCreateService.execute({
        data: bodyEvaluationMock,
        trainerId: createdTrainerMock.id
    });

}
