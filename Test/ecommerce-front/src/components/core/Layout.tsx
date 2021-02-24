import { PageHeader } from "antd";
import React, { FC } from "react";
import Navigation from "./Navigation";

interface Props {
  children: React.ReactNode;
  title: string;
  subTitle: string;
}

const Layout: FC<Props> = function Layout({ children, title, subTitle }) {
  return (
    <div>
      <Navigation />
      <PageHeader className="jumbotron" title={title} subTitle={subTitle} />
      <div style={{ width: "85%", margin: "auto" }}>{children}</div>
    </div>
  );
};

export default Layout;
