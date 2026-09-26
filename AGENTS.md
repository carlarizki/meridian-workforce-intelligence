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

- Plus Jakarta Sans is heading/number-only on the Workforce view: apply `font-jakarta` to the page title in TopHeader (only when activeTab === 'workforce'), section h2 headings, the "Live Operational Pulse" label, and big KPI numbers. All body text, tables, small labels, and other modules stay on the default sans stack so typography reinforces page hierarchy.
- Hybrid typography is global, not per-view: `src/styles.css` maps `h1, h2, h3` and `.text-3xl`+ sizes to `--font-jakarta`, everything else stays on the system sans stack. Set fonts there, not with per-component classes, so every module keeps the same heading/body split.
