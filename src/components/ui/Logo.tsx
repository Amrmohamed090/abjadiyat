import { Link } from 'react-router-dom';
import { Icon } from './Icon';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  variant?: 'light' | 'dark';
}

export function Logo({ size = 'md', showText = true, variant = 'light' }: LogoProps) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
  };

  const iconSizes = {
    sm: 'text-xl',
    md: 'text-2xl',
    lg: 'text-3xl',
  };

  const textSizes = {
    sm: 'text-xl',
    md: 'text-2xl',
    lg: 'text-3xl',
  };

  const textColor = variant === 'light' ? 'text-secondary' : 'text-white';

  return (
    <Link to="/" className="flex items-center gap-3 group">
      <div
        className={`${sizeClasses[size]} rounded-lg bg-secondary flex items-center justify-center text-primary shadow-gold ring-1 ring-primary/30 transition-transform group-hover:scale-105`}
      >
        <Icon name="mosque" className={iconSizes[size]} />
      </div>
      {showText && (
        <span className={`font-display font-bold ${textSizes[size]} tracking-tight ${textColor}`}>
          أبجديات
        </span>
      )}
    </Link>
  );
}
