import Image from "next/image";

import { pricingPlans } from "@/lib/landing-content";

export function PricingSection() {
  return (
    <section className="bg-surface-container-low py-24" id="pricing">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <h2 className="font-headline mb-4 text-3xl font-bold">
            Simple, transparent pricing
          </h2>
          <p className="text-on-surface-variant">
            Choose the plan that fits your growth stage. No hidden fees.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {pricingPlans.map((plan) => (
            <div key={plan.id} className={plan.cardClass}>
              {plan.badge ? (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full px-4 py-1 text-xs font-bold tracking-widest text-white uppercase emerald-gradient">
                  {plan.badge}
                </div>
              ) : null}
              <div className="mb-8">
                <h3 className="mb-2 text-xl font-bold">{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-on-surface">
                    {plan.price}
                  </span>
                  <span className="text-on-surface-variant">{plan.period}</span>
                </div>
                <p className="mt-4 text-sm text-on-surface-variant">
                  {plan.description}
                </p>
              </div>
              <ul className="mb-10 flex-1 space-y-4">
                {plan.features.map((f) => (
                  <li
                    key={f.text}
                    className={`flex items-center gap-3 text-sm ${!f.included ? "opacity-40" : ""}`}
                  >
                    {f.included ? (
                      <Image
                        src="/checked.svg"
                        alt=""
                        width={21}
                        height={21}
                        className="h-[21px] w-[21px] shrink-0"
                        unoptimized
                      />
                    ) : (
                      <Image
                        src="/crossed.svg"
                        alt=""
                        width={20}
                        height={20}
                        className="h-5 w-5 shrink-0"
                        unoptimized
                      />
                    )}
                    {f.text}
                  </li>
                ))}
              </ul>
              <button type="button" className={plan.ctaClass}>
                {plan.ctaLabel}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
