import Image from "next/image";

import { featureIconItems } from "@/lib/landing-content";

export function FeaturesSection() {
  return (
    <section className="bg-surface-container-low py-24" id="features">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <h2 className="font-headline mb-4 text-3xl font-bold text-on-surface">
            Everything you need to scale
          </h2>
          <p className="mx-auto max-w-2xl text-on-surface-variant">
            Powerful features designed to turn WhatsApp into your most profitable
            sales channel.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
          {featureIconItems.map((item) => (
            <div
              key={item.title}
              className="group flex flex-col items-center rounded-xl bg-surface-container-lowest p-6 text-center transition-all hover:shadow-xl hover:shadow-primary/5"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center transition-transform group-hover:scale-110">
                <Image
                  src={item.iconSrc}
                  alt=""
                  width={56}
                  height={56}
                  className="h-14 w-14 object-contain"
                  unoptimized
                />
              </div>
              <h3 className="text-sm font-bold">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
