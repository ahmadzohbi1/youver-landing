import Image from "next/image";

import { BrandLogo } from "@/components/ui/brand-logo";

const companyLinks = [
  { href: "#", label: "About Us" },
  { href: "#", label: "Careers" },
  { href: "#", label: "Blog" },
];

const productLinks = [
  { href: "#features", label: "Features" },
  { href: "#use-cases", label: "Use Cases" },
  { href: "#pricing", label: "Pricing" },
  { href: "#", label: "Resources" },
];

const legalLinks = [
  { href: "#", label: "Privacy Policy" },
  { href: "#", label: "Terms of Service" },
  { href: "#", label: "Security" },
];

export function SiteFooter() {
  return (
    <footer className="w-full rounded-t-[1.5rem] bg-[#f6f3f2] dark:bg-neutral-950">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-8 py-16 md:grid-cols-4">
        <div className="col-span-2 space-y-6 md:col-span-1">
          <a
            className="flex items-center gap-2 text-xl font-bold text-[#1c1b1b] dark:text-[#fcf9f8]"
            href="#"
          >
            <BrandLogo textClassName="text-xl font-bold text-[#1c1b1b] dark:text-[#fcf9f8]" />
          </a>
          <p className="text-sm leading-relaxed text-on-surface/60">
            The world&apos;s leading WhatsApp automation platform for high-growth
            modern brands.
          </p>
          <div className="flex gap-4">
            <a
              className="flex h-10 w-10 items-center justify-center rounded-full bg-surface-container-high transition-transform hover:scale-110"
              href="#"
              aria-label="Website"
            >
              <Image
                src="/globe.svg"
                alt=""
                width={20}
                height={20}
                className="h-5 w-5"
                unoptimized
              />
            </a>
            <a
              className="flex h-10 w-10 items-center justify-center rounded-full bg-surface-container-high transition-transform hover:scale-110"
              href="#"
              aria-label="Email"
            >
              <Image
                src="/email.svg"
                alt=""
                width={24}
                height={24}
                className="h-6 w-6"
                unoptimized
              />
            </a>
          </div>
        </div>
        <div className="space-y-4">
          <h4 className="font-bold text-[#1c1b1b] dark:text-[#fcf9f8]">
            Company
          </h4>
          <ul className="space-y-2 text-sm text-on-surface/60">
            {companyLinks.map((link) => (
              <li key={link.label}>
                <a
                  className="transition-all hover:text-[#006d2f]"
                  href={link.href}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-4">
          <h4 className="font-bold text-[#1c1b1b] dark:text-[#fcf9f8]">
            Product
          </h4>
          <ul className="space-y-2 text-sm text-on-surface/60">
            {productLinks.map((link) => (
              <li key={link.label}>
                <a
                  className="transition-all hover:text-[#006d2f]"
                  href={link.href}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-4">
          <h4 className="font-bold text-[#1c1b1b] dark:text-[#fcf9f8]">
            Legal
          </h4>
          <ul className="space-y-2 text-sm text-on-surface/60">
            {legalLinks.map((link) => (
              <li key={link.label}>
                <a
                  className="transition-all hover:text-[#006d2f]"
                  href={link.href}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mx-auto max-w-7xl border-t border-outline-variant/10 px-8 py-8 text-center md:text-left">
        <p className="text-sm text-on-surface/60">
          © 2024 Youver Automation. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
