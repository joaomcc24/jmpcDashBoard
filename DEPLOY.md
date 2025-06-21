# Configuração de Deploy na Vercel

## Variáveis de Ambiente Necessárias

Você precisa configurar as seguintes variáveis de ambiente na Vercel:

### 1. DATABASE_URL
```
DATABASE_URL="sua_database_url_aqui"
```

### 2. NEXTAUTH_SECRET
```
NEXTAUTH_SECRET="jmpc-super-secret-key-2025-production-ready"
```

### 3. NEXTAUTH_URL
```
NEXTAUTH_URL="https://seu-app.vercel.app"
```

## Como Configurar na Vercel

1. Acesse seu projeto na Vercel
2. Vá para **Settings** > **Environment Variables**
3. Adicione cada uma das variáveis acima
4. Faça um novo deploy ou execute um redeploy

## Credenciais de Login

- **Email**: admin@jmpc.pt  
- **Senha**: admin123456

## Comandos de Build

O build já está configurado no `package.json`:
```json
{
  "build": "prisma generate && next build && ts"
}
```

## Problemas Comuns

### 1. Erro "Auth endpoint"
- Verifique se as variáveis `NEXTAUTH_SECRET` e `NEXTAUTH_URL` estão configuradas
- O `NEXTAUTH_URL` deve ser o URL exato do seu site na Vercel

### 2. Erro de Database
- Verifique se a `DATABASE_URL` está configurada corretamente
- Certifique-se que o Prisma Accelerate está ativo

### 3. Erro de Build
- Execute `npm run build` localmente para verificar se há erros
- Verifique se todas as dependências estão instaladas
