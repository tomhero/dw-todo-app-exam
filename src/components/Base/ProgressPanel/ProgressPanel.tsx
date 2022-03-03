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
    if (completeCount >= totalCount) return 100;
    if (completeCount <= 0) return 0;

    const percentage = (completeCount * 100) / totalCount;
    return Math.round(percentage);
  };

  const safePercentage = useMemo(getSafePercentage, [totalCount, completeCount]);

  // TODO : Finalise UI
  return (
    <section id={id} className={`dw-progress-panel ${className ? className : ''}`}>
      <h1>Progress</h1>
      <br />
      <ProgressBar percentage={safePercentage} />
      <br />
      <p>12 completed</p>
    </section>
  );
};

export default ProgressPanel;
