-- CreateEnum
CREATE TYPE "Sex" AS ENUM ('M', 'F');

-- CreateTable
CREATE TABLE "anamnesis" (
    "id" TEXT NOT NULL,
    "athleteId" TEXT NOT NULL,
    "isAlcoholic" BOOLEAN NOT NULL,
    "isSmoker" BOOLEAN NOT NULL,
    "sleepQuality" TEXT NOT NULL,
    "PhysicalActivityHabits" TEXT NOT NULL,
    "HydrationHabits" TEXT NOT NULL,
    "EatingHabits" TEXT NOT NULL,
    "AmountWater" DOUBLE PRECISION NOT NULL,
    "UseFoodSupplement" TEXT NOT NULL,
    "isAnemic" BOOLEAN NOT NULL,
    "isDiabetic" BOOLEAN NOT NULL,
    "systolicBloodPressure" INTEGER NOT NULL,
    "diastolicBloodPressure" INTEGER NOT NULL,
    "restingHeartRate" INTEGER NOT NULL,
    "heartProblems" TEXT,
    "allergies" TEXT,
    "otherDiseases" TEXT,
    "medicalTreatments" TEXT,
    "medicationUse" TEXT,
    "UseHealthDevice" TEXT,
    "haveAnxiety" BOOLEAN NOT NULL,
    "haveDepression" BOOLEAN NOT NULL,
    "haveBipolarDisorder" BOOLEAN NOT NULL,
    "haveObsessiveCompDisorder" BOOLEAN NOT NULL,
    "haveOtherDisorders" BOOLEAN NOT NULL,
    "additionalObservations" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "anamnesis_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "athlete" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "surname" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "avatar" TEXT,
    "sex" TEXT NOT NULL,
    "observation" TEXT,
    "birthDate" TIMESTAMP(3) NOT NULL,
    "trainerId" TEXT NOT NULL,
    "addressId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "athlete_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "address" (
    "id" TEXT NOT NULL,
    "addressInfo" TEXT NOT NULL,
    "addressNumber" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "cep" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "address_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "trainer" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "surname" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "avatar" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "trainer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "body-evaluation" (
    "id" TEXT NOT NULL,
    "ageAtTheMoment" INTEGER NOT NULL,
    "fatMass_kg" DOUBLE PRECISION NOT NULL,
    "leanMass_kg" DOUBLE PRECISION NOT NULL,
    "weight_cm" DOUBLE PRECISION NOT NULL,
    "height_kg" DOUBLE PRECISION NOT NULL,
    "bodyMassIndex" DOUBLE PRECISION NOT NULL,
    "bodyMassClass" TEXT NOT NULL,
    "skeletalMass" DOUBLE PRECISION NOT NULL,
    "bodyAge" DOUBLE PRECISION NOT NULL,
    "basalMetabolicRate" INTEGER NOT NULL,
    "waistRatioHip" DOUBLE PRECISION NOT NULL,
    "visceralFat" TEXT NOT NULL,
    "neck_circ_cm" DOUBLE PRECISION NOT NULL,
    "chest_circ_cm" DOUBLE PRECISION NOT NULL,
    "rightForearm_circ_cm" DOUBLE PRECISION NOT NULL,
    "leftForearm_circ_cm" DOUBLE PRECISION NOT NULL,
    "rightArm_circ_cm" DOUBLE PRECISION NOT NULL,
    "leftArm_circ_cm" DOUBLE PRECISION NOT NULL,
    "waist_circ_cm" DOUBLE PRECISION NOT NULL,
    "abdomen_circ_cm" DOUBLE PRECISION NOT NULL,
    "hip_circ_cm" DOUBLE PRECISION NOT NULL,
    "rightThigh_circ_cm" DOUBLE PRECISION NOT NULL,
    "leftThigh_circ_cm" DOUBLE PRECISION NOT NULL,
    "rightCalf_circ_cm" DOUBLE PRECISION NOT NULL,
    "leftCalf_circ_cm" DOUBLE PRECISION NOT NULL,
    "fatPercentage" DOUBLE PRECISION NOT NULL,
    "athleteId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "body-evaluation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "exercise" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "exercise_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "flex-evaluation" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "flex-evaluation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "method-exercise" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "method-exercise_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "status-photo" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "status-photo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "target" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "target_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "training" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "training_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "training-evolution" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "training-evolution_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "athlete_email_key" ON "athlete"("email");

-- CreateIndex
CREATE UNIQUE INDEX "athlete_addressId_key" ON "athlete"("addressId");

-- CreateIndex
CREATE UNIQUE INDEX "trainer_email_key" ON "trainer"("email");

-- AddForeignKey
ALTER TABLE "anamnesis" ADD CONSTRAINT "anamnesis_athleteId_fkey" FOREIGN KEY ("athleteId") REFERENCES "athlete"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "athlete" ADD CONSTRAINT "athlete_trainerId_fkey" FOREIGN KEY ("trainerId") REFERENCES "trainer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "athlete" ADD CONSTRAINT "athlete_addressId_fkey" FOREIGN KEY ("addressId") REFERENCES "address"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "body-evaluation" ADD CONSTRAINT "body-evaluation_athleteId_fkey" FOREIGN KEY ("athleteId") REFERENCES "athlete"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
