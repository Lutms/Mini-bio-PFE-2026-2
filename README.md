# Lucas Tenório — Mini Bio

Site pessoal de uma página feito em **React + Next.js (App Router)**, com uma seção "mini bio" no estilo cartão, uma foto de perfil.

## Estrutura


- **`app/page.js`** é o ponto de entrada da rota e apenas monta `<Profile />`.
- **`components/Profile.js`** monta a página inteira.
- **`components/MiniBio.js`** é o componente reutilizável do cartão — recebe `photoSrc`, `photoAlt`, `name` e `phrase` como props, então dá pra reaproveitar em outra página ou trocar o conteúdo sem mexer no layout.

## Como rodar

```bash
npm install
npm run dev
```

Abra [http://localhost:xxxx].

Para gerar a build de produção:

```bash
npm run build
npm run start
```
## Stack

- [Next.js 14](https://nextjs.org/) (App Router)
- CSS Modules
- Fontes do Google Fonts carregadas via `<link>` em `app/layout.js` (Bebas Neue + IBM Plex Mono)
