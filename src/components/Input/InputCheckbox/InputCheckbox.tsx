import React from 'react';

export type InputCheckboxProps = {
  id?: string;
  onChange: (isCheck: boolean) => void;
  defaultChecked?: boolean;
};

const InputCheckbox = ({ id = 'dw-checkbox', onChange, defaultChecked }: InputCheckboxProps) => {
  return (
    <>
      <input
        id={id}
        onChange={(e) => onChange(e.target.checked)}
        className="dw-checkbox"
        type="checkbox"
        defaultChecked={defaultChecked}
      />
      <label htmlFor={id} className="dw-checkbox__shadow-box">
        <span />
      </label>
    </>
  );
};

export default InputCheckbox;
