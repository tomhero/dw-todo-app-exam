import React, { useMemo } from 'react';

import { ProgressBar } from '@components/ProgressBar';

export type ProgressPanelProps = {
  id?: string;
  className?: string;
  totalCount?: number;
  completeCount?: number;
};

const ProgressPanel = ({
  id,
  className,
  totalCount = 0,
  completeCount = 0,
}: ProgressPanelProps) => {
  const getSafePercentage = () => {
    if (completeCount <= 0 || totalCount <= 0) return 0;
    if (completeCount >= totalCount) return 100;

    const percentage = (completeCount * 100) / totalCount;
    return Math.round(percentage);
  };

  const safePercentage = useMemo(getSafePercentage, [totalCount, completeCount]);

  return (
    <section id={id} className={`dw-progress-panel ${className ? className : ''}`}>
      <h1 className="dw-progress-panel__title dw-text-h1">Progress</h1>
      <ProgressBar percentage={safePercentage} />
      <p className="dw-progress-panel__description dw-text-p">{completeCount} completed</p>
    </section>
  );
};

export default ProgressPanel;
