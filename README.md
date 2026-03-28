# RN Digital Midia - Landing Page (V2)

Landing page em React + Vite + Tailwind CSS.

## Requisitos

- Node.js 20+
- npm

## Rodar localmente

1. Instale dependencias:
   `npm install`
2. Inicie o projeto:
   `npm run dev`
3. Acesse:
   `http://localhost:3000`
4. Rotas:
   `http://localhost:3000/` (v2 principal)
   `http://localhost:3000/v1/` (landing v1)

## Scripts

- `npm run dev`: desenvolvimento
- `npm run build`: build de producao
- `npm run preview`: preview local do build
- `npm run lint`: checagem de tipos TypeScript

## Estrutura principal

- `src/App.tsx`: landing page principal e rotas
- `src/pages/PrivacyPolicy.tsx`: pagina de privacidade
- `src/pages/TermsOfUse.tsx`: pagina de termos
- `src/index.css`: tema e estilos globais

## Deploy automatico na Hostinger

Este repositorio ja inclui workflow em:
`.github/workflows/deploy-hostinger.yml`

Ele faz:
1. `npm ci`
2. `npm run build`
3. Upload da pasta `dist` para `/public_html` via FTP

### Secrets necessarias no GitHub

No GitHub, em `Settings > Secrets and variables > Actions`, crie:

- `HOSTINGER_FTP_HOST` (ex: `ftp.seudominio.com`)
- `HOSTINGER_FTP_USERNAME`
- `HOSTINGER_FTP_PASSWORD`

### Importante

- O `.htaccess` ja esta em `public/.htaccess` e sera copiado para `dist/.htaccess`.
- Isso garante:
  - `/` abre v2
  - `/v1/` abre v1
  - rotas React (ex: `/privacidade`) funcionam com fallback para `index.html`.
