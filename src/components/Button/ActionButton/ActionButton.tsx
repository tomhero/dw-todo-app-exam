import React, { useState } from 'react';

export type ActionItem = {
  label: string;
  action: string;
  extraClassName?: string;
};

export type ActionButtonProps = {
  id?: string;
  className?: string;
  actions: ActionItem[];
  onClickAction: (action: string) => void;
};

const ActionButton = ({ id, className, actions, onClickAction }: ActionButtonProps) => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const selectHandler = (action: string) => {
    onClickAction(action);
    setIsOpenMenu(false);
  };

  return (
    <div id={id} className={`dw-action-button ${className ? className : ''}`}>
      <img
        className="dw-action-button__dots"
        src="/icons/three-dots.svg"
        alt="action button dots"
      />
      <button
        onClick={() => setIsOpenMenu(!isOpenMenu)}
        className="dw-action-button__button"
        onBlur={() => {
          setTimeout(() => {
            setIsOpenMenu(false);
          }, 150);
        }}
      />
      <ul
        className={`dw-action-button__context-menu ${
          !isOpenMenu ? 'dw-action-button__context-menu--hide' : ''
        }`}
      >
        {actions.map(({ action, label, extraClassName }, index) => {
          const extraClass = extraClassName ? extraClassName : '';
          return (
            <li
              key={`${index}-${action}`}
              className={`dw-action-button__context-menu__item ${extraClass}`}
              onClick={() => selectHandler(action)}
            >
              {label}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ActionButton;
