# GOZAR CPA

Plataforma para gerenciar suas operações financeiras — inspirada no Bugado CPA.

## Tech Stack

- Vite + React 18 + TypeScript
- Tailwind CSS
- React Router v6
- Supabase (Auth + Backend)
- Zod (validação)

## Getting Started

### 1. Instalar dependências

```bash
npm install
```

### 2. Configurar Supabase

Crie um projeto em [supabase.com](https://supabase.com) e substitua as chaves em `src/lib/supabase.ts`:

```ts
const SUPABASE_URL = 'https://seu-projeto.supabase.co'
const SUPABASE_ANON_KEY = 'sua-chave-anon-aqui'
```

### 3. Habilitar Auth no Supabase

No painel do Supabase, em **Authentication > Providers**, ative **Email**.

### 4. Rodar

```bash
npm run dev
```

Acesse `http://localhost:3000`

### 5. Deploy (Vercel)

```bash
npm i -g vercel
vercel --prod
```

## Estrutura

```
src/
├── components/
│   ├── Logo.tsx
│   ├── Splash.tsx
│   ├── AppShell.tsx
│   └── ui/
│       ├── input.tsx
│       ├── label.tsx
│       ├── button.tsx
│       ├── tabs.tsx
│       └── toast.tsx
├── contexts/
│   └── AuthContext.tsx
├── lib/
│   └── supabase.ts
├── pages/
│   ├── AuthPage.tsx
│   ├── HomePage.tsx
│   └── Placeholder.tsx
└── App.tsx
```

## Próximos módulos

- Dashboard (em construção)
- Operações (cadastro de entradas/saídas)
- Lucro (cálculo automático)
- Fluxo de caixa
- Métodos de pagamento
- Fintechs
- Gastos mensais

## Créditos

@01_bugadinho66