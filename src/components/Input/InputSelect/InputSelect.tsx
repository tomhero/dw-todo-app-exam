import React, { useState } from 'react';

import { sleep } from '@utils/time';

export type InputOptionItem = {
  label: string;
  value: string;
};

export type InputSelectProps = {
  id?: string;
  className?: string;
  options: InputOptionItem[];
  selectedValue?: string;
  onSelect: (value: string) => void;
};

const InputSelect = ({ id, className, options, onSelect, selectedValue }: InputSelectProps) => {
  const [isOpenCaret, setIsOpenCaret] = useState(false);

  const selectHandler = (value: string) => {
    onSelect(value);
    setIsOpenCaret(false);
  };

  const blurHandler = async (e: React.FocusEvent<HTMLInputElement>) => {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      // NOTE : When clicked outside parent and children components
      await sleep(0.15);
      setIsOpenCaret(false);
    }
  };

  return (
    <div id={id} className={`dw-select-input ${className}`}>
      <input
        type="text"
        className="dw-select-input__select"
        placeholder={selectedValue}
        readOnly
        onClick={() => setIsOpenCaret(!isOpenCaret)}
        onBlur={blurHandler}
      />
      <img className="dw-select-input__icon" src="/icons/chev-down.svg" alt="chevron icon" />
      <div
        className={`dw-select-input__options ${
          !isOpenCaret ? 'dw-select-input__options--hide' : ''
        }`}
      >
        {options.map((option, index) => (
          <div
            key={`${index}-${option.value}`}
            className="dw-select-input__options__item"
            onClick={() => selectHandler(option.value)}
          >
            <span>{option.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InputSelect;
