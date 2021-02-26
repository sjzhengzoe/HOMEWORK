import React from "react";
import { useSelector } from "react-redux";
import Layout from "./Layout";

export default function Shop() {
  const state = useSelector((state) => state);
  return (
    <Layout title="拉勾商城" subTitle="挑选你喜欢的商品吧">
      Shop{JSON.stringify(state)}
    </Layout>
  );
}
