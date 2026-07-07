import { Gamepad2, Wand2 } from 'lucide-react';

export function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 bg-black/70 px-6 pb-5 pt-3 backdrop-blur-xl">
      <div className="mx-auto grid max-w-md grid-cols-2 gap-4">
        <button className="flex items-center justify-center gap-2 rounded-2xl bg-white px-4 py-3 text-sm font-black text-black">
          <Gamepad2 size={18} />
          Scroll
        </button>
        <button className="flex items-center justify-center gap-2 rounded-2xl bg-white/10 px-4 py-3 text-sm font-black text-white ring-1 ring-white/10">
          <Wand2 size={18} />
          Build
        </button>
      </div>
    </nav>
  );
}
