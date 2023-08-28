import React from 'react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { CheckIcon } from '@radix-ui/react-icons';

import { cn } from '@Utils/index';

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      'naxatw-border-primary focus-visible:naxatw-ring-ring data-[state=checked]:naxatw-bg-primary data-[state=checked]:naxatw-text-primary-foreground naxatw-peer naxatw-h-4 naxatw-w-4 naxatw-shrink-0 naxatw-rounded-sm naxatw-border naxatw-shadow focus-visible:naxatw-outline-none focus-visible:naxatw-ring-1 disabled:naxatw-cursor-not-allowed disabled:naxatw-opacity-50',
      className,
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator
      className={cn(
        'justify-center naxatw-text-naxatw-current naxatw-flex naxatw-items-center',
      )}
    >
      <CheckIcon className="naxatw-h-4 naxatw-w-4" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export default Checkbox;
