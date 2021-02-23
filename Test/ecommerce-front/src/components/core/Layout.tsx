import React, { FC } from "react";

interface Props {
  children: React.ReactNode;
}

const Layout: FC<Props> = function Layout({ children }) {
  return (
    <div>
      Layout
      {children}
    </div>
  );
};

export default Layout;
