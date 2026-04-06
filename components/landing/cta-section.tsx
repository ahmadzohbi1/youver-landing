import Image from "next/image";

export function CtaSection() {
  return (
    <section className="px-6 py-24">
      <div className="emerald-gradient relative mx-auto max-w-5xl overflow-hidden rounded-[2rem] p-12 text-center text-white shadow-2xl shadow-primary/30 lg:p-20">
        <div className="absolute top-0 right-0 p-8 opacity-[0.12]">
          <Image
            src="/chat.svg"
            alt=""
            width={200}
            height={200}
            className="h-[200px] w-[200px] object-contain brightness-0 invert"
            unoptimized
          />
        </div>
        <div className="relative z-10 space-y-8">
          <h2 className="font-headline text-4xl leading-tight font-bold lg:text-5xl">
            Ready to automate your WhatsApp?
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-white/80">
            Start your 14-day free trial today. No credit card required. Set up
            in under 5 minutes.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <button
              type="button"
              className="rounded-xl bg-white px-8 py-4 text-lg font-bold text-primary shadow-xl transition-transform hover:scale-95"
            >
              Start Free Trial Now
            </button>
            <button
              type="button"
              className="rounded-xl border border-white/20 bg-primary-container/20 px-8 py-4 text-lg font-bold text-white backdrop-blur-md transition-colors hover:bg-primary-container/30"
            >
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
