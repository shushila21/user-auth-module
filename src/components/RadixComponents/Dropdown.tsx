/* eslint-disable no-nested-ternary */
import React, { useEffect, useRef } from 'react';
import Icon from '@Components/common/Icon';
import { cn } from '@Utils/index';
import { IComboBoxProps, IDropDownData } from '@Schemas/interfaces';
import hasErrorBoundary from '@Utils/hasErrorBoundary';
import { Button } from './Button';

import { Command, CommandGroup, CommandItem } from './Command';
import { Popover, PopoverContent, PopoverTrigger } from './Popover';

function Dropdown({
  options = [],
  multiple = false,
  choose = 'id',
  bindvalue,
  placeholder,
  onChange,
  onFocus,
  id,
  className,
  disabled,
  isLoading = false,
}: IComboBoxProps) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(bindvalue);
  const [dropDownWidth, setDropDownWidth] = React.useState<number | undefined>(
    0,
  );
  const handleSelect = (currentValue: any) => {
    if (onFocus) onFocus();

    if (multiple) {
      const selectedValues = Array.isArray(value) ? [...value] : [];
      const selectedIndex = selectedValues.indexOf(currentValue);
      if (selectedIndex === -1) {
        selectedValues.push(currentValue);
      } else {
        selectedValues.splice(selectedIndex, 1);
      }
      if (onChange) {
        onChange(selectedValues);
      }
      setValue(selectedValues);
    } else {
      const selectedValue = currentValue === value ? '' : currentValue;
      setValue(selectedValue);
      if (onChange) {
        onChange(selectedValue);
      }
      setOpen(false);
    }
  };

  const triggerRef = useRef<HTMLButtonElement | null>(null);
  useEffect(() => {
    setDropDownWidth(triggerRef.current?.clientWidth);
  }, [triggerRef.current?.clientWidth]);
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild ref={triggerRef}>
        <Button
          id={id}
          variant={disabled ? 'ghost' : 'drop'}
          size="drop-lg"
          role="combobox"
          aria-expanded={open}
          className={cn(
            'naxatw-flex naxatw-items-center naxatw-justify-between naxatw-gap-1 naxatw-bg-white',
            className,
          )}
          onClick={() => setOpen(true)}
        >
          {multiple ? (
            <div className="naxatw-flex naxatw-flex-wrap">
              {Array.isArray(value) && value.length > 0 ? (
                <p className="naxatw-line-clamp-2">
                  {value.length} items selected
                </p>
              ) : (
                <p className="naxatw-body-md naxatw-line-clamp-2 naxatw-px-0 naxatw-text-gray-400">
                  {placeholder || 'Choose'}
                </p>
              )}
            </div>
          ) : (
            <>
              {value ? (
                options.find(
                  (option: IDropDownData) =>
                    option[choose as keyof IDropDownData] === value,
                )?.label
              ) : (
                <p className="naxatw-body-md naxatw-line-clamp-2 naxatw-px-0 naxatw-text-gray-400">
                  {placeholder || 'Choose'}
                </p>
              )}
            </>
          )}
          <Icon
            iconName="arrow_drop_down"
            className="naxatw-flex naxatw-h-4 naxatw-w-4 naxatw-shrink-0 naxatw-items-center naxatw-justify-center naxatw-text-black naxatw-opacity-50"
          />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className="search-scrollbar naxatw-block naxatw-max-h-[10rem] naxatw-overflow-y-auto naxatw-bg-white naxatw-p-[0px]"
        style={{ width: `${dropDownWidth}px` }}
      >
        <Command className="naxatw-m-0 naxatw-p-0">
          {isLoading && <p>Loading ...</p>}
          <CommandGroup className="">
            {options.length ? (
              options.map((option: IDropDownData) => (
                <CommandItem
                  key={option.value}
                  onSelect={() =>
                    handleSelect(option[choose as keyof IDropDownData])
                  }
                >
                  {/* {multiple ? (
                  <Icon
                    iconName={`${
                      Array.isArray(value) && value.includes(option[choose] as T)
                        ? 'check_box'
                        : 'check_box_outline_blank'
                    }`}
                    className={`naxatw-mr-[1px] naxatw-text-[20px]
                    ${
                      Array.isArray(value) && value.includes(option[choose] as T)
                        ? 'naxatw-text-green-600'
                        : 'naxatw-text-gray-600'
                    } `}
                  />
                ) : (
                  <Icon
                    iconName="done"
                    className={`naxatw-mr-[1px] naxatw-text-[20px] ${
                      value === option[choose] ? 'naxatw-opacity-100' : 'naxatw-opacity-0'
                    }`}
                  />
                )} */}
                  <Icon
                    iconName="done"
                    className={`naxatw-mr-[1px] naxatw-text-[20px] ${
                      !multiple
                        ? value === option[choose as keyof IDropDownData]
                          ? 'naxatw-opacity-100'
                          : 'naxatw-opacity-0'
                        : Array.isArray(value) &&
                          value.includes(option[choose as keyof IDropDownData])
                        ? 'naxatw-opacity-100'
                        : 'naxatw-opacity-0'
                    }`}
                  />
                  {option.label}
                </CommandItem>
              ))
            ) : (
              <div className="naxatw-flex naxatw-h-[4.25rem] naxatw-items-center naxatw-justify-center naxatw-text-gray-400">
                No Data Found.
              </div>
            )}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
export default hasErrorBoundary(Dropdown);
