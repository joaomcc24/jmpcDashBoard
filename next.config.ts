import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Configurações para produção
  serverExternalPackages: ['@prisma/client', 'bcryptjs'],
  // Permitir imagens de domínios externos se necessário
  images: {
    domains: []
  }
};

export default nextConfig;
