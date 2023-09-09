import { FastifyInstance } from "fastify";
import {
    createTrainerDoc,
    getTrainerByIdDoc,
    updateTrainerDoc,
    deleteTrainerDoc,
    // mockDoc,
    docPDF
} from "../docs/trainer";

import {
    TrainerCreateController,
    TrainerGetByIdController,
    TrainerUpdateController,
    TrainerDeleteController
} from "../controllers/trainer";

const trainerCreateController = new TrainerCreateController();
const trainerGetByIdController = new TrainerGetByIdController();
const trainerUpdateController = new TrainerUpdateController();
const trainerDeleteController = new TrainerDeleteController();

import { TDocumentDefinitions } from "pdfmake/interfaces";
import { generatePdf } from "../libs/pdfmake";
import { testPdf } from "@/template/pdf/test";
import { testExcel } from "@/template/xlsx/test";

export async function trainerRoutes(app: FastifyInstance) {
    // app.get("/trainer", mockDoc, ()=>{});
    app.get("/trainer/:id", getTrainerByIdDoc, trainerGetByIdController.handler);
    app.post("/trainer", createTrainerDoc, trainerCreateController.handler);
    app.patch("/trainer/:id", updateTrainerDoc, trainerUpdateController.handler);
    app.delete("/trainer/:id", deleteTrainerDoc, trainerDeleteController.handler);


    app.get("/trainer/report", docPDF, async (request, reply) => {
        const docDefinition: TDocumentDefinitions = testPdf();
        const report = await generatePdf(docDefinition);
        reply.type("application/pdf").send(report);
    });

    app.get("/trainer/excel", async (request, reply) => {
        const spreadsheet = await testExcel();

        reply
            .type("application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
            .send(spreadsheet);
    });
}


// teste


