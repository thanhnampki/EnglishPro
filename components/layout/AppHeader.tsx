'use client';

import Link from 'next/link';
import { BookOpen } from 'lucide-react';

export function AppHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white shadow-soft">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2">
          <BookOpen className="h-6 w-6 text-blue-500" />
          <span className="font-bold text-slate-900">English Learning</span>
        </Link>
      </div>
    </header>
  );
}
