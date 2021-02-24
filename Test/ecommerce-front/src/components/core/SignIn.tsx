import { Form, Input, Button } from "antd";
import React from "react";
import Layout from "./Layout";

export default function SignIn() {
  return (
    <Layout title="登录" subTitle="">
      <Form>
        <Form.Item name="password" label="密码">
          <Input />
        </Form.Item>
        <Form.Item name="email" label="邮箱">
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            登录
          </Button>
        </Form.Item>
      </Form>
    </Layout>
  );
}
