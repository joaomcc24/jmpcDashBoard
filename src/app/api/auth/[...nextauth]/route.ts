import { NextRequest } from "next/server"
import { authOptions } from "@/lib/auth"

// Simple authentication endpoints
export async function GET(request: NextRequest) {
  return new Response(JSON.stringify({ message: "Auth endpoint" }), {
    status: 200,
    headers: { "Content-Type": "application/json" }
  })
}

export async function POST(request: NextRequest) {
  return new Response(JSON.stringify({ message: "Auth endpoint" }), {
    status: 200,
    headers: { "Content-Type": "application/json" }
  })
}
