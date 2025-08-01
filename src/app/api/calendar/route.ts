import { NextRequest, NextResponse } from 'next/server';
import { buildGoogleCalendarEvent } from '@/utils/buildGoogleCalendarEvent';
import { prisma } from '@/lib/prisma';

export async function POST(request: NextRequest) {
  try {
    const { servicoId, durationMinutes = 60, customDateTime } = await request.json();

    const servico = await prisma.servico.findUnique({
      where: { id: servicoId },
      include: {
        cliente: true,
        equipamento: true
      }
    });

    if (!servico) {
      return NextResponse.json({ error: 'Serviço não encontrado' }, { status: 404 });
    }

    const customDate = customDateTime ? new Date(customDateTime) : undefined;
    const calendarEvent = buildGoogleCalendarEvent(servico, durationMinutes, customDate);

    return NextResponse.json({ event: calendarEvent });

  } catch (error) {
    console.error('Erro ao criar evento:', error);
    return NextResponse.json({ error: 'Erro interno' }, { status: 500 });
  }
}
