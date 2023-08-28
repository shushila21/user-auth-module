/* eslint-disable react/prop-types */
import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { VariantProps, cva } from 'class-variance-authority';

import { cn } from '@Utils/index';

const buttonVariants = cva(
  'naxatw-inline-flex naxatw-items-center naxatw-justify-center naxatw-rounded-md naxatw-text-sm naxatw-font-bold naxatw-transition-colors focus-visible:naxatw-outline-none focus-visible:naxatw-ring-2 focus-visible:ring-ring focus-visible:naxatw-ring-offset-2 disabled:naxatw-opacity-50 disabled:naxatw-pointer-events-none',
  {
    variants: {
      variant: {
        default:
          'naxatw-bg-primary-400 naxatw-text-white hover:naxatw-shadow hover:naxatw-shadow-primary-400',
        // destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline:
          'naxatw-border naxatw-text-primary-400 naxatw-border-primary-400 naxatw-border-input hover:naxatw-shadow hover:naxatw-shadow-primary-100',
        secondary:
          'naxatw-bg-white naxatw-text-primary-400 naxatw-border naxatw-border-primary-400 hover:naxatw-shadow-primary-100',
        ghost:
          'naxatw-text-primary-400 naxatw-font-bold disabled:naxatw-text-grey-600 hover:naxatw-text-primary-600',
        link: 'naxatw-text-primary-400 naxatw-font-bold naxatw-underline-offset-4 naxatw-underline hover:naxatw-no-underline naxatw-text-primarycolor hover:naxatw-shadow hover:naxatw-shadow-primary-400',
      },
      size: {
        default: 'naxatw-h-10 naxatw-py-2 naxatw-px-4',
        sm: 'naxatw-h-9 naxatw-px-3 naxatw-rounded-md',
        lg: 'naxatw-h-11 naxatw-px-8 naxatw-rounded-md',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = 'Button';

export { Button, buttonVariants };
