// src/components/ui/status-badge.tsx
import { ServiceStatus, getStatusColor, getStatusLabel } from "@/lib/status-utils";

interface StatusBadgeProps {
  status: ServiceStatus | string;
  className?: string;
  showLabel?: boolean;
}

export function StatusBadge({ 
  status, 
  className = "", 
  showLabel = true 
}: StatusBadgeProps) {
  return (
    <span 
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${getStatusColor(status)} ${className}`}
    >
      {showLabel ? getStatusLabel(status) : status}
    </span>
  );
}