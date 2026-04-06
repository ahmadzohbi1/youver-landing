import Image from "next/image";

export function HeroPhoneMockup() {
  return (
    <div className="relative z-10 floating">
      <div className="relative mx-auto aspect-[9/19] w-[320px] overflow-hidden rounded-[3rem] border-[8px] border-neutral-800 bg-neutral-900 p-3 shadow-[0_50px_100px_-20px_rgba(0,109,47,0.3)]">
        <div className="flex h-full w-full flex-col overflow-hidden rounded-[2.2rem] bg-white">
          <div className="flex items-center gap-3 bg-[#075e54] p-5 pt-10">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-white">
              <Image
                src="/remake.svg"
                alt=""
                width={20}
                height={20}
                className="h-5 w-5"
                unoptimized
              />
            </div>
            <div className="flex-1">
              <p className="text-xs font-bold text-white">Youver AI Agent</p>
              <div className="flex items-center gap-1">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary-fixed" />
                <p className="text-[10px] text-white/70">Processing...</p>
              </div>
            </div>
          </div>
          <div className="flex-1 space-y-4 overflow-hidden bg-[#e5ddd5]/50 p-4">
            <div className="flex justify-end">
              <div className="max-w-[85%] rounded-xl rounded-tr-none bg-[#dcf8c6] px-3 py-2 text-[11px] shadow-sm">
                Can I see the new arrivals for the summer collection?
              </div>
            </div>
            <div className="flex justify-start">
              <div className="max-w-[85%] space-y-2 rounded-xl rounded-tl-none bg-white px-3 py-2 text-[11px] shadow-sm">
                <p>Of course! Here are our top 3 picks for you today:</p>
                <div className="grid grid-cols-2 gap-2">
                  <div
                    className="aspect-square overflow-hidden rounded-lg bg-surface-container-high"
                    data-alt="summer product preview"
                  />
                  <div
                    className="aspect-square overflow-hidden rounded-lg bg-surface-container-high"
                    data-alt="summer product preview 2"
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-start">
              <div className="rounded-xl border border-primary/20 bg-primary/5 px-3 py-2 text-[10px] font-bold italic text-primary">
                AI generated a 15% discount code for this user...
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="glass-card absolute -top-10 -right-10 z-20 hidden max-w-[180px] rounded-2xl p-6 shadow-2xl md:block">
        <div className="mb-2 flex items-center gap-2">
          <Image
            src="/stock.svg"
            alt=""
            width={24}
            height={24}
            className="h-6 w-6"
            unoptimized
          />
          <span className="text-xs font-bold">Real-time ROI</span>
        </div>
        <p className="text-2xl font-extrabold text-on-surface">+124%</p>
        <p className="text-[10px] text-on-surface-variant">
          Conversation volume increase this month
        </p>
      </div>
      <div className="glass-card absolute -left-16 bottom-10 z-20 hidden rounded-2xl border-primary/20 p-5 shadow-2xl md:block">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/20">
            <Image
              src="/control.svg"
              alt=""
              width={20}
              height={20}
              className="h-5 w-5"
              unoptimized
            />
          </div>
          <div>
            <p className="text-[10px] font-bold">Auto-Pilot Active</p>
            <p className="text-[9px] text-on-surface-variant">
              98% customer satisfaction
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
