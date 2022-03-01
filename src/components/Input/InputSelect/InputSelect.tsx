import React from 'react';

export type InputOptionItem = {
  label: string;
  value: string;
};

export type InputSelectProps = {
  id?: string;
  className?: string;
  options: InputOptionItem[];
  selectedValue?: string;
  onSelect?: (value: string) => void;
};

const InputSelect = (props: InputSelectProps) => {
  return (
    <div className="dw-select-input">
      <select className="dw-select-input__select">
        <option value="Option 1">First Option</option>
        <option value="Option 2">2nd Option</option>
        <option value="Option 3">Option Number 3</option>
      </select>
    </div>
  );
};

export default InputSelect;
