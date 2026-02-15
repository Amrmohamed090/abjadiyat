import type { InputHTMLAttributes } from 'react';
import { forwardRef, useState } from 'react';
import { Icon } from './Icon';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  icon?: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, icon, error, type = 'text', className = '', ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false);
    const isPassword = type === 'password';
    const inputType = isPassword && showPassword ? 'text' : type;

    return (
      <div className="islamic-input-wrapper group">
        <div className="relative">
          {icon && (
            <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
              <Icon
                name={icon}
                className="text-gray-400 group-focus-within:text-accent-gold transition-colors"
              />
            </div>
          )}
          <input
            ref={ref}
            type={inputType}
            placeholder={label}
            className={`block w-full ${icon ? 'pr-12' : 'pr-4'} ${isPassword ? 'pl-12' : 'pl-4'} py-4 bg-white border border-[#e5dcc5] rounded-xl text-secondary placeholder-transparent focus:outline-none focus:ring-2 focus:ring-accent-gold/50 focus:border-accent-gold transition-all shadow-sm ${error ? 'border-red-500' : ''} ${className}`}
            {...props}
          />
          <label
            className={`absolute ${icon ? 'right-12' : 'right-4'} top-4 text-gray-400 text-base transition-all duration-200 pointer-events-none origin-right bg-white px-1`}
          >
            {label}
          </label>
          {isPassword && (
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 left-0 pl-4 flex items-center text-gray-400 hover:text-secondary transition-colors"
            >
              <Icon name={showPassword ? 'visibility_off' : 'visibility'} className="text-xl" />
            </button>
          )}
        </div>
        {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
      </div>
    );
  }
);

Input.displayName = 'Input';
