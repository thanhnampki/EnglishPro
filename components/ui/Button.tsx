'use client';

import { cn } from '@/lib/utils';
import { forwardRef, type ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', disabled, ...props }, ref) => {
    const baseStyles =
      'inline-flex items-center justify-center rounded-2xl font-medium transition-all duration-200 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

    const variants = {
      primary:
        'bg-blue-500 text-white hover:bg-blue-600 active:scale-95 shadow-soft',
      secondary:
        'bg-emerald-500 text-white hover:bg-emerald-600 active:scale-95 shadow-soft',
      outline:
        'border-2 border-slate-300 text-slate-900 hover:bg-slate-100 active:scale-95',
      ghost:
        'text-slate-700 hover:bg-slate-100 active:scale-95',
    };

    const sizes = {
      sm: 'px-4 py-2 text-sm min-h-10',
      md: 'px-6 py-3 text-base min-h-12',
      lg: 'px-8 py-4 text-lg min-h-44',
    };

    return (
      <button
        ref={ref}
        className={cn(
          baseStyles,
          variants[variant],
          sizes[size],
          className
        )}
        disabled={disabled}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';

export { Button };
