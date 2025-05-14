import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { type LucideIcon } from 'lucide-react'

interface StatCardProps {
  title: string
  value: string | number
  icon: LucideIcon
  change?: {
    value: string
    positive: boolean
  }
}

export function StatCard({ title, value, icon: Icon, change }: StatCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <Icon className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {change && (
          <p className={`text-xs ${change.positive ? "text-green-500" : "text-red-500"}`}>
            {change.value} desde o mês passado
          </p>
        )}
      </CardContent>
    </Card>
  )
}