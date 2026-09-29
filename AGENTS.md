<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Estrutura

- Seções da landing page ficam em `src/components/site/` e são compostas em `src/routes/index.tsx` — mantém a rota enxuta e as seções reutilizáveis.
- Tema claro/escuro via classe `dark` no `<html>`, com script inline no `__root.tsx` para evitar flash — a preferência fica no localStorage (`rodrigo-theme`).
