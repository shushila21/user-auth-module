import * as React from 'react';
import * as SelectPrimitive from '@radix-ui/react-select';
import { Check, ChevronDown } from 'lucide-react';

import { cn } from '@Utils/index';

const Select = SelectPrimitive.Root;

const SelectGroup = SelectPrimitive.Group;

const SelectValue = SelectPrimitive.Value;

const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({ className = '', children, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={cn(
      `border-input ring-offset-background placeholder:text-muted-foreground focus:ring-ring naxatw-flex naxatw-h-10 naxatw-w-full naxatw-items-center 
       naxatw-justify-between naxatw-rounded-md naxatw-border naxatw-bg-white naxatw-px-3 naxatw-py-2
       naxatw-text-sm focus:naxatw-outline-none focus:naxatw-ring-2 focus:naxatw-ring-offset-2 disabled:naxatw-cursor-not-allowed 
       disabled:naxatw-opacity-50`,
      className,
    )}
    {...props}
  >
    {children}
    <SelectPrimitive.Icon asChild>
      <ChevronDown className="naxatw-h-4 naxatw-w-4 naxatw-opacity-50" />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
));
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;

const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, position = 'popper', ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      className={cn(
        `naxatw-relative naxatw-z-50 naxatw-min-w-[8rem] naxatw-overflow-hidden naxatw-rounded-md naxatw-border naxatw-bg-white
        naxatw-text-grey-800 naxatw-shadow-md naxatw-animate-in naxatw-fade-in-80`,
        position === 'popper' && 'translate-y-1',
        className,
      )}
      position={position}
      {...props}
    >
      <SelectPrimitive.Viewport
        className={cn(
          'naxatw-p-1',
          position === 'popper' &&
            'naxatw-h-[var(--radix-select-trigger-height)] naxatw-w-full naxatw-min-w-[var(--radix-select-trigger-width)]',
        )}
      >
        {children}
      </SelectPrimitive.Viewport>
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
));
SelectContent.displayName = SelectPrimitive.Content.displayName;

const SelectLabel = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Label
    ref={ref}
    className={cn(
      'naxatw-py-1.5 naxatw-pl-8 naxatw-pr-2 naxatw-text-sm naxatw-font-semibold',
      className,
    )}
    {...props}
  />
));
SelectLabel.displayName = SelectPrimitive.Label.displayName;

const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(
      'focus:naxatw-bg-primarycolor focus:text-accent-foreground naxatw-relative naxatw-flex naxatw-w-full naxatw-cursor-default naxatw-select-none naxatw-items-center naxatw-rounded-sm naxatw-py-1.5 naxatw-pl-8 naxatw-pr-2 naxatw-text-sm naxatw-outline-none data-[disabled]:naxatw-pointer-events-none data-[disabled]:naxatw-opacity-50',
    )}
    {...props}
  >
    <span className="naxatw-absolute naxatw-left-2 naxatw-flex naxatw-h-3.5 naxatw-w-3.5 naxatw-items-center naxatw-justify-center">
      <SelectPrimitive.ItemIndicator>
        <Check className="naxatw-h-4 naxatw-w-4" />
      </SelectPrimitive.ItemIndicator>
    </span>

    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
));
SelectItem.displayName = SelectPrimitive.Item.displayName;

const SelectSeparator = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Separator
    ref={ref}
    className={cn(
      'naxatw-bg-muted naxatw--mx-1 naxatw-my-1 naxatw-h-px',
      className,
    )}
    {...props}
  />
));
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;

export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
};
