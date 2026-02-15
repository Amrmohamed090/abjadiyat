import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { Icon } from './Icon';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: string;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
  children: ReactNode;
}

export function Button({
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'right',
  fullWidth = false,
  children,
  className = '',
  ...props
}: ButtonProps) {
  const baseClasses =
    'inline-flex items-center justify-center gap-2 font-bold font-body rounded-xl transition-all transform hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none';

  const variantClasses = {
    primary:
      'bg-primary hover:bg-primary-dark text-secondary shadow-gold hover:shadow-gold-lg border border-transparent',
    secondary:
      'bg-secondary hover:bg-secondary-light text-primary border border-primary/30 shadow-md',
    outline:
      'bg-transparent border-2 border-secondary/20 text-secondary hover:border-secondary hover:bg-secondary hover:text-white',
    ghost: 'bg-transparent text-secondary hover:bg-secondary/5',
  };

  const sizeClasses = {
    sm: 'py-2 px-4 text-sm',
    md: 'py-3 px-6 text-base',
    lg: 'py-4 px-8 text-lg',
  };

  const widthClass = fullWidth ? 'w-full' : '';

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${widthClass} ${className}`}
      {...props}
    >
      {icon && iconPosition === 'left' && <Icon name={icon} className="text-inherit" />}
      {children}
      {icon && iconPosition === 'right' && (
        <Icon name={icon} className="text-inherit rotate-180" />
      )}
    </button>
  );
}
