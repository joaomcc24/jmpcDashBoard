export type ServiceStatus = 
  | "pendente"
  | "aguarda_peca"
  | "concluido" 
  | "resposta_marca";

export function getStatusColor(status: ServiceStatus | string): string {
  switch (status) {
    case "pendente": 
      return "bg-yellow-100 text-yellow-800";
    case "aguarda_peca": 
      return "bg-blue-100 text-blue-800";
    case "concluido": 
      return "bg-green-100 text-green-800";
    case "resposta_marca": 
      return "bg-orange-300 text-orange-900";
    default: 
      return "bg-gray-100 text-gray-800";
  }
}

export function getStatusLabel(status: ServiceStatus | string): string {
  switch (status) {
    case "pendente": 
      return "Pendente";
    case "concluido": 
      return "Concluído";
    case "aguarda_peca": 
      return "Aguarda Peças";
    case "resposta_marca": 
      return "Resposta Marca";
    default: 
      return status;
  }
}