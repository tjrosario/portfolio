<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Project rules

- Use Bun for everything. `bun.lock` is the only lockfile. Run `bun run lint`, `bunx tsc --noEmit`, and `bun run build` before opening a PR.
- Stay on TypeScript 6 until `typescript-eslint` supports 7, and keep `engines.node` at 24.x for Vercel.
- Content lives in `site.config.ts`, `data/experience.json`, and `data/resume.json`. Change `data/experience.json` only when the owner asks.
- Keep the README, including its project structure, in step with every change it describes.
- The resume must print on one page. Check a real PDF after changing `data/resume.json` or its print styles.
- Hold the site to WCAG 2.2 AA. Hide decorative text from assistive tech and test keyboard focus, reduced motion, and forced colors on UI changes.
- Looping animations must stop under the pause control and reduced motion. Entrance animations use `.anim-hidden`.
- Check color changes in every season with `?season=<id>`, in both themes.
- Comments are 1 or 2 lines and say what the code does now, never what it replaced.
- Commit messages are one conventional-commit line. Reasoning goes in the PR.
