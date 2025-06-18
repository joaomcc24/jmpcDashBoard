/*
  Warnings:

  - You are about to drop the column `periodoGarantia` on the `Servico` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Servico" DROP COLUMN "periodoGarantia",
ADD COLUMN     "dataCompra" TIMESTAMP(3),
ADD COLUMN     "documentoCompra" TEXT;

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "role" TEXT NOT NULL DEFAULT 'admin',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
