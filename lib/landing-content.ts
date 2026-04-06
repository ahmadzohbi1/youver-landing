export type FeatureIconItem = {
  iconSrc: string;
  title: string;
};

export const featureIconItems: FeatureIconItem[] = [
  { iconSrc: "/stars.svg", title: "Infinite replies" },
  { iconSrc: "/network.svg", title: "Visual Builder" },
  { iconSrc: "/control.svg", title: "Settings" },
  { iconSrc: "/support.svg", title: "Segmentation" },
  { iconSrc: "/connections.svg", title: "Multi-agent" },
];

export type HowItWorksCard = {
  iconSrc: string;
  title: string;
  description: string;
};

export const howItWorksCards: HowItWorksCard[] = [
  {
    iconSrc: "/stars.svg",
    title: "AI-Powered",
    description:
      "Intelligent responses trained on your business so every reply feels on-brand.",
  },
  {
    iconSrc: "/rocket.svg",
    title: "Instant Studio",
    description:
      "Launch flows and templates in minutes with a guided, no-code setup.",
  },
  {
    iconSrc: "/linked.svg",
    title: "Smart Routing",
    description: "Assign chats to the right human agent at the right time.",
  },
  {
    iconSrc: "/stock.svg",
    title: "Live Analytics",
    description: "Track response times, volume, and conversion in real time.",
  },
];

export type HowItWorksStep = {
  step: number;
  title: string;
  description: string;
  badgeClass: string;
};

export const howItWorksSteps: HowItWorksStep[] = [
  {
    step: 1,
    title: "Connect Meta API",
    description:
      "Authorize your WhatsApp Business account via our secure official integration in one click.",
    badgeClass:
      "emerald-gradient flex items-center justify-center text-xl font-bold text-white",
  },
  {
    step: 2,
    title: "Build with Visual Builder",
    description:
      "Drag and drop responses, buttons, and catalogs to create your perfect automated flow.",
    badgeClass:
      "flex items-center justify-center bg-surface-container-high text-xl font-bold",
  },
  {
    step: 3,
    title: "Automate & Grow",
    description:
      "Turn on the AI and watch your engagement soar while you focus on high-value business tasks.",
    badgeClass:
      "flex items-center justify-center bg-surface-container-high text-xl font-bold",
  },
];

export type UseCaseItem = {
  title: string;
  description: string;
  imageAlt: string;
};

export const useCases: UseCaseItem[] = [
  {
    title: "E-commerce & Retail",
    description:
      "Recover abandoned carts, send shipping updates, and sell directly through WhatsApp catalogs.",
    imageAlt: "chic minimalist clothing store interior",
  },
  {
    title: "Clinics & Services",
    description:
      "Automate appointment bookings, send reminders, and answer common health or service FAQs instantly.",
    imageAlt: "clean modern dental clinic reception area",
  },
  {
    title: "Professional Bookings",
    description:
      "Handle reservations, share menus and availability, and confirm appointments without a phone tag.",
    imageAlt: "professional services booking",
  },
];

export type PricingPlan = {
  id: string;
  name: string;
  price: string;
  period: string;
  description: string;
  features: { text: string; included: boolean }[];
  ctaLabel: string;
  ctaClass: string;
  cardClass: string;
  badge?: string;
};

export const pricingPlans: PricingPlan[] = [
  {
    id: "starter",
    name: "Starter",
    price: "$29",
    period: "/mo",
    description: "Perfect for small shops starting with automation.",
    features: [
      { text: "500 conversations/mo", included: true },
      { text: "Visual Bot Builder", included: true },
      { text: "2 Human Agents", included: true },
      { text: "Advanced AI Training", included: false },
    ],
    ctaLabel: "Choose Starter",
    ctaClass:
      "w-full py-3 rounded-lg font-bold border border-primary text-primary hover:bg-primary/5 transition-colors",
    cardClass:
      "bg-surface-container-lowest p-8 rounded-xl border border-outline-variant/10 flex flex-col",
  },
  {
    id: "growth",
    name: "Growth",
    price: "$79",
    period: "/mo",
    description: "For businesses scaling their sales operations.",
    features: [
      { text: "2,500 conversations/mo", included: true },
      { text: "Full Catalog Integration", included: true },
      { text: "10 Human Agents", included: true },
      { text: "Custom AI Training", included: true },
    ],
    ctaLabel: "Choose Growth",
    ctaClass:
      "w-full py-4 rounded-lg font-bold emerald-gradient text-white shadow-lg shadow-primary/20 hover:scale-95 transition-transform",
    cardClass:
      "bg-surface-container-lowest p-8 rounded-xl border-2 border-primary relative shadow-xl shadow-primary/5 flex flex-col transform md:scale-105 z-10",
    badge: "Most Popular",
  },
  {
    id: "pro",
    name: "Pro",
    price: "$149",
    period: "/mo",
    description: "Enterprise features for high-volume support teams.",
    features: [
      { text: "Unlimited conversations", included: true },
      { text: "Advanced CRM Sync", included: true },
      { text: "Unlimited Human Agents", included: true },
      { text: "Dedicated Account Manager", included: true },
    ],
    ctaLabel: "Choose Pro",
    ctaClass:
      "w-full py-3 rounded-lg font-bold border border-primary text-primary hover:bg-primary/5 transition-colors",
    cardClass:
      "bg-surface-container-lowest p-8 rounded-xl border border-outline-variant/10 flex flex-col",
  },
];

export type FaqItem = {
  question: string;
  answer: string;
  defaultOpen?: boolean;
};

export const faqItems: FaqItem[] = [
  {
    question: "Do I need a separate phone number for Youver?",
    answer:
      "Yes, we recommend using a clean phone number that isn't currently associated with a personal WhatsApp account. This ensures a smooth integration with the official Meta Cloud API.",
    defaultOpen: true,
  },
  {
    question: "How does the AI setup work?",
    answer:
      "Our AI setup is visual and no-code. You simply feed it your business documentation or common FAQs, and our engine trains a custom LLM to handle your customer queries naturally.",
  },
  {
    question: "Is Youver an official Meta Partner?",
    answer:
      "Yes, Youver utilizes the official Meta WhatsApp Business Cloud API. Your account is safe, secure, and compliant with all of Meta's terms of service.",
  },
  {
    question: "Can I transition from bot to human agent?",
    answer:
      'Absolutely. You can set rules for "Human Handoff" whenever the bot can\'t answer a question or when a customer specifically requests to speak with a person.',
  },
];
