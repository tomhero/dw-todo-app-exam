import React, { useMemo } from 'react';

const MAX_PERCENTAGE = 100;
const MIN_PERCENTAGE = 0;

export type ProgressBarProps = {
  id?: string;
  className?: string;
  /** percent number that accept value 0 - 100 */
  percentage?: number;
};

const ProgressBar = ({ id, className, percentage = 0 }: ProgressBarProps) => {
  const getSafePercentage = () => {
    if (percentage < MIN_PERCENTAGE) return MIN_PERCENTAGE;
    if (percentage > MAX_PERCENTAGE) return MAX_PERCENTAGE;
    return percentage;
  };

  const safePercentage = useMemo(getSafePercentage, [percentage]);

  return (
    <progress
      id={id}
      className={`dw-progress-bar ${className ? className : ''}`}
      max={MAX_PERCENTAGE}
      value={safePercentage}
    />
  );
};

export default ProgressBar;
