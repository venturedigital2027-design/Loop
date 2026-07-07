import type { LoopGame } from '@/lib/loops';
import { ActionBar } from './ActionBar';
import { LoopMiniGame } from './LoopMiniGame';

export function LoopCard({ loop }: { loop: LoopGame }) {
  return (
    <section className={`relative h-[100svh] w-full snap-start overflow-hidden bg-gradient-to-br ${loop.gradient}`}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_15%,rgba(255,255,255,0.26),transparent_28%),radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.16),transparent_30%)]" />
      <div className="absolute left-4 top-5 z-20 flex items-center gap-2 rounded-full bg-black/25 px-4 py-2 text-sm font-black tracking-tight backdrop-blur-md ring-1 ring-white/10">
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-black">∞</span>
        Loop
      </div>
      <ActionBar loop={loop} />
      <div className="relative z-10 flex h-full flex-col justify-center px-5 pb-44 pt-20">
        <div className="mb-5 max-w-[78%]">
          <div className="mb-2 inline-flex rounded-full bg-white/15 px-3 py-1 text-xs font-bold uppercase tracking-[0.25em] text-white/80 ring-1 ring-white/10">
            {loop.challenge}
          </div>
          <h1 className="text-5xl font-black leading-none tracking-tight drop-shadow-xl">{loop.title}</h1>
        </div>
        <LoopMiniGame loop={loop} />
      </div>
      <div className="absolute bottom-20 left-4 right-20 z-20">
        <div className="text-sm font-bold text-white/90">{loop.creator}</div>
        <p className="mt-1 line-clamp-2 text-sm leading-5 text-white/85">{loop.description}</p>
        <div className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/60">{loop.timeLimit}s loop</div>
      </div>
    </section>
  );
}
