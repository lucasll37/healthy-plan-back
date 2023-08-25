import { authenticateRoutes } from "./session";
import { FastifyInstance } from "fastify";
import { addressRoutes } from "./address";
import { anamnesisRoutes } from "./anamnesis";
import { athleteRoutes } from "./athlete";
import { bodyEvaluationRoutes } from "./bodyEvaluation";
import { exerciseRoutes } from "./exercise";
import { flexEvaluationRoutes } from "./flexEvaluation";
import { methodExerciseRoutes } from "./methodExercise";
import { statusPhotoRoutes } from "./statusPhoto";
import { targetRoutes } from "./target";
import { trainerRoutes } from "./trainer";
import { trainingRoutes } from "./training";
import { trainingEvolutionRoutes } from "./trainingEvolution";


async function productionRoutes(app: FastifyInstance) {
    await app.register(authenticateRoutes);
    // await app.register(addressRoutes);
    // await app.register(anamnesisRoutes);
    await app.register(athleteRoutes);
    // await app.register(bodyEvaluationRoutes);
    // await app.register(exerciseRoutes);
    // await app.register(flexEvaluationRoutes);
    // await app.register(methodExerciseRoutes);
    // await app.register(statusPhotoRoutes);
    // await app.register(targetRoutes);
    await app.register(trainerRoutes);
    // await app.register(trainingRoutes);
    // await app.register(trainingEvolutionRoutes);
}

async function releaseRoutes(app: FastifyInstance) {
    //
    //
    //
    //
}


export async function appRoutes(app: FastifyInstance) {
    await app.register(productionRoutes, { prefix: "/v1" });
    await app.register(releaseRoutes, { prefix: "/release" });
}