import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@radix-ui/react-tooltip';
import Icon from '../common/Icon';

interface ToolTipProps {
  name: string;
  message: string;
  className?: string;
  messageStyle?: string;
  iconClick?: () => void;
}

export default function ToolTip({
  name,
  message,
  iconClick,
  className,
  messageStyle,
}: ToolTipProps) {
  return (
    <>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger onClick={iconClick}>
            <Icon
              name={name}
              className={`naxatw-text-grey-500 hover:naxatw-animate-pulse hover:naxatw-text-primary-400 ${className}`}
            />
          </TooltipTrigger>
          <TooltipContent sideOffset={5}>
            <div
              className={`message naxatw-rounded-sm naxatw-bg-black naxatw-px-3 naxatw-py-1 naxatw-text-xs naxatw-text-white ${messageStyle}`}
            >
              {message}
            </div>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </>
  );
}
