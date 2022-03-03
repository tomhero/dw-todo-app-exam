import React from 'react';

const Layout: React.FC<{ withContainer?: boolean }> = ({ children, withContainer = true }) => {
  if (withContainer) {
    return (
      <main className="dw-layout">
        <div className="dw-layout__container">{children}</div>
      </main>
    );
  }

  return <main className="dw-layout">{children}</main>;
};

export default Layout;
