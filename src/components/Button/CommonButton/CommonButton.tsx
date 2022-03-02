import React from 'react';

export type CommonButtonProps = {
  id?: string;
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
};

const CommonButton: React.FC<CommonButtonProps> = ({ id, className, onClick, children }) => {
  return (
    <button id={id} className={`dw-button ${className ? className : ''}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default CommonButton;
