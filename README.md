# AccuNexum Website

Public marketing site for AccuNexum, LLC. Built with Next.js 15, TypeScript, and Tailwind CSS. Deployed to Vercel.

## Local Development

```bash
npm install
npm run dev
```

Site runs at http://localhost:3000.

## Project Structure

```
accunexum-website/
  src/
    app/
      layout.tsx       Root layout with metadata and fonts
      page.tsx         Single-page composition
      globals.css      Tailwind base styles
    components/
      Header.tsx       Sticky nav with anchor links
      Hero.tsx         Main banner
      Problem.tsx      Problem statement
      Framework.tsx    Seven domains grid
      Platform.tsx     Platform capabilities
      ForWhom.tsx      Three verticals
      Engagement.tsx   Engagement model
      About.tsx        Company about
      Contact.tsx      CTA section
      Footer.tsx       Footer
  tailwind.config.ts   Design system (navy + accent teal)
```

## Deployment to Vercel

### One-time setup

1. Push this repo to GitHub (any account)
2. Go to https://vercel.com and sign in with GitHub
3. Click "Add New Project" → import the `accunexum-website` repository
4. Accept the defaults (Vercel auto-detects Next.js)
5. Click Deploy

First deploy takes about 90 seconds. You get a URL like `accunexum-website.vercel.app`.

### Custom Domain (accunexum.com)

In Vercel:
1. Project Settings → Domains → Add Domain → `accunexum.com`
2. Vercel will show DNS records to configure

In GoDaddy DNS:
1. Sign in to GoDaddy → My Products → DNS
2. Add the records Vercel shows:
   - Type: `A`, Name: `@`, Value: `76.76.21.21`
   - Type: `CNAME`, Name: `www`, Value: `cname.vercel-dns.com`
3. DNS propagation: 5 minutes to 24 hours

Vercel handles SSL certificates automatically.

## Updating Content

Each section is its own component in `src/components/`. Edit the copy directly. Push to GitHub. Vercel auto-deploys on push to `main`.

## What to Update Before Launch

- [ ] Confirm `hello@accunexum.com` exists or substitute in `src/components/Contact.tsx`
- [ ] Update About copy with your city/state in `src/components/About.tsx`
- [ ] Add a founder section if desired
- [ ] Add Privacy Policy and Terms pages if required for your jurisdiction
- [ ] Replace placeholder OG image when ready (optional)

## License

AccuNexum, LLC. All rights reserved.
