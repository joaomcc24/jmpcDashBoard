-- Script para resetar as sequências de ID quando se apagam todos os registos

-- Reset da sequência dos clientes
SELECT setval(pg_get_serial_sequence('Cliente', 'id'), COALESCE(MAX(id), 0) + 1, false) FROM "Cliente";

-- Reset da sequência dos equipamentos  
SELECT setval(pg_get_serial_sequence('Equipamento', 'id'), COALESCE(MAX(id), 0) + 1, false) FROM "Equipamento";

-- Reset da sequência dos serviços (se usar serial)
-- SELECT setval(pg_get_serial_sequence('Servico', 'id'), COALESCE(MAX(id), 0) + 1, false) FROM "Servico";

-- Verificar as sequências atuais
SELECT 
    schemaname,
    tablename,
    attname,
    seq_scan 
FROM pg_sequence_parameters('Cliente_id_seq'::regclass);
