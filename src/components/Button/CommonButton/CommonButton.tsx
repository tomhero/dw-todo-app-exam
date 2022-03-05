import React from 'react';

export type CommonButtonProps = {
  id?: string;
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
};

const CommonButton: React.FC<CommonButtonProps> = ({ id, className, onClick, children, type }) => {
  return (
    <button
      id={id}
      className={`dw-button ${className ? className : ''}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

export default CommonButton;
