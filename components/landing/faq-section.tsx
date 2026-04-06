import { ChevronDown } from "@/components/ui/chevron-down";
import { faqItems } from "@/lib/landing-content";

export function FaqSection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="font-headline mb-12 text-center text-3xl font-bold">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqItems.map((item) => (
            <details
              key={item.question}
              className="group rounded-xl bg-surface-container-low"
              open={item.defaultOpen}
            >
              <summary className="flex cursor-pointer list-none items-center justify-between p-6 font-bold">
                {item.question}
                <ChevronDown className="text-on-surface-variant transition-transform group-open:rotate-180" />
              </summary>
              <div className="border-t border-outline-variant/10 p-6 pt-0 text-sm leading-relaxed text-on-surface-variant">
                {item.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
