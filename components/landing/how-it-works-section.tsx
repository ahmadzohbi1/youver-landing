import Image from "next/image";

import { howItWorksCards, howItWorksSteps } from "@/lib/landing-content";

export function HowItWorksSection() {
  return (
    <section className="overflow-hidden py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="relative order-2 lg:order-1">
            <div className="absolute -top-12 -left-12 h-64 w-64 rounded-full bg-secondary-fixed/20 blur-[100px]" />
            <div className="relative grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                {howItWorksCards.slice(0, 2).map((card) => (
                  <div
                    key={card.title}
                    className="rounded-xl border border-outline-variant/10 bg-surface-container-lowest p-6 shadow-lg"
                  >
                    <div className="mb-4 flex h-10 w-10 items-center justify-center">
                      <Image
                        src={card.iconSrc}
                        alt=""
                        width={40}
                        height={40}
                        className="h-10 w-10 object-contain"
                        unoptimized
                      />
                    </div>
                    <p className="mb-1 font-bold">{card.title}</p>
                    <p className="text-xs text-on-surface-variant">
                      {card.description}
                    </p>
                  </div>
                ))}
              </div>
              <div className="space-y-4">
                {howItWorksCards.slice(2, 4).map((card) => (
                  <div
                    key={card.title}
                    className="rounded-xl border border-outline-variant/10 bg-surface-container-lowest p-6 shadow-lg"
                  >
                    <div className="mb-4 flex h-10 w-10 items-center justify-center">
                      <Image
                        src={card.iconSrc}
                        alt=""
                        width={40}
                        height={40}
                        className="h-10 w-10 object-contain"
                        unoptimized
                      />
                    </div>
                    <p className="mb-1 font-bold">{card.title}</p>
                    <p className="text-xs text-on-surface-variant">
                      {card.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="order-1 space-y-10 lg:order-2">
            <h2 className="font-headline text-4xl font-bold">
              Go live in minutes, not days.
            </h2>
            <div className="space-y-8">
              {howItWorksSteps.map((step) => (
                <div key={step.step} className="flex gap-6">
                  <div
                    className={`h-12 w-12 flex-shrink-0 rounded-full ${step.badgeClass}`}
                  >
                    {step.step}
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-bold">{step.title}</h3>
                    <p className="text-on-surface-variant">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
