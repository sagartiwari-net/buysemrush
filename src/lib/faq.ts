import { SITE } from './site';
import { COUPON } from './content';

export type FaqItem = {
  question: string;
  answer: string;
};

/** Homepage FAQ — Semrush group buy + ToolsMandi (archive themes, rewritten). */
export const SITE_FAQ: FaqItem[] = [
  {
    question: 'What is Semrush group buy on BuySemrush?',
    answer:
      'BuySemrush is a Semrush group buy front door. You pick a Master Plan, then finish signup and payment on ToolsMandi. One membership unlocks Semrush, Ahrefs, and 35+ SEO, AI, and creative tools at a fraction of official prices.',
  },
  {
    question: 'How do I get access after I buy?',
    answer: `Click Semrush Sign Up (or Get Access), create your account on ToolsMandi, and complete checkout. Then use ${SITE.loginUrl.replace('https://', '')} to open Semrush and the rest of your toolkit. Access is usually available right after payment confirms.`,
  },
  {
    question: 'Why is the Master Plan so much cheaper than Semrush Guru?',
    answer:
      'Official Semrush Guru can run hundreds per month. Our Semrush group buy Master Plan shares infrastructure costs across members, so freelancers, students, and small teams get research access starting at $29.99/mo — without buying every tool separately.',
  },
  {
    question: 'Which tools are included?',
    answer:
      'Every Master Plan includes Semrush group buy access plus Ahrefs, ChatGPT, Canva, Jasper, Helium 10, Grammarly, Envato Elements, and dozens more. Browse the full list in the Tools section on this page — no per-tool checkout.',
  },
  {
    question: `How do I use coupon ${COUPON.code}?`,
    answer: `At ToolsMandi checkout, enter coupon code ${COUPON.code} for ${COUPON.label}. If the field does not appear, refresh checkout or contact ToolsMandi support with your order email.`,
  },
  {
    question: 'Can I share my account or use a VPN / proxy?',
    answer:
      'No. One membership is for one user. Sharing your ToolsMandi login or accessing tools through proxies, VPNs, or remote desktops can trigger fair-use limits and may lead to suspension.',
  },
  {
    question: 'Does it work on Mac, Windows, and mobile?',
    answer:
      'Yes. Access is browser-based via ToolsMandi, so it works on Windows, Mac, and mobile browsers. Use the same login on the device you work from — keep it to one active session for stability.',
  },
  {
    question: 'What if a tool is down or not working?',
    answer:
      'Tell support with your ToolsMandi email and which tool failed. We prioritize Semrush and primary SEO tools. If a primary tool stays unavailable for an extended period after payment, refund or credit options may apply per ToolsMandi policy.',
  },
  {
    question: 'Do you offer refunds?',
    answer:
      'Refunds are handled on ToolsMandi when access was not delivered after payment, or when a primary tool stays broken for a prolonged period. Change of mind after access is granted usually does not qualify. Contact support before requesting a refund.',
  },
];

export function faqJsonLd(items: FaqItem[] = SITE_FAQ) {
  return {
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}
