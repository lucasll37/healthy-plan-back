/*
  Warnings:

  - You are about to drop the `body-valuation` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `body-valuation` DROP FOREIGN KEY `body-valuation_athleteId_fkey`;

-- DropTable
DROP TABLE `body-valuation`;

-- CreateTable
CREATE TABLE `body-evaluation` (
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

-- AddForeignKey
ALTER TABLE `body-evaluation` ADD CONSTRAINT `body-evaluation_athleteId_fkey` FOREIGN KEY (`athleteId`) REFERENCES `athlete`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
