/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `Brand` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "products" ADD COLUMN     "name" TEXT NOT NULL DEFAULT 'parota';

-- CreateIndex
CREATE UNIQUE INDEX "Brand_name_key" ON "Brand"("name");
