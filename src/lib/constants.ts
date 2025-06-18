// Estados padronizados dos serviços
export const SERVICE_STATES = {
  PENDING: "pendente",
  IN_PROGRESS: "em_progresso",
  WAITING_PART: "aguarda_peca",
  COMPLETED: "concluido",
  BRAND_RESPONSE: "resposta_marca",
} as const

export type ServiceState = (typeof SERVICE_STATES)[keyof typeof SERVICE_STATES]

// Labels para exibição
export const SERVICE_STATE_LABELS = {
  [SERVICE_STATES.PENDING]: "Pendente",
  [SERVICE_STATES.IN_PROGRESS]: "Em Progresso",
  [SERVICE_STATES.WAITING_PART]: "Aguarda Peça",
  [SERVICE_STATES.COMPLETED]: "Concluído",
  [SERVICE_STATES.BRAND_RESPONSE]: "Resposta da Marca",
} as const

// Cores para badges
export const SERVICE_STATE_COLORS = {
  [SERVICE_STATES.PENDING]: "bg-yellow-100 text-yellow-800",
  [SERVICE_STATES.IN_PROGRESS]: "bg-blue-100 text-blue-800",
  [SERVICE_STATES.WAITING_PART]: "bg-orange-100 text-orange-800",
  [SERVICE_STATES.COMPLETED]: "bg-green-100 text-green-800",
  [SERVICE_STATES.BRAND_RESPONSE]: "bg-purple-100 text-purple-800",
} as const
