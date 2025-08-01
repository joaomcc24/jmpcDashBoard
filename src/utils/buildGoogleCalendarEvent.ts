// prisma doesnt include relations on type
import { Prisma } from "@prisma/client"

type ServicoWithRelations = Prisma.ServicoGetPayload<{
  include: {
    cliente: true,
    equipamento: true
  }
}>

export const buildGoogleCalendarEvent = (servico: ServicoWithRelations, durationMinutes: number = 60, scheduledDate?: Date) => {
  const cliente = servico.cliente;
  const equipamento = servico.equipamento;

  if (!cliente || !equipamento) throw new Error('Cliente ou equipamento não carregado');

  const startDate = scheduledDate || 
                   (servico.dataReparacao ? new Date(servico.dataReparacao) : new Date(Date.now() + 24 * 60 * 60 * 1000));
  const endDate = new Date(startDate.getTime() + durationMinutes * 60000);

  return {
    summary: `${servico.tipo} ${equipamento.marca} ${equipamento.modelo} (${cliente.nome})`,
    location: cliente.morada ?? '',
    description: `
Tipo: ${servico.tipo}
Problema: ${servico.descricaoProblema}
Cliente: ${cliente.nome}
Contacto: ${cliente.telefone ?? 'N/A'}
Técnico: ${servico.tecnico ?? 'A atribuir'}
Garantia: ${servico.garantia ? 'Sim' : 'Não'}
Valor: ${servico.valorTotal ?? 'Por definir'}€
Notas: ${servico.notas ?? 'Nenhuma'}
Equipamento: ${equipamento.tipo} - ${equipamento.marca} ${equipamento.modelo}
    `.trim(),
    start: {
      dateTime: startDate.toISOString(),
      timeZone: 'Europe/Lisbon',
    },
    end: {
      dateTime: endDate.toISOString(),
      timeZone: 'Europe/Lisbon',
    },
  };
};