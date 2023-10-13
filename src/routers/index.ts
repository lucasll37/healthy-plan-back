import { authenticateRoutes } from "./session";
import { FastifyInstance } from "fastify";
import { addressRoutes } from "./address";
import { anamnesisRoutes } from "./anamnesis";
import { athleteRoutes } from "./athlete";
import { bodyEvaluationRoutes } from "./bodyEvaluation";
// import { exerciseRoutes } from "./exercise";
// import { flexEvaluationRoutes } from "./flexEvaluation";
// import { methodExerciseRoutes } from "./methodExercise";
// import { statusPhotoRoutes } from "./statusPhoto";
// import { targetRoutes } from "./target";
import { trainerRoutes } from "./trainer";
import { healthRoutes } from "./health";
// import { trainingRoutes } from "./training";
// import { trainingEvolutionRoutes } from "./trainingEvolution";


async function productionRoutes(app: FastifyInstance) {
    await app.register(authenticateRoutes, { prefix: "/session" });
    await app.register(trainerRoutes, { prefix: "/trainer" });
    await app.register(athleteRoutes, { prefix: "/athlete" });
    await app.register(anamnesisRoutes, { prefix: "/anamnesis" });
    await app.register(bodyEvaluationRoutes, { prefix: "/body-evaluation" });
    await app.register(addressRoutes, { prefix: "/address" });
    // await app.register(exerciseRoutes, { prefix: "/" });
    // await app.register(flexEvaluationRoutes, { prefix: "/" });
    // await app.register(methodExerciseRoutes, { prefix: "/" });
    // await app.register(statusPhotoRoutes, { prefix: "/" });
    // await app.register(targetRoutes, { prefix: "/" });
    // await app.register(trainingRoutes, { prefix: "/" });
    // await app.register(trainingEvolutionRoutes, { prefix: "/" });
}

async function releaseRoutes(app: FastifyInstance) {
    // RELEASE ROUTES ///////////////
    //
    // ...
    //
    // RELEASE ROUTES ///////////////
}


export async function appRoutes(app: FastifyInstance) {
    // HEALTH CHECK /////////////////
    await app.register(healthRoutes);
    // HEALTH CHECK /////////////////
    await app.register(productionRoutes, { prefix: "/v1" });
    await app.register(releaseRoutes, { prefix: "/release" });
}
