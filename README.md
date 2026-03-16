# Resume Site

Personal resume site built with React, TypeScript, Vite, and MUI.

## Tech Stack

- React 19 + TypeScript
- Vite
- MUI
- ESLint 9

## Getting Started

```bash
npm install
npm run dev
```

## Available Scripts

- `npm run dev` - start local dev server
- `npm run build` - typecheck and build for production
- `npm run preview` - preview production build
- `npm run lint` - run lint checks
- `npm run deploy` - deploy `dist` to GitHub Pages

## Project Structure

- `src/App.tsx` - page layout and section rendering
- `src/data/resumeData.ts` - resume content and typed data model
- `src/App.css` - layout and section styling
- `src/index.css` - global resets/background styles

## Updating Content

Edit `src/data/resumeData.ts` to update:

- Hero details
- Contact links
- Experience history
- Projects
- Skills
- Education

No component changes are needed for normal content updates.
