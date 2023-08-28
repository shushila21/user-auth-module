/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useEffect, useRef, useState } from 'react';
import Icon from '@Components/common/Icon';

interface IMultiSelectProps {
  options: Record<string, any>[];
  selectedOptions?: string[];
  placeholder?: string;
  onChange?: (selectedOptions: string[]) => any;
  labelKey?: string;
  valueKey?: string;
  className?: string;
}

export default function MultiSelect({
  options,
  selectedOptions,
  onChange,
  placeholder = 'Select',
  labelKey = 'label',
  valueKey = 'value',
  className,
}: IMultiSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(selectedOptions || []);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setSelected(selectedOptions || []);
  }, [selectedOptions]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const toggleOption = (optionValue: string) => {
    const updatedSelected = selectedOptions?.includes(optionValue)
      ? selected.filter(item => item !== optionValue)
      : [...selected, optionValue];

    // setSelected(updatedSelected);
    onChange?.(updatedSelected);
  };

  function getPlaceholderText() {
    const selectedLength = selected.length;
    let placeholderText = '';
    if (!selectedLength) {
      placeholderText = placeholder;
    } else if (selectedLength === 1) {
      const selectedLabel = options.find(
        item => item[valueKey] === selected[0],
      )?.[labelKey];
      placeholderText = selectedLabel || '';
    } else {
      placeholderText = `${selectedLength} Selected`;
    }
    return placeholderText;
  }

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

  return (
    <div
      ref={dropdownRef}
      className={`naxatw-relative naxatw-flex naxatw-w-full naxatw-cursor-pointer naxatw-items-center
      naxatw-justify-between naxatw-border-b-2  naxatw-border-grey-300 naxatw-bg-white naxatw-py-1
       hover:naxatw-border-primary-400 ${className}`}
      onClick={toggleDropdown}
    >
      <span
        className={`${
          !selected.length && 'naxatw-text-grey-400'
        } naxatw-flex-1 naxatw-px-1 naxatw-pl-3`}
      >
        {getPlaceholderText()}
      </span>
      <span className="naxatw-pr-2 naxatw-text-grey-400">
        <Icon name={isOpen ? 'expand_less' : 'expand_more'} />
      </span>

      {isOpen && (
        <ul
          className="scrollbar naxatw-absolute naxatw-top-[39px] naxatw-z-40 naxatw-flex
         naxatw-max-h-[150px] naxatw-w-full naxatw-flex-col naxatw-gap-1 naxatw-overflow-auto naxatw-border
         naxatw-bg-white naxatw-px-2 naxatw-py-1 naxatw-shadow-lg "
        >
          {options.map(option => (
            <li
              className="naxatw-flex naxatw-cursor-pointer naxatw-list-none naxatw-items-start naxatw-py-2 naxatw-text-sm"
              key={option[valueKey]}
              onClick={e => {
                e.stopPropagation();
                toggleOption(option[valueKey]);
              }}
            >
              <input
                type="checkbox"
                className="naxatw-mr-2 naxatw-h-5"
                value={option[valueKey]}
                checked={selected.includes(option[valueKey])}
                onChange={() => toggleOption(option[valueKey])}
              />
              <div>{option[labelKey]}</div>
            </li>
          ))}
          {!options?.length && (
            <li className="naxatw-cursor-default naxatw-text-sm ">No data</li>
          )}
        </ul>
      )}
    </div>
  );
}
