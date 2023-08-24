import { AthleteRepositoryPrisma } from "@/repositories/athlete/prisma/AthleteRepositoryPrisma"
import { AthleteCreateService } from "@/services/athlete"
import { athleteMock } from "./athlete"


export async function populateRepositoriesWithMock() {
    const athleteRepositoryPrisma = new AthleteRepositoryPrisma();
    const athleteCreateService = new AthleteCreateService(athleteRepositoryPrisma);

    await athleteCreateService.execute(athleteMock);
};
