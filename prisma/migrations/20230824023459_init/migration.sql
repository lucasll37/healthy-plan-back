/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `trainer` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `email` to the `trainer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `trainer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `passwordHash` to the `trainer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `surname` to the `trainer` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `trainer` ADD COLUMN `email` VARCHAR(191) NOT NULL,
    ADD COLUMN `name` VARCHAR(191) NOT NULL,
    ADD COLUMN `passwordHash` VARCHAR(191) NOT NULL,
    ADD COLUMN `surname` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `trainer_email_key` ON `trainer`(`email`);
