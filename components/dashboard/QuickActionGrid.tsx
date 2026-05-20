'use client';

import Link from 'next/link';
import { BookMarked, Mic, Zap, Grid, BarChart3 } from 'lucide-react';

const actions = [
  {
    href: '/lessons',
    label: 'Lessons',
    icon: BookMarked,
    color: 'bg-blue-500',
  },
  {
    href: '/practice/shadowing',
    label: 'Shadowing',
    icon: Mic,
    color: 'bg-purple-500',
  },
  {
    href: '/vocabulary',
    label: 'Vocabulary',
    icon: Zap,
    color: 'bg-emerald-500',
  },
  {
    href: '/flashcards',
    label: 'Flashcards',
    icon: Grid,
    color: 'bg-rose-500',
  },
  {
    href: '/quiz',
    label: 'Quiz',
    icon: BarChart3,
    color: 'bg-amber-500',
  },
];

export function QuickActionGrid() {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
      {actions.map((action) => {
        const Icon = action.icon;
        return (
          <Link key={action.href} href={action.href}>
            <button className={`w-full rounded-2xl ${action.color} p-6 text-white shadow-soft-md transition-all hover:shadow-soft active:scale-95`}>
              <Icon className="mx-auto mb-2 h-8 w-8" />
              <p className="text-sm font-medium">{action.label}</p>
            </button>
          </Link>
        );
      })}
    </div>
  );
}
