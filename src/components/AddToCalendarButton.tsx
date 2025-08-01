'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Calendar } from 'lucide-react';
import { useToast } from '@/components/ui/toast';
import { CalendarEventDialog } from '@/components/ui/calendar-event-dialog';

interface AddToCalendarButtonProps {
  servicoId: string;
  servicoTitle?: string;
}

export function AddToCalendarButton({ servicoId, servicoTitle }: AddToCalendarButtonProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const { showToast, ToastContainer } = useToast();

  const handleScheduleEvent = async (dateTime: Date, durationMinutes: number) => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/calendar', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          servicoId, 
          durationMinutes,
          customDateTime: dateTime.toISOString()
        })
      });

      const data = await response.json();
      
      if (!response.ok) {
        showToast('Erro ao preparar evento: ' + data.error, 'error');
        return;
      }

      try {
        const { createCalendarEvent } = await import('@/utils/googleApi');
        
        const calendarResponse = await createCalendarEvent(data.event);

        if (calendarResponse.status === 200 || calendarResponse.status === 201) {
          showToast('Evento adicionado ao Google Calendar com sucesso!', 'success');
        } else {
          throw new Error('Erro ao criar evento no Google Calendar');
        }
      } catch (calendarError: unknown) {
        console.error('Erro ao adicionar ao Google Calendar:', calendarError);
        
        let errorMessage = 'Erro ao adicionar evento ao Google Calendar. Verifique as permissões.';
        
        if (calendarError instanceof Error) {
          if (calendarError.message.includes('popup_blocked_by_browser')) {
            errorMessage = 'Popup bloqueado pelo browser. Por favor, ative popups para este site.';
          } else if (calendarError.message.includes('denied access')) {
            errorMessage = 'Acesso negado ao Google Calendar. Por favor, conceda as permissões necessárias.';
          } else if (calendarError.message.includes('server error')) {
            errorMessage = 'Erro no servidor Google. Tente novamente em alguns momentos.';
          }
        }
        
        showToast(errorMessage, 'error');
      }
    } catch (error) {
      console.error('Erro geral:', error);
      showToast('Erro ao comunicar com o servidor', 'error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Button 
        onClick={() => setShowDialog(true)} 
        disabled={isLoading}
        variant="outline"
        className="gap-2"
      >
        <Calendar className="h-4 w-4" />
        {isLoading ? 'A processar...' : 'Adicionar ao Calendário'}
      </Button>
      
      <CalendarEventDialog
        isOpen={showDialog}
        onClose={() => setShowDialog(false)}
        onConfirm={handleScheduleEvent}
        title={servicoTitle || `Serviço #${servicoId}`}
      />
      
      <ToastContainer />
    </>
  );
}
