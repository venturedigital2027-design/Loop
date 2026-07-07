import { BottomNav } from '@/components/BottomNav';
import { LoopCard } from '@/components/LoopCard';
import { seedLoops } from '@/lib/loops';

export default function HomePage() {
  return (
    <main className="h-[100svh] overflow-y-scroll snap-y snap-mandatory bg-black text-white">
      {seedLoops.map((loop) => (
        <LoopCard key={loop.id} loop={loop} />
      ))}
      <BottomNav />
    </main>
  );
}
