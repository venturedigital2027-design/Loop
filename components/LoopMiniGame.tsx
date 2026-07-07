'use client';

import { useMemo, useState } from 'react';
import type { LoopGame } from '@/lib/loops';

export function LoopMiniGame({ loop }: { loop: LoopGame }) {
  const [score, setScore] = useState(0);
  const [activeTile, setActiveTile] = useState(0);
  const [lane, setLane] = useState(1);

  const instruction = useMemo(() => {
    if (loop.template === 'dodge-blocks') return 'Move lanes to dodge';
    if (loop.template === 'tap-jump') return 'Tap to jump';
    if (loop.template === 'memory-match') return 'Repeat the bright tile';
    if (loop.template === 'reaction-timer') return 'Tap when ready';
    return 'Tap the target';
  }, [loop.template]);

  if (loop.template === 'memory-match') {
    return (
      <div className="rounded-3xl border border-white/15 bg-black/25 p-4 backdrop-blur-md">
        <div className="grid grid-cols-2 gap-3">
          {[0, 1, 2, 3].map((tile) => (
            <button
              key={tile}
              onClick={() => {
                if (tile === activeTile) setScore((value) => value + 1);
                setActiveTile(Math.floor(Math.random() * 4));
              }}
              className={`aspect-square rounded-3xl border border-white/15 transition active:scale-95 ${tile === activeTile ? loop.accent : 'bg-white/10'}`}
              aria-label={`Tile ${tile + 1}`}
            />
          ))}
        </div>
        <div className="mt-4 text-center text-sm text-white/75">{instruction}</div>
        <div className="text-center text-4xl font-black">{score}</div>
      </div>
    );
  }

  if (loop.template === 'dodge-blocks') {
    return (
      <div className="rounded-3xl border border-white/15 bg-black/25 p-4 backdrop-blur-md">
        <div className="mb-4 grid h-56 grid-cols-3 items-end gap-3 rounded-3xl bg-black/25 p-4">
          {[0, 1, 2].map((item) => (
            <div key={item} className="flex h-full items-end justify-center">
              <div className={item === lane ? `h-14 w-14 rounded-2xl ${loop.accent}` : 'h-24 w-8 rounded-xl bg-white/20'} />
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-3">
          <button onClick={() => { setLane(Math.max(0, lane - 1)); setScore((value) => value + 1); }} className="rounded-2xl bg-white/15 py-3 font-bold active:scale-95">Left</button>
          <button onClick={() => { setLane(Math.min(2, lane + 1)); setScore((value) => value + 1); }} className="rounded-2xl bg-white/15 py-3 font-bold active:scale-95">Right</button>
        </div>
        <div className="mt-3 text-center text-sm text-white/75">{instruction} · Score {score}</div>
      </div>
    );
  }

  return (
    <div className="rounded-3xl border border-white/15 bg-black/25 p-5 text-center backdrop-blur-md">
      <button
        onClick={() => setScore((value) => value + 1)}
        className={`mx-auto flex h-36 w-36 items-center justify-center rounded-full ${loop.accent} text-6xl font-black text-black shadow-2xl transition active:scale-90`}
        aria-label="Play loop"
      >
        {loop.emoji}
      </button>
      <div className="mt-5 text-sm font-semibold uppercase tracking-[0.28em] text-white/70">{instruction}</div>
      <div className="mt-2 text-5xl font-black">{score}</div>
      <div className="mt-1 text-xs text-white/60">First version · local score only</div>
    </div>
  );
}
