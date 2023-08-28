import { Prisma } from "@prisma/client";
import { randomUUID } from "crypto";


export const trainerMock: Prisma.TrainerCreateInput = {
    name: "John",
    surname: "Doe",
    email: `${randomUUID()}@mock.com`,
    password: "123456",
    phone: "123456789"
}

export const athleteMock: Prisma.AthleteCreateInput = {
    name: "John",
    surname: "Doe",
    phone: "123456789",
    email: `${randomUUID()}@mock.com`,
    sex: "M",
    birthDate: new Date("1995-05-05"),
    avatar: "https://www.google.com",
    observation: "observation", 
    trainer: {
        connect: {
            id: "will be replaced by id trainer mock"
        }
    },
    address: {
        create: {
            addressInfo: "Rua dos bobos",
            addressNumber: "0",
            cep: "cep",
            city: "São Sosé dos Campos",
            state: "SP"
        }
    }
}

export const anamnesisMock: Prisma.AnamnesisCreateInput = {
    isAlcoholic: false,
    isSmoker: false,
    sleepQuality: "Ótimo",
    PhysicalActivityHabits: "Ótimo",
    HydrationHabits: "Ótimo",
    EatingHabits: "Ótimo",
    AmountWater: 2,
    UseFoodSupplement: "Ótimo",
    isAnemic: false,
    isDiabetic: false,
    systolicBloodPressure: 12,
    diastolicBloodPressure: 8,
    restingHeartRate: 65,
    haveAnxiety: false,
    haveDepression: false,
    haveBipolarDisorder: false,
    haveObsessiveCompDisorder: false,
    haveOtherDisorders: false,
    heartProblems: "Não",
    allergies: "Não",
    otherDiseases: "Não",
    medicalTreatments: "Não",
    medicationUse: "Não",
    UseHealthDevice: "Não",
    additionalObservations: "Não",
    athlete: {
        connect: {
            id: "will be replaced by id athlete mock"
        }
    }
}

export const bodyEvaluationMock: Prisma.BodyEvaluationCreateInput = {
    ageAtTheMoment: 0,
    fatMass_kg: 0,
    leanMass_kg: 0,
    weight_cm: 0,
    height_kg: 0,
    bodyMassIndex: 0,
    bodyMassClass: '0',
    skeletalMass: 0,
    bodyAge: 0,
    basalMetabolicRate: 0,
    waistRatioHip: 0,
    visceralFat: '0',
    neck_circ_cm: 0,
    chest_circ_cm: 0,
    rightForearm_circ_cm: 0,
    leftForearm_circ_cm: 0,
    rightArm_circ_cm: 0,
    leftArm_circ_cm: 0,
    waist_circ_cm: 0,
    abdomen_circ_cm: 0,
    hip_circ_cm: 0,
    rightThigh_circ_cm: 0,
    leftThigh_circ_cm: 0,
    rightCalf_circ_cm: 0,
    leftCalf_circ_cm: 0,
    fatPercentage: 0,
    athlete: {
        connect: {
            id: "will be replaced by id athlete mock"
        }
    }
};










