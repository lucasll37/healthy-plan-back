/*
  Warnings:

  - Added the required column `AmountWater` to the `anamnesis` table without a default value. This is not possible if the table is not empty.
  - Added the required column `EatingHabits` to the `anamnesis` table without a default value. This is not possible if the table is not empty.
  - Added the required column `HydrationHabits` to the `anamnesis` table without a default value. This is not possible if the table is not empty.
  - Added the required column `PhysicalActivityHabits` to the `anamnesis` table without a default value. This is not possible if the table is not empty.
  - Added the required column `UseFoodSupplement` to the `anamnesis` table without a default value. This is not possible if the table is not empty.
  - Added the required column `athleteId` to the `anamnesis` table without a default value. This is not possible if the table is not empty.
  - Added the required column `diastolicBloodPressure` to the `anamnesis` table without a default value. This is not possible if the table is not empty.
  - Added the required column `haveAnxiety` to the `anamnesis` table without a default value. This is not possible if the table is not empty.
  - Added the required column `haveBipolarDisorder` to the `anamnesis` table without a default value. This is not possible if the table is not empty.
  - Added the required column `haveDepression` to the `anamnesis` table without a default value. This is not possible if the table is not empty.
  - Added the required column `haveObsessiveCompDisorder` to the `anamnesis` table without a default value. This is not possible if the table is not empty.
  - Added the required column `haveOtherDisorders` to the `anamnesis` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isAlcoholic` to the `anamnesis` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isAnemic` to the `anamnesis` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isDiabetic` to the `anamnesis` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isSmoker` to the `anamnesis` table without a default value. This is not possible if the table is not empty.
  - Added the required column `restingHeartRate` to the `anamnesis` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sleepQuality` to the `anamnesis` table without a default value. This is not possible if the table is not empty.
  - Added the required column `systolicBloodPressure` to the `anamnesis` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `anamnesis` ADD COLUMN `AmountWater` DOUBLE NOT NULL,
    ADD COLUMN `EatingHabits` VARCHAR(191) NOT NULL,
    ADD COLUMN `HydrationHabits` VARCHAR(191) NOT NULL,
    ADD COLUMN `PhysicalActivityHabits` VARCHAR(191) NOT NULL,
    ADD COLUMN `UseFoodSupplement` VARCHAR(191) NOT NULL,
    ADD COLUMN `UseHealthDevice` VARCHAR(191) NULL,
    ADD COLUMN `additionalObservations` VARCHAR(191) NULL,
    ADD COLUMN `allergies` VARCHAR(191) NULL,
    ADD COLUMN `athleteId` VARCHAR(191) NOT NULL,
    ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `diastolicBloodPressure` INTEGER NOT NULL,
    ADD COLUMN `haveAnxiety` BOOLEAN NOT NULL,
    ADD COLUMN `haveBipolarDisorder` BOOLEAN NOT NULL,
    ADD COLUMN `haveDepression` BOOLEAN NOT NULL,
    ADD COLUMN `haveObsessiveCompDisorder` BOOLEAN NOT NULL,
    ADD COLUMN `haveOtherDisorders` BOOLEAN NOT NULL,
    ADD COLUMN `heartProblems` VARCHAR(191) NULL,
    ADD COLUMN `isAlcoholic` BOOLEAN NOT NULL,
    ADD COLUMN `isAnemic` BOOLEAN NOT NULL,
    ADD COLUMN `isDiabetic` BOOLEAN NOT NULL,
    ADD COLUMN `isSmoker` BOOLEAN NOT NULL,
    ADD COLUMN `medicalTreatments` VARCHAR(191) NULL,
    ADD COLUMN `medicationUse` VARCHAR(191) NULL,
    ADD COLUMN `otherDiseases` VARCHAR(191) NULL,
    ADD COLUMN `restingHeartRate` INTEGER NOT NULL,
    ADD COLUMN `sleepQuality` VARCHAR(191) NOT NULL,
    ADD COLUMN `systolicBloodPressure` INTEGER NOT NULL,
    ADD COLUMN `updatedAt` DATETIME(3) NULL;

-- AddForeignKey
ALTER TABLE `anamnesis` ADD CONSTRAINT `anamnesis_athleteId_fkey` FOREIGN KEY (`athleteId`) REFERENCES `athlete`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
