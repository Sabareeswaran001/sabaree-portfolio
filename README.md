# Sabareeswaran Kolanjiyappan — Portfolio

A responsive, dark editorial portfolio built with Next.js App Router, TypeScript, Tailwind CSS v4, and Lucide icons. Content is centralized in `site-data.ts`.

## Run locally

Requirements: Node.js 20.9+ and npm.

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Production build

```bash
npm run build
npm run start
```

## Deploy to Vercel

1. Create a Git repository and push this folder to GitHub.
2. Sign in to Vercel and choose **Add New → Project**.
3. Import the GitHub repository. Vercel should detect Next.js automatically.
4. Keep the default build command (`npm run build`) and output settings.
5. Deploy.

CLI option:

```bash
npm i -g vercel
vercel
vercel --prod
```

## Before publishing

- Replace `https://example.com` in `app/layout.tsx` with the final production domain.
- Add verified GitHub repository links to projects in `site-data.ts` when available. None were supplied in the resume, so the site does not invent any.
- Add a real CV download only if you want to publish one.
- Verify phone and email links and the LinkedIn URL.
- Check the site at mobile, tablet, and desktop widths.
- Run `npm run build` before deploying.
- Confirm page title, description, social preview, keyboard navigation, contrast, and reduced-motion behavior.

## Content notes

Projects, education, skills, volunteering, event coordination, certifications, and contact information are based on the provided resume. The website does not claim paid work experience or fabricate repository/demo links.
