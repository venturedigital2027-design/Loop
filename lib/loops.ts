export type LoopTemplate = 'tap-target' | 'dodge-blocks' | 'tap-jump' | 'memory-match' | 'reaction-timer';

export type LoopGame = {
  id: string;
  title: string;
  creator: string;
  description: string;
  template: LoopTemplate;
  challenge: string;
  timeLimit: number;
  likes: string;
  comments: string;
  saves: string;
  gradient: string;
  accent: string;
  emoji: string;
};

export const seedLoops: LoopGame[] = [
  {
    id: 'laser-ninja',
    title: 'Laser Ninja',
    creator: '@looplabs',
    description: 'Jump neon lasers in a 20-second reflex loop.',
    template: 'tap-jump',
    challenge: 'Survive 20 seconds',
    timeLimit: 20,
    likes: '12.8K',
    comments: '842',
    saves: '2.1K',
    gradient: 'from-fuchsia-700 via-purple-900 to-black',
    accent: 'bg-fuchsia-400',
    emoji: 'N'
  },
  {
    id: 'pirate-coins',
    title: 'Pirate Coin Rush',
    creator: '@captainbyte',
    description: 'Tap the treasure before the ship gets away.',
    template: 'tap-target',
    challenge: 'Collect 10 coins',
    timeLimit: 15,
    likes: '9.4K',
    comments: '311',
    saves: '1.5K',
    gradient: 'from-amber-600 via-orange-800 to-black',
    accent: 'bg-amber-300',
    emoji: 'P'
  },
  {
    id: 'dragon-dodge',
    title: 'Dragon Dodge',
    creator: '@ember',
    description: 'Dodge fireballs with one-thumb left/right controls.',
    template: 'dodge-blocks',
    challenge: 'Dodge 12 fireballs',
    timeLimit: 25,
    likes: '22.1K',
    comments: '1.9K',
    saves: '4.8K',
    gradient: 'from-red-700 via-rose-950 to-black',
    accent: 'bg-red-400',
    emoji: 'D'
  },
  {
    id: 'math-blitz',
    title: 'Math Blitz',
    creator: '@brainpop',
    description: 'Quick answers. Wrong taps burn time.',
    template: 'reaction-timer',
    challenge: 'Beat 5 questions',
    timeLimit: 30,
    likes: '7.6K',
    comments: '204',
    saves: '980',
    gradient: 'from-blue-700 via-cyan-900 to-black',
    accent: 'bg-cyan-300',
    emoji: 'M'
  },
  {
    id: 'memory-pop',
    title: 'Memory Pop',
    creator: '@minimaker',
    description: 'Watch the pattern, then repeat it clean.',
    template: 'memory-match',
    challenge: 'Repeat 4 tiles',
    timeLimit: 20,
    likes: '5.1K',
    comments: '177',
    saves: '640',
    gradient: 'from-emerald-700 via-teal-950 to-black',
    accent: 'bg-emerald-300',
    emoji: 'B'
  }
];
