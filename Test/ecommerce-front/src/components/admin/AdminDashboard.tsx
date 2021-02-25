import React from "react";
import { Redirect } from "react-router-dom";
import { isRole } from "../../helper/auth";
import Layout from "../core/Layout";

export default function AdminDashboard() {
  let role = isRole();
  if (!role) return <Redirect to="/user/dashboard" />;
  return (
    <Layout title="管理员用户中心" subTitle="">
      Dashboard
    </Layout>
  );
}
