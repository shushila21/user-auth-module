/* eslint-disable no-nested-ternary */
import { ChangeEvent, useEffect, useState } from 'react';
import Icon from '@Components/common/Icon';
import { IComboBoxProps, IDropDownData } from '@Schemas/interfaces';
import hasErrorBoundary from '@Utils/hasErrorBoundary';
import { comboboxTestData } from '@Constants/_test_/index.test';
import { Button } from './Button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from './Command';
import { Popover, PopoverContent, PopoverTrigger } from './Popover';

function Combobox({
  options = comboboxTestData,
  bindvalue,
  choose = 'id',
  multiple = false,
  onChange,
  onFocus,
  disabled,
}: IComboBoxProps) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(bindvalue);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [filteredData, setFilteredData] = useState(options);

  useEffect(() => {
    const debounceInstance = setTimeout(() => {
      setFilteredData([...options]);
      if (searchQuery.length)
        setFilteredData(() => [
          ...options.filter(
            item =>
              item.value.includes(searchQuery.toLowerCase()) ||
              item.label.includes(searchQuery.toLowerCase()),
          ),
        ]);
      else setFilteredData(options);
    }, 300);

    return () => clearTimeout(debounceInstance);
  }, [searchQuery, options]);

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
      if (onChange) onChange(selectedValue);
      setValue(selectedValue);
      setOpen(false);
    }
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant={disabled ? 'ghost' : 'drop'}
          size="drop-lg"
          role="combobox"
          aria-expanded={open}
          className="naxatw-flex naxatw-items-center naxatw-justify-between naxatw-pr-3"
        >
          {multiple ? (
            <div className="naxatw-flex naxatw-flex-wrap">
              {Array.isArray(value) && value.length > 0 ? (
                <span>{value.length} items selected</span>
              ) : (
                <span className="naxatw-opacity-50">Select options...</span>
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
                <span className="naxatw-opacity-50">Select options...</span>
              )}
            </>
          )}
          <Icon
            iconName="arrow_drop_down"
            className=" naxatw-flex naxatw-h-4 naxatw-w-4 naxatw-shrink-0 naxatw-items-center naxatw-justify-center naxatw-opacity-50"
          />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className="naxatw-w-full naxatw-bg-white naxatw-p-[0px]"
        style={{ width: 'inherit' }}
      >
        <Command className="naxatw-m-0 naxatw-p-0">
          <CommandInput
            placeholder="Search data..."
            value={searchQuery}
            onChangeCapture={(e: ChangeEvent<any>) => {
              setSearchQuery(e.target.value);
            }}
          />
          {/* {!filteredData.length && (
            <div className="naxatw-px-2 naxatw-py-1 naxatw-text-gray-500 naxatw-font-extralight">No match found!</div>
          )} */}
          <CommandEmpty>No match found.</CommandEmpty>
          <CommandGroup>
            {filteredData.map((option: IDropDownData) => (
              <CommandItem
                key={option.label}
                onSelect={() =>
                  handleSelect(option[choose as keyof IDropDownData])
                }
              >
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
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

export default hasErrorBoundary(Combobox);
