import { Heart, MessageCircle, Share2, Bookmark, UserRound } from 'lucide-react';
import type { LoopGame } from '@/lib/loops';

function ActionButton({ icon, label, value }: { icon: React.ReactNode; label: string; value?: string }) {
  return (
    <button className="flex flex-col items-center gap-1 text-white drop-shadow-lg" aria-label={label}>
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black/35 backdrop-blur-md ring-1 ring-white/10">
        {icon}
      </div>
      {value ? <span className="text-xs font-bold">{value}</span> : null}
    </button>
  );
}

export function ActionBar({ loop }: { loop: LoopGame }) {
  return (
    <div className="absolute bottom-28 right-3 z-20 flex flex-col items-center gap-4">
      <ActionButton icon={<UserRound size={24} />} label="Creator profile" />
      <ActionButton icon={<Heart size={25} />} label="Like" value={loop.likes} />
      <ActionButton icon={<MessageCircle size={25} />} label="Comments" value={loop.comments} />
      <ActionButton icon={<Bookmark size={24} />} label="Save" value={loop.saves} />
      <ActionButton icon={<Share2 size={24} />} label="Share" />
    </div>
  );
}
