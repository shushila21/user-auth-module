/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useEffect, useRef, useState } from 'react';
import Icon from '@Components/common/Icon';

interface ISelectProps {
  options: Record<string, any>[];
  selectedOption?: string;
  placeholder?: string;
  onChange?: (selectedOption: string) => any;
  labelKey?: string;
  valueKey?: string;
}

export default function Select({
  options,
  selectedOption,
  onChange,
  placeholder = 'Select',
  labelKey = 'label',
  valueKey = 'value',
}: ISelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(selectedOption);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleOptionClick = (value: string) => {
    setSelected(value);
    // @ts-ignore
    onChange(value);
  };

  const getPlaceholderText = () => {
    if (selected)
      // @ts-ignore
      return options.find(item => item[valueKey] === selected)?.[labelKey];
    return placeholder;
  };

  return (
    <div className="naxatw-relative ">
      <div
        ref={dropdownRef}
        className=" group naxatw-flex naxatw-h-11 naxatw-w-full naxatw-cursor-pointer  naxatw-items-center
         naxatw-justify-between naxatw-border-b-2 naxatw-border-grey-300 naxatw-bg-white hover:naxatw-border-b-primary-400"
        onClick={toggleDropdown}
      >
        <span
          className={`${
            !selected && 'naxatw-text-grey-400'
          } naxatw-flex-1 naxatw-px-1 naxatw-pl-3 naxatw-text-sm naxatw-text-grey-800 group-hover:naxatw-bg-grey-700`}
        >
          {getPlaceholderText()}
        </span>
        <span className="naxatw-pr-2 naxatw-text-grey-400 group-hover:naxatw-bg-red-700 ">
          <Icon
            name={isOpen ? 'expand_less' : 'expand_more'}
            className="group-hover:naxatw-text-primary-700 "
          />
        </span>
      </div>

      {isOpen && (
        <ul
          className="scrollbar naxatw-absolute naxatw-top-[44px] naxatw-z-40 naxatw-flex
         naxatw-max-h-[150px] naxatw-w-full naxatw-flex-col naxatw-overflow-auto naxatw-border naxatw-bg-white naxatw-shadow-lg"
        >
          {options?.length ? (
            // @ts-ignore
            options.map(option => (
              <li
                className="naxatw-flex naxatw-cursor-pointer naxatw-list-none naxatw-items-start naxatw-px-4 naxatw-py-2.5
                naxatw-text-sm naxatw-text-grey-800 hover:naxatw-bg-primary-50"
                key={option[valueKey]}
                onClick={() => handleOptionClick(option[valueKey])}
              >
                <div>{option[labelKey]}</div>
              </li>
            ))
          ) : (
            <li className="naxatw-cursor-default naxatw-px-2 naxatw-text-sm naxatw-text-grey-800">
              No data
            </li>
          )}
        </ul>
      )}
    </div>
  );
}
