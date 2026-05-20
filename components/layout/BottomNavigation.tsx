'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import {
  Home,
  BookMarked,
  Mic,
  Zap,
  Grid,
  BarChart3,
} from 'lucide-react';

const navigation = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/lessons', label: 'Lessons', icon: BookMarked },
  { href: '/practice/shadowing', label: 'Shadowing', icon: Mic },
  { href: '/vocabulary', label: 'Vocabulary', icon: Zap },
  { href: '/flashcards', label: 'Flashcards', icon: Grid },
  { href: '/quiz', label: 'Quiz', icon: BarChart3 },
];

export function BottomNavigation() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 border-t border-slate-200 bg-white shadow-soft md:hidden">
      <div className="flex justify-around">
        {navigation.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href || pathname.startsWith(item.href + '/');

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'flex flex-1 flex-col items-center justify-center gap-1 px-2 py-4 text-xs font-medium transition-colors',
                isActive
                  ? 'text-blue-500'
                  : 'text-slate-500 hover:text-slate-700'
              )}
            >
              <Icon className="h-6 w-6" />
              <span className="hidden sm:inline">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
