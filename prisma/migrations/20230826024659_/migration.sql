/*
  Warnings:

  - A unique constraint covering the columns `[addressId]` on the table `athlete` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `addressInfo` to the `address` table without a default value. This is not possible if the table is not empty.
  - Added the required column `addressNumber` to the `address` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cep` to the `address` table without a default value. This is not possible if the table is not empty.
  - Added the required column `city` to the `address` table without a default value. This is not possible if the table is not empty.
  - Added the required column `state` to the `address` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `address` table without a default value. This is not possible if the table is not empty.
  - Added the required column `addressId` to the `athlete` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `address` ADD COLUMN `addressInfo` VARCHAR(191) NOT NULL,
    ADD COLUMN `addressNumber` VARCHAR(191) NOT NULL,
    ADD COLUMN `cep` VARCHAR(191) NOT NULL,
    ADD COLUMN `city` VARCHAR(191) NOT NULL,
    ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `state` VARCHAR(191) NOT NULL,
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `athlete` ADD COLUMN `addressId` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `athlete_addressId_key` ON `athlete`(`addressId`);

-- AddForeignKey
ALTER TABLE `athlete` ADD CONSTRAINT `athlete_addressId_fkey` FOREIGN KEY (`addressId`) REFERENCES `address`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
