'use client';

import { cn } from '@/lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function Card({ className, children, ...props }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-2xl bg-white p-6 shadow-soft-md transition-shadow hover:shadow-soft-md',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardHeader({ className, children }: CardProps) {
  return (
    <div className={cn('mb-4 flex flex-col space-y-2', className)}>
      {children}
    </div>
  );
}

export function CardTitle({
  className,
  children,
}: CardProps) {
  return (
    <h2 className={cn('text-xl font-bold text-slate-900', className)}>
      {children}
    </h2>
  );
}

export function CardDescription({
  className,
  children,
}: CardProps) {
  return (
    <p className={cn('text-sm text-slate-500', className)}>
      {children}
    </p>
  );
}

export function CardContent({ className, children }: CardProps) {
  return <div className={cn('space-y-4', className)}>{children}</div>;
}

export function CardFooter({ className, children }: CardProps) {
  return (
    <div className={cn('mt-6 flex flex-col gap-2', className)}>
      {children}
    </div>
  );
}
