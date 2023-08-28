import { ChangeEvent, useEffect, useState } from 'react';
import Icon from '@Components/common/Icon';
import { IDropDownData, IRegisterProps } from '@Schemas/interfaces';
import {
  Command,
  CommandGroup,
  CommandEmpty,
  CommandInput,
  CommandItem,
} from './Command';

interface ISearchCommandProps extends Partial<IRegisterProps> {
  options: IDropDownData[];
  choose: keyof IDropDownData;
  className?: string;
}

export default function SearchCommand({
  options,
  choose = 'id',
  className,
  onChange,
}: ISearchCommandProps) {
  const [value, setValue] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [filteredData, setFilteredData] = useState<IDropDownData[]>(options);

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
    const selectedValue = currentValue === value ? '' : currentValue;
    if (onChange) onChange(selectedValue);
    setValue(selectedValue);
  };

  return (
    <Command className={`naxatw-m-0 naxatw-p-0 ${className}`}>
      <div className="naxatw-rounded-lg naxatw-border naxatw-bg-white focus-within:naxatw-border-blue-500">
        <CommandInput
          placeholder="Search..."
          value={searchQuery}
          onChangeCapture={(e: ChangeEvent<any>) => {
            setSearchQuery(e.target.value);
          }}
          className="naxatw-body-md naxatw-h-11"
        />
      </div>
      <>
        <div className="naxatw-my-1 naxatw-rounded-lg naxatw-border naxatw-shadow-sm">
          <CommandEmpty>No match found</CommandEmpty>
          <CommandGroup>
            {filteredData.map((option: IDropDownData) => (
              <CommandItem
                key={option.label}
                onSelect={() => handleSelect(option[choose])}
                className="naxatw-px-0"
              >
                <Icon
                  iconName="done"
                  className={`naxatw-mr-[1px] naxatw-text-[20px] ${
                    Array.isArray(value) && value.includes(option[choose])
                      ? 'naxatw-opacity-100'
                      : 'naxatw-opacity-0'
                  }`}
                />
                {option.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </div>
      </>
    </Command>
  );
}
