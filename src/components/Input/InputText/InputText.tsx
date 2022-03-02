import React from 'react';

export type InputTextProps = {
  id?: string;
  className?: string;
  value?: string;
  placeholder?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  readOnly: boolean;
};

const InputText = ({ id, className, value, placeholder, onChange, readOnly }: InputTextProps) => {
  return (
    <input
      id={id}
      className={`dw-text-input ${className ? className : ''}`}
      type="text"
      value={value}
      placeholder={placeholder}
      readOnly={readOnly}
      onChange={onChange}
    />
  );
};

export default InputText;
