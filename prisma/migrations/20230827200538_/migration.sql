-- CreateTable
CREATE TABLE `anamnesis` (
    `id` VARCHAR(191) NOT NULL,
    `athleteId` VARCHAR(191) NOT NULL,
    `isAlcoholic` BOOLEAN NOT NULL,
    `isSmoker` BOOLEAN NOT NULL,
    `sleepQuality` VARCHAR(191) NOT NULL,
    `PhysicalActivityHabits` VARCHAR(191) NOT NULL,
    `HydrationHabits` VARCHAR(191) NOT NULL,
    `EatingHabits` VARCHAR(191) NOT NULL,
    `AmountWater` DOUBLE NOT NULL,
    `UseFoodSupplement` VARCHAR(191) NOT NULL,
    `isAnemic` BOOLEAN NOT NULL,
    `isDiabetic` BOOLEAN NOT NULL,
    `systolicBloodPressure` INTEGER NOT NULL,
    `diastolicBloodPressure` INTEGER NOT NULL,
    `restingHeartRate` INTEGER NOT NULL,
    `heartProblems` VARCHAR(191) NULL,
    `allergies` VARCHAR(191) NULL,
    `otherDiseases` VARCHAR(191) NULL,
    `medicalTreatments` VARCHAR(191) NULL,
    `medicationUse` VARCHAR(191) NULL,
    `UseHealthDevice` VARCHAR(191) NULL,
    `haveAnxiety` BOOLEAN NOT NULL,
    `haveDepression` BOOLEAN NOT NULL,
    `haveBipolarDisorder` BOOLEAN NOT NULL,
    `haveObsessiveCompDisorder` BOOLEAN NOT NULL,
    `haveOtherDisorders` BOOLEAN NOT NULL,
    `additionalObservations` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `athlete` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `surname` VARCHAR(191) NOT NULL,
    `phone` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `avatar` VARCHAR(191) NULL,
    `sex` VARCHAR(191) NOT NULL,
    `observation` VARCHAR(191) NULL,
    `birthDate` DATETIME(3) NOT NULL,
    `trainerId` VARCHAR(191) NOT NULL,
    `addressId` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `athlete_email_key`(`email`),
    UNIQUE INDEX `athlete_addressId_key`(`addressId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `address` (
    `id` VARCHAR(191) NOT NULL,
    `addressInfo` VARCHAR(191) NOT NULL,
    `addressNumber` VARCHAR(191) NOT NULL,
    `city` VARCHAR(191) NOT NULL,
    `state` VARCHAR(191) NOT NULL,
    `cep` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `trainer` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `surname` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `phone` VARCHAR(191) NOT NULL,
    `avatar` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NULL,

    UNIQUE INDEX `trainer_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `body-valuation` (
    `id` VARCHAR(191) NOT NULL,
    `ageAtTheMoment` INTEGER NOT NULL,
    `fatMass_kg` DOUBLE NOT NULL,
    `leanMass_kg` DOUBLE NOT NULL,
    `weight_cm` DOUBLE NOT NULL,
    `height_kg` DOUBLE NOT NULL,
    `bodyMassIndex` DOUBLE NOT NULL,
    `bodyMassClass` VARCHAR(191) NOT NULL,
    `skeletalMass` DOUBLE NOT NULL,
    `bodyAge` DOUBLE NOT NULL,
    `basalMetabolicRate` INTEGER NOT NULL,
    `waistRatioHip` DOUBLE NOT NULL,
    `visceralFat` VARCHAR(191) NOT NULL,
    `neck_circ_cm` DOUBLE NOT NULL,
    `chest_circ_cm` DOUBLE NOT NULL,
    `rightForearm_circ_cm` DOUBLE NOT NULL,
    `leftForearm_circ_cm` DOUBLE NOT NULL,
    `rightArm_circ_cm` DOUBLE NOT NULL,
    `leftArm_circ_cm` DOUBLE NOT NULL,
    `waist_circ_cm` DOUBLE NOT NULL,
    `abdomen_circ_cm` DOUBLE NOT NULL,
    `hip_circ_cm` DOUBLE NOT NULL,
    `rightThigh_circ_cm` DOUBLE NOT NULL,
    `leftThigh_circ_cm` DOUBLE NOT NULL,
    `rightCalf_circ_cm` DOUBLE NOT NULL,
    `leftCalf_circ_cm` DOUBLE NOT NULL,
    `fatPercentage` DOUBLE NOT NULL,
    `athleteId` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `exercise` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `flex-evaluation` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `method-exercise` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `status-photo` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `target` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `training` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `training-evolution` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `anamnesis` ADD CONSTRAINT `anamnesis_athleteId_fkey` FOREIGN KEY (`athleteId`) REFERENCES `athlete`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `athlete` ADD CONSTRAINT `athlete_trainerId_fkey` FOREIGN KEY (`trainerId`) REFERENCES `trainer`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `athlete` ADD CONSTRAINT `athlete_addressId_fkey` FOREIGN KEY (`addressId`) REFERENCES `address`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `body-valuation` ADD CONSTRAINT `body-valuation_athleteId_fkey` FOREIGN KEY (`athleteId`) REFERENCES `athlete`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
