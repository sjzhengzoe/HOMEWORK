import React from "react";
import { Redirect } from "react-router-dom";
import { isRole } from "../../helpers/auth";
import Layout from "./Layout";

export default function UserDashboard() {
  let role = isRole();
  if (role) return <Redirect to="/admin/dashboard" />;
  return (
    <Layout title="用户中心" subTitle="">
      Dashboard
    </Layout>
  );
}
