/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { format, isValid, parse } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';
import { cn } from '@Utils/index';
import { IDatePickerProps } from '@Schemas/interfaces';
import Icon from '@Components/common/Icon';
import { Button } from './Button';
import { Calendar } from './Calendar';
import { Popover, PopoverContent, PopoverTrigger } from './Popover';
import Input from './Input';

/**
 *  This code exports a default function called `DatePicker` that takes an optional boolean prop
 * `canType`. It uses React hooks to manage state for the selected date and a typed date input.
 */
export default function DatePicker({
  canType = false,
  onChange,
  bindvalue,
  id,
  placeholder,
}: IDatePickerProps) {
  const [date, setDate] = React.useState<Date>();
  const [typedDate, setTypedDate] = React.useState<any>();

  useEffect(() => {
    setDate(bindvalue);
    setTypedDate(bindvalue);
  }, [bindvalue]);

  const handleTypedDate = (e: any) => {
    const passedTypedDate = e.target.value;
    setTypedDate(passedTypedDate);
    const parsedDate = parse(passedTypedDate, 'yyyy-MM-dd', new Date());

    if (isValid(parsedDate)) setDate(parsedDate);
    if (onChange) onChange(parsedDate);
  };

  const handleCalendarSelect = (data: any) => {
    setDate(data);
    setTypedDate((prev: any) => (data ? format(data, 'yyyy-MM-dd') : prev));
    if (onChange) onChange(data ? format(data, 'yyyy-MM-dd') : typedDate);
  };

  return (
    <Popover>
      <PopoverTrigger asChild id={id} className="hover:naxatw-bg-teal-green-50">
        {canType ? (
          <Input
            type="text"
            hasIcon
            rightIconName="calendar_month"
            leftIconName="arrow_drop_down"
            value={typedDate}
            onChange={handleTypedDate}
            placeholder={placeholder}
          />
        ) : (
          <Button
            variant="secondary"
            className={cn(
              'naxatw-flex naxatw-w-fit naxatw-items-center naxatw-justify-between naxatw-gap-2 !naxatw-px-[0.75rem] naxatw-text-left naxatw-font-normal',
              !date && '',
            )}
          >
            <CalendarIcon className="naxatw-mr-2 naxatw-h-4 naxatw-w-4" />
            {date ? (
              <span className="naxatw-flex-1">
                {format(date, 'yyyy-MM-dd')}
              </span>
            ) : (
              <span className="naxatw-flex-1">Pick a date</span>
            )}
            <Icon
              iconName="arrow_drop_down"
              // className={cn('naxatw-text-2xl naxatw-px-[12px]', iconStyle)}
              // onClick={onClick}
            />
            {/* <CalendarIcon className="naxatw-mr-2 naxatw-h-4 naxatw-w-4" /> */}
          </Button>
        )}
      </PopoverTrigger>
      <PopoverContent className="naxatw-w-full naxatw-bg-white !naxatw-p-[0px]">
        <Calendar
          mode="single"
          selected={date}
          onSelect={handleCalendarSelect}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
