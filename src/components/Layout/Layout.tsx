import React from 'react';

const Layout: React.FC<{ withContainer?: boolean; className?: string }> = ({
  children,
  withContainer = true,
  className,
}) => {
  const layoutClassName = `dw-layout ${className ? className : ''}`;
  if (withContainer) {
    return (
      <main className={layoutClassName}>
        <div className="dw-layout__container">{children}</div>
      </main>
    );
  }

  return <main className={layoutClassName}>{children}</main>;
};

export default Layout;
