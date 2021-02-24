import React from "react";
import { useSelector } from "react-redux";
import Layout from "./Layout";

export default function Home() {
  const state = useSelector((state) => state);
  return (
    <Layout title="拉钩商城" subTitle="尽情享受吧">
      Home{JSON.stringify(state)}
    </Layout>
  );
}
