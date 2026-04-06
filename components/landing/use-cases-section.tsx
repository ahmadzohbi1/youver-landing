import { ArrowForward } from "@/components/ui/arrow-forward";
import { useCases } from "@/lib/landing-content";

export function UseCasesSection() {
  return (
    <section className="bg-surface py-24" id="use-cases">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <h2 className="font-headline mb-4 text-3xl font-bold">
            Built for every Industry
          </h2>
          <p className="mx-auto max-w-2xl text-on-surface-variant">
            Tailored automation solutions for your specific business needs.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {useCases.map((item) => (
            <div
              key={item.title}
              className="group rounded-xl border border-outline-variant/10 bg-surface-container-lowest p-8 shadow-sm transition-transform hover:translate-y-[-8px]"
            >
              <div
                className="relative mb-6 h-48 overflow-hidden rounded-lg"
                data-alt={item.imageAlt}
              >
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/50 to-transparent p-4">
                  <span className="font-bold text-white">{item.title}</span>
                </div>
              </div>
              <p className="mb-6 text-sm leading-relaxed text-on-surface-variant">
                {item.description}
              </p>
              <a
                className="inline-flex items-center gap-1 font-bold text-primary transition-all group-hover:gap-2"
                href="#"
              >
                Learn more{" "}
                <ArrowForward className="text-primary" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
