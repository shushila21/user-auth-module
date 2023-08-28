/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { cn } from '@Utils/index';
import Icon from '@Components/common/Icon';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  hasIcon?: boolean;
  rightIconName?: string;
  leftIconName?: string;
  varientSize?: 'sm' | 'lg';
  iconStyle?: string;
  disabled?: boolean;
  onClick?: () => void;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type,
      hasIcon = false,
      rightIconName = '',
      leftIconName = 'idators',
      varientSize = 'lg',
      iconStyle = '',
      onClick,
      ...props
    },
    ref,
  ) => {
    const sizeVarient = {
      sm: 'naxatw-h-[2.25rem]',
      lg: 'naxatw-h-[2.75rem]',
    };
    if (hasIcon)
      return (
        <div
          className={cn(
            `group naxatw--[12px] focus-visible:naxatw-ring-ring naxatw-flex naxatw-w-full naxatw-items-center naxatw-justify-center naxatw-gap-[2px] naxatw-rounded-md naxatw-border naxatw-bg-white file:naxatw-border-0 file:naxatw-bg-transparent file:naxatw-text-sm file:naxatw-font-medium placeholder:naxatw-text-gray-400 focus-visible:naxatw-outline-none focus-visible:naxatw-ring-2 focus-visible:naxatw-ring-offset-2 disabled:naxatw-cursor-not-allowed disabled:naxatw-border-b-gray-600 disabled:naxatw-opacity-5`,
            className,
            sizeVarient[varientSize],
          )}
        >
          {rightIconName && (
            <Icon
              iconName={rightIconName}
              className={cn(
                'group-hover:naxatw-bg-teal-green-50 naxatw-px-[12px] naxatw-text-2xl',
                iconStyle,
              )}
              onClick={onClick}
            />
          )}
          <input
            type={type}
            className={cn(
              'naxatw-border-input naxatw-ring-offset-background hover:naxatw-bg-teal-green-50 naxatw-flex  naxatw-h-full naxatw-w-full naxatw-bg-transparent naxatw-pl-[8px] naxatw-text-sm naxatw-transition-all naxatw-duration-200 file:naxatw-border-0 file:naxatw-bg-transparent  file:naxatw-text-sm file:naxatw-font-medium placeholder:naxatw-text-gray-400 focus:naxatw-border-none focus:naxatw-outline-none disabled:naxatw-cursor-not-allowed disabled:naxatw-opacity-50',
            )}
            ref={ref}
            onClick={onClick}
            {...props}
          />
          {leftIconName && (
            <Icon
              iconName={leftIconName}
              className={cn('naxatw-px-[12px]  naxatw-text-2xl', iconStyle)}
              onClick={onClick}
            />
          )}
        </div>
      );

    return (
      <input
        type={type}
        className={cn(
          'naxatw-ring-offset-background focus-visible:naxatw-ring-ring hover:naxatw-bg-teal-green-50 naxatw-flex naxatw-h-10 naxatw-w-full naxatw-rounded-md naxatw-border naxatw-border-gray-400 naxatw-bg-transparent naxatw-bg-white naxatw-px-3 naxatw-py-2 naxatw-text-sm naxatw-transition-all naxatw-duration-200 file:naxatw-border-0 file:naxatw-bg-transparent file:naxatw-text-sm file:naxatw-font-medium placeholder:naxatw-text-gray-400 focus-visible:naxatw-outline-none focus-visible:naxatw-ring-2 focus-visible:naxatw-ring-offset-2 disabled:naxatw-cursor-not-allowed disabled:naxatw-opacity-50',
          className,
          sizeVarient[varientSize],
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = 'Input';

export default Input;
