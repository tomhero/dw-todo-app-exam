import React from 'react';

export type InputCheckboxProps = {
  id?: string;
  className?: string;
  onChange: (isCheck: boolean) => void;
  defaultChecked?: boolean;
};

const InputCheckbox = ({
  id = 'dw-checkbox',
  className,
  onChange,
  defaultChecked,
}: InputCheckboxProps) => {
  return (
    <div id="" className={`dw-checkbox ${className ? className : ''}`}>
      <input
        id={id}
        onChange={(e) => onChange(e.target.checked)}
        className="dw-checkbox__input-box"
        type="checkbox"
        defaultChecked={defaultChecked}
      />
      <label htmlFor={id} className="dw-checkbox__shadow-box">
        <span />
      </label>
    </div>
  );
};

export default InputCheckbox;
