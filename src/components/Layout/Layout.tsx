import React from 'react';

const Layout: React.FC = ({ children }) => {
  return (
    <main className="dw-layout">
      <div className="dw-layout__container">{children}</div>
    </main>
  );
};

export default Layout;
