import { SITE } from './site';

/** Master Plan — ToolsMandi checkout (retail Semrush Guru ~$499/mo baseline). */
export const MASTER_PLANS = [
  {
    id: 'monthly',
    label: 'Monthly',
    badge: null as string | null,
    price: '$29.99',
    period: '/mo',
    retail: '$499',
    note: 'Billed monthly · cancel-friendly',
    featured: false,
    href: SITE.signupUrl,
  },
  {
    id: 'six-month',
    label: '6 Month',
    badge: 'Most popular',
    price: '$150',
    period: '',
    retail: '$2,994',
    note: 'Best balance of savings + flexibility',
    featured: true,
    href: SITE.signupUrl,
  },
  {
    id: 'yearly',
    label: '1 Year',
    badge: 'Best value',
    price: '$220',
    period: '',
    retail: '$5,988',
    note: 'Lowest effective monthly cost',
    featured: false,
    href: SITE.signupUrl,
  },
] as const;

export const PLAN_INCLUDES = [
  'Semrush group buy access (Guru-style research)',
  'Ahrefs + 35+ SEO, AI & creative tools',
  'Unlimited keyword research & domain overview*',
  'Backlink analysis & competitor insights*',
  'One-click access via ToolsMandi login',
  'Works on desktop & mobile browsers',
] as const;

/**
 * Ranking-proven themes from Wayback (May 2024 / Oct 2025), rewritten.
 * Keep keyword density natural — not archive clone.
 */
export const SEO_BLURBS = {
  whatIsSemrush:
    'Semrush is an all-in-one SEO and digital marketing platform for keyword research, competitor analysis, site audits, backlink monitoring, and content planning. Marketers and agencies use it to grow organic traffic and paid search performance.',
  whatIsGroupBuy:
    'A Semrush group buy lets multiple users share access costs so you get premium Semrush tools at a fraction of the official subscription. BuySemrush Master Plan pairs Semrush with Ahrefs and 35+ tools — checkout finishes on ToolsMandi.',
  whyCheap:
    'Official Semrush Guru runs hundreds per month. Our Semrush group buy Master Plan starts at $29.99/mo so freelancers, students, and small teams can run serious SEO research without enterprise invoices.',
} as const;

export const COUPON = {
  code: 'BUYSEMRUSH',
  label: '20% OFF',
} as const;

/** Included in Master Plan — no per-tool prices; CTAs → ToolsMandi signup. */
export const TOOLS = [
  { name: 'Semrush', logo: '/images/tools/semrush.webp' },
  { name: 'Ahrefs', logo: '/images/tools/ahrefs.webp' },
  { name: 'ChatGPT', logo: '/images/tools/chatgpt.webp' },
  { name: 'Canva', logo: '/images/tools/canva.webp' },
  { name: 'Jasper', logo: '/images/tools/jasper.webp' },
  { name: 'Envato Elements', logo: '/images/tools/envato-elements.webp' },
  { name: 'UberSuggest', logo: '/images/tools/ubersuggest.webp' },
  { name: 'Grammarly', logo: '/images/tools/grammarly.webp' },
  { name: 'Helium 10 Learning', logo: '/images/tools/helium-10.webp' },
  { name: 'Helium 10 Platinum', logo: '/images/tools/helium-10.webp' },
  { name: 'WordHero', logo: '/images/tools/wordhero.webp' },
  { name: 'Placeit', logo: '/images/tools/placeit.svg' },
  { name: 'Wordtune', logo: '/images/tools/wordtune.webp' },
  { name: 'Flaticon', logo: '/images/tools/flaticon.svg' },
  { name: 'QuillBot', logo: '/images/tools/quillbot.webp' },
  { name: 'Leonardo.Ai', logo: '/images/tools/leonardo-ai.svg' },
  { name: 'Jungle Scout', logo: '/images/tools/jungle-scout.webp' },
  { name: 'Epidemic Sound', logo: '/images/tools/epidemic-sound.webp' },
  { name: 'Coursera', logo: '/images/tools/coursera.webp' },
  { name: 'NicheScraper', logo: '/images/tools/nichescraper.webp' },
  { name: 'Keepa', logo: '/images/tools/keepa.svg' },
  { name: 'SellerAmp', logo: '/images/tools/selleramp.svg' },
  { name: 'CopySpace.ai', logo: '/images/tools/copyspace-ai.svg' },
  { name: 'scite_', logo: '/images/tools/scite.svg' },
  { name: 'AnswerThePublic', logo: '/images/tools/answerthepublic.webp' },
  { name: 'Closers Copy', logo: '/images/tools/closers-copy.webp' },
  { name: 'CopyWritely', logo: '/images/tools/copywritely.svg' },
  { name: 'Piktochart', logo: '/images/tools/piktochart.svg' },
  { name: 'Creattie', logo: '/images/tools/creattie.svg' },
  { name: 'glorify', logo: '/images/tools/glorify.svg' },
  { name: 'Prezi', logo: '/images/tools/prezi.webp' },
  { name: 'MINVO', logo: '/images/tools/minvo.svg' },
  { name: 'seobility', logo: '/images/tools/seobility.svg' },
  { name: 'SeoSiteCheckup', logo: '/images/tools/seositecheckup.svg' },
  { name: 'woorank', logo: '/images/tools/woorank.webp' },
  { name: 'storybase', logo: '/images/tools/storybase.svg' },
  { name: 'SEO Tester Online', logo: '/images/tools/seo-tester-online.svg' },
] as const;
