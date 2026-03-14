# Type & Lint Check

Run TypeScript and ESLint checks for the Beat Frontend project and report all errors.

## Instructions

Run the following commands in sequence from the project root (`f:/beatsoftware/beat-frontend`):

```bash
npx tsc --noEmit
npm run lint
```

Report the results clearly:
- List all TypeScript errors with file path, line number, and message
- List all ESLint errors/warnings with file path, line number, rule name, and message
- If both pass cleanly, confirm "No TypeScript or lint errors found"

After reporting, offer to fix any errors found. When fixing:
1. Fix TypeScript errors first (they often resolve lint errors too)
2. Never use `// @ts-ignore` or `// eslint-disable` to suppress errors — fix the root cause
3. Never use `any` type unless it's genuinely unavoidable and document why
4. Re-run checks after fixing to confirm clean
