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
    // app.post("/sessions", authenticate);
    app.register(addressRoutes);
    app.register(anamnesisRoutes);
    app.register(athleteRoutes);
    app.register(bodyEvaluationRoutes);
    app.register(exerciseRoutes);
    app.register(flexEvaluationRoutes);
    app.register(methodExerciseRoutes);
    app.register(statusPhotoRoutes);
    app.register(targetRoutes);
    app.register(trainerRoutes);
    app.register(trainingRoutes);
    app.register(trainingEvolutionRoutes);
}

async function releaseRoutes(app: FastifyInstance) {
    app.register(addressRoutes);
}


export async function appRoutes(app: FastifyInstance) {
    app.register(productionRoutes, { prefix: "/v1" });
    app.register(releaseRoutes, { prefix: "/release" });
}