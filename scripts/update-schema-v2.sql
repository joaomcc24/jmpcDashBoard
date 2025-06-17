-- Adicionar coluna clienteId se não existir
ALTER TABLE "Cliente" ADD COLUMN IF NOT EXISTS "clienteId" TEXT DEFAULT '';

-- Adicionar coluna servicoId se não existir  
ALTER TABLE "Servico" ADD COLUMN IF NOT EXISTS "servicoId" TEXT DEFAULT '';

-- Tornar telefone único
ALTER TABLE "Cliente" ADD CONSTRAINT "Cliente_telefone_key" UNIQUE ("telefone");

-- Tornar NIF único (apenas se não for null)
CREATE UNIQUE INDEX IF NOT EXISTS "Cliente_nif_key" ON "Cliente"("nif") WHERE "nif" IS NOT NULL;

-- Tornar clienteId único
ALTER TABLE "Cliente" ADD CONSTRAINT "Cliente_clienteId_key" UNIQUE ("clienteId");

-- Tornar servicoId único
ALTER TABLE "Servico" ADD CONSTRAINT "Servico_servicoId_key" UNIQUE ("servicoId");

-- Atualizar clientes existentes com IDs incrementais
DO $$
DECLARE
    cliente_record RECORD;
    counter INTEGER := 1;
BEGIN
    FOR cliente_record IN 
        SELECT id FROM "Cliente" 
        WHERE "clienteId" = '' OR "clienteId" IS NULL 
        ORDER BY id
    LOOP
        UPDATE "Cliente" 
        SET "clienteId" = 'CLT-' || LPAD(counter::TEXT, 3, '0')
        WHERE id = cliente_record.id;
        counter := counter + 1;
    END LOOP;
END $$;

-- Atualizar serviços existentes com IDs incrementais
DO $$
DECLARE
    servico_record RECORD;
    counter INTEGER := 1;
BEGIN
    FOR servico_record IN 
        SELECT id FROM "Servico" 
        WHERE "servicoId" = '' OR "servicoId" IS NULL 
        ORDER BY "createdAt"
    LOOP
        UPDATE "Servico" 
        SET "servicoId" = 'SRV-' || LPAD(counter::TEXT, 3, '0')
        WHERE id = servico_record.id;
        counter := counter + 1;
    END LOOP;
END $$;
