/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import { cn } from '@Utils/index';

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          'naxatw-border-input focus-visible:naxatw-ring-ring naxatw-flex naxatw-min-h-[4.5rem] naxatw-w-full naxatw-rounded-md naxatw-border naxatw-bg-transparent naxatw-px-3 naxatw-py-2 naxatw-text-sm naxatw-shadow-sm placeholder:naxatw-text-gray-500 focus-visible:naxatw-outline-none focus-visible:naxatw-ring-1 disabled:naxatw-cursor-not-allowed disabled:naxatw-opacity-50',
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Textarea.displayName = 'Textarea';

export default Textarea;
