import { Col, Menu, Row, Typography, Descriptions } from "antd";
import React from "react";
import { Link, Redirect } from "react-router-dom";
import { isAuth, isRole } from "../../helper/auth";
import Layout from "../core/Layout";
import { ShoppingCartOutlined, UserOutlined, OrderedListOutlined } from "@ant-design/icons";
import { Jwt } from "../../store/models/auth";
const { Title } = Typography;

export default function AdminDashboard() {
  let role = isRole();
  if (!role) return <Redirect to="/user/dashboard" />;
  const {
    user: { name, email },
  } = isAuth() as Jwt;
  return (
    <Layout title="管理员用户中心" subTitle="">
      <Row gutter={[10, 10]}>
        <Col span="4">
          <Title level={5}>管理员链接</Title>
          <Menu>
            <Menu.Item>
              <ShoppingCartOutlined />
              <Link to="/create/category">添加分类</Link>
            </Menu.Item>
            <Menu.Item>
              <UserOutlined />
              <Link to="/create/product">添加产品</Link>
            </Menu.Item>
            <Menu.Item>
              <OrderedListOutlined />
              <Link to="/admin/orders">订单列表</Link>
            </Menu.Item>
          </Menu>
        </Col>
        <Col span="20">
          <Descriptions title="管理员信息" bordered>
            <Descriptions.Item label="昵称">{name}</Descriptions.Item>
            <Descriptions.Item label="邮件">{email}</Descriptions.Item>
            <Descriptions.Item label="角色">管理员</Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>
    </Layout>
  );
}
