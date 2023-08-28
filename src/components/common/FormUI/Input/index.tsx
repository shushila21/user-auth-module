import * as React from 'react';

import { cn } from '@Utils/index';

export interface IInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, IInputProps>(
  ({ className, placeholder, type, ...rest }, ref) => {
    return (
      <input
        type={type}
        placeholder={placeholder || 'Search'}
        className={cn(
          `naxatw-flex naxatw-h-11 naxatw-border-b-2 naxatw-border-grey-300 naxatw-bg-transparent
            naxatw-px-3 naxatw-text-body-md file:naxatw-font-medium
             hover:naxatw-border-primary-400 focus:naxatw-border-primary-400 focus:naxatw-bg-transparent
            focus:naxatw-outline-none disabled:naxatw-cursor-not-allowed disabled:naxatw-opacity-50`,
          className,
        )}
        ref={ref}
        {...rest}
      />
    );
  },
);
Input.displayName = 'Input';

export default Input;
