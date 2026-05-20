'use client';

import { cn } from '@/lib/utils';

interface PageContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function PageContainer({ children, className }: PageContainerProps) {
  return (
    <main className={cn(
      'mx-auto max-w-7xl px-6 py-8 md:px-8 md:py-10',
      'pb-28 md:pb-10',
      className
    )}>
      {children}
    </main>
  );
}
