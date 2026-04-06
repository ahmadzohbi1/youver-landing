import { HeroRemakeBackdrop } from "@/components/ui/hero-remake-backdrop";
import { HeroPhoneMockup } from "@/components/landing/widgets/hero-phone-mockup";

export function HeroSection() {
  return (
    <section className="relative flex min-h-[90vh] items-center overflow-hidden">
      <div className="absolute top-0 right-0 -z-10 h-full w-1/2 origin-top-right -skew-x-12 bg-primary/5" />
      <div className="absolute bottom-0 left-0 -z-10 h-64 w-64 rounded-full bg-primary/10 blur-[120px]" />
      <div className="absolute top-1/4 right-1/4 -z-10 h-96 w-96 rounded-full bg-secondary-container/20 blur-[150px]" />
      <div className="mx-auto w-full max-w-7xl px-6 py-12 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="relative z-10 space-y-8 lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-outline-variant/30 bg-white px-4 py-2 text-sm font-bold text-primary shadow-sm">
              <span className="flex h-2 w-2 animate-pulse rounded-full bg-primary" />
              Next-Gen AI Automation
            </div>
            <h1 className="font-headline text-6xl leading-[1.05] font-extrabold tracking-tight text-on-surface lg:text-8xl">
              Automate your WhatsApp Business.{" "}
              <span className="relative inline-block text-primary">
                Reply instantly.
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  fill="none"
                  height="8"
                  viewBox="0 0 400 8"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden
                >
                  <path
                    d="M2 5.5C50 2 150 2 398 5.5"
                    stroke="#25d366"
                    strokeLinecap="round"
                    strokeWidth="4"
                  />
                </svg>
              </span>
            </h1>
            <p className="max-w-xl text-xl leading-relaxed text-on-surface-variant">
              Send catalogs, build visual bots, and never miss a customer again.
              Scale your conversations with futuristic AI that sounds remarkably
              human.
            </p>
            <div className="flex flex-col gap-5 sm:flex-row">
              <button
                type="button"
                className="emerald-gradient text-on-primary rounded-2xl px-10 py-5 text-lg font-bold shadow-2xl shadow-primary/30 transition-all hover:translate-y-[-2px] active:scale-95"
              >
                Start Free Trial
              </button>
              <button
                type="button"
                className="rounded-2xl border border-outline-variant/30 bg-white px-10 py-5 text-lg font-bold text-on-surface shadow-sm transition-all hover:bg-surface-container-low"
              >
                Book a Demo
              </button>
            </div>
            <div className="flex items-center gap-6 pt-4">
              <div className="flex -space-x-3">
                <div
                  className="h-12 w-12 overflow-hidden rounded-full border-4 border-background bg-surface-container-high shadow-lg"
                  data-alt="user portrait 1"
                />
                <div
                  className="h-12 w-12 overflow-hidden rounded-full border-4 border-background bg-surface-container-high shadow-lg"
                  data-alt="user portrait 2"
                />
                <div
                  className="h-12 w-12 overflow-hidden rounded-full border-4 border-background bg-surface-container-high shadow-lg"
                  data-alt="user portrait 3"
                />
              </div>
              <div className="text-sm">
                <p className="font-bold text-on-surface">
                  Join 2,400+ businesses
                </p>
                <p className="text-on-surface-variant">
                  Growing 40% faster with Youver
                </p>
              </div>
            </div>
          </div>
          <div className="relative lg:col-span-5">
            <HeroRemakeBackdrop />
            <HeroPhoneMockup />
            <div className="absolute top-1/2 left-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 opacity-60 blur-[120px]" />
          </div>
        </div>
      </div>
    </section>
  );
}
