import { BrandLogo } from "@/components/ui/brand-logo";

const navLinks = [
  { href: "#features", label: "Features" },
  { href: "#pricing", label: "Pricing" },
  { href: "#use-cases", label: "Use Cases" },
  { href: "#", label: "Resources" },
];

export function TopNav() {
  return (
    <nav className="fixed top-0 z-50 w-full bg-white/80 shadow-[0_8px_32px_0_rgba(28,27,27,0.04)] backdrop-blur-xl dark:bg-neutral-900/80">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-8">
          <a
            className="flex items-center gap-2 text-2xl font-bold tracking-tighter text-[#1c1b1b] dark:text-[#fcf9f8]"
            href="#"
          >
            <BrandLogo textClassName="text-2xl font-bold tracking-tighter text-[#1c1b1b] dark:text-[#fcf9f8]" />
          </a>
          <div className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href + link.label}
                className="font-headline font-bold tracking-tight text-[#1c1b1b] opacity-70 transition-colors hover:text-[#006d2f] dark:text-[#fcf9f8]"
                href={link.href}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button
            type="button"
            className="hidden font-bold text-[#1c1b1b] opacity-70 transition-colors hover:text-[#006d2f] sm:block dark:text-[#fcf9f8]"
          >
            Login
          </button>
          <button
            type="button"
            className="emerald-gradient text-on-primary rounded-lg px-6 py-2.5 font-bold shadow-lg shadow-primary/20 transition-transform duration-200 hover:scale-95"
          >
            Start Free Trial
          </button>
        </div>
      </div>
    </nav>
  );
}
