-- CreateTable
CREATE TABLE `anamenesis` (
    `id` VARCHAR(191) NOT NULL,
    `athleteId` VARCHAR(191) NOT NULL,
    `trainnerId` VARCHAR(191) NOT NULL,
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
    `haveObsessiveCompulsiveDisorder` BOOLEAN NOT NULL,
    `haveOtherDisorders` BOOLEAN NOT NULL,
    `additionalObservations` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `athlete` (
    `id` VARCHAR(191) NOT NULL,
    `passwordHash` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `surname` VARCHAR(191) NOT NULL,
    `phone` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `sex` VARCHAR(191) NOT NULL,
    `addressId` VARCHAR(191) NOT NULL,
    `trainnerId` VARCHAR(191) NULL,
    `observation` VARCHAR(191) NULL,
    `birthDate` DATETIME(3) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NULL,

    UNIQUE INDEX `athlete_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `address` (
    `id` VARCHAR(191) NOT NULL,
    `address` VARCHAR(191) NOT NULL,
    `addressNumber` VARCHAR(191) NOT NULL,
    `city` VARCHAR(191) NOT NULL,
    `state` VARCHAR(191) NOT NULL,
    `cep` VARCHAR(191) NOT NULL,
    `athleteId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `address_athleteId_key`(`athleteId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `body-valuation` (
    `id` VARCHAR(191) NOT NULL,
    `athleteId` VARCHAR(191) NOT NULL,
    `trainnerId` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `trainer` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `surname` VARCHAR(191) NOT NULL,
    `passwordHash` VARCHAR(191) NOT NULL,
    `phone` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `exercise` (
    `id` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `flex-evaluation` (
    `id` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `method-exercise` (
    `id` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `status-photo` (
    `id` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `target` (
    `id` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `training` (
    `id` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `training-evolution` (
    `id` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `anamenesis` ADD CONSTRAINT `anamenesis_trainnerId_fkey` FOREIGN KEY (`trainnerId`) REFERENCES `trainer`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `anamenesis` ADD CONSTRAINT `anamenesis_athleteId_fkey` FOREIGN KEY (`athleteId`) REFERENCES `athlete`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `athlete` ADD CONSTRAINT `athlete_trainnerId_fkey` FOREIGN KEY (`trainnerId`) REFERENCES `trainer`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `address` ADD CONSTRAINT `address_athleteId_fkey` FOREIGN KEY (`athleteId`) REFERENCES `athlete`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `body-valuation` ADD CONSTRAINT `body-valuation_trainnerId_fkey` FOREIGN KEY (`trainnerId`) REFERENCES `trainer`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `body-valuation` ADD CONSTRAINT `body-valuation_athleteId_fkey` FOREIGN KEY (`athleteId`) REFERENCES `athlete`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
