export type ServiceStatus = 
  | "pendente"
  | "em_progresso"
  | "aguarda_peca"
  | "concluido" 
  | "resposta_marca";

export function getStatusColor(status: ServiceStatus | string): string {
  switch (status) {
    case "pendente": 
      return "bg-yellow-100 text-yellow-800";
    case "em_progresso": 
      return "bg-blue-100 text-blue-800";
    case "aguarda_peca": 
      return "bg-orange-100 text-orange-800";
    case "concluido": 
      return "bg-green-100 text-green-800";
    case "resposta_marca": 
      return "bg-purple-100 text-purple-800";
    default: 
      return "bg-gray-100 text-gray-800";
  }
}

export function getStatusLabel(status: ServiceStatus | string): string {
  switch (status) {
    case "pendente": 
      return "Pendente";
    case "em_progresso": 
      return "Em Progresso";
    case "aguarda_peca": 
      return "Aguarda Peça";
    case "concluido": 
      return "Concluído";
    case "resposta_marca": 
      return "Resposta Marca";
    default: 
      return status;
  }
}