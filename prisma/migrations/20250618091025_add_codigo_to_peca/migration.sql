/*
  Warnings:

  - A unique constraint covering the columns `[clienteId]` on the table `Cliente` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[telefone]` on the table `Cliente` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `Cliente` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[nif]` on the table `Cliente` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[servicoId]` on the table `Servico` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `codigo` to the `Peca` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Cliente" ADD COLUMN     "clienteId" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "nif" TEXT;

-- AlterTable
ALTER TABLE "Peca" ADD COLUMN     "codigo" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Servico" ADD COLUMN     "servicoId" TEXT NOT NULL DEFAULT '',
ALTER COLUMN "id" SET DEFAULT '';

-- CreateIndex
CREATE UNIQUE INDEX "Cliente_clienteId_key" ON "Cliente"("clienteId");

-- CreateIndex
CREATE UNIQUE INDEX "Cliente_telefone_key" ON "Cliente"("telefone");

-- CreateIndex
CREATE UNIQUE INDEX "Cliente_email_key" ON "Cliente"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Cliente_nif_key" ON "Cliente"("nif");

-- CreateIndex
CREATE UNIQUE INDEX "Servico_servicoId_key" ON "Servico"("servicoId");
