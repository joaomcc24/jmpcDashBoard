-- Adicionar coluna NIF se não existir
ALTER TABLE "Cliente" ADD COLUMN IF NOT EXISTS "nif" TEXT;

-- Tornar a coluna marca obrigatória (se já não for)
-- Primeiro, atualizar registos existentes que possam ter marca vazia
UPDATE "Equipamento" SET "marca" = 'N/A' WHERE "marca" IS NULL OR "marca" = '';

-- Depois tornar a coluna NOT NULL
ALTER TABLE "Equipamento" ALTER COLUMN "marca" SET NOT NULL;

-- Adicionar constraint unique no email se não existir
DO $$ 
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM pg_constraint 
        WHERE conname = 'Cliente_email_key'
    ) THEN
        ALTER TABLE "Cliente" ADD CONSTRAINT "Cliente_email_key" UNIQUE ("email");
    END IF;
END $$;
