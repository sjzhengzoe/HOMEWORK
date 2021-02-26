import { Button, Form, Input, message } from "antd";
import React, { useEffect, useState } from "react";
import Layout from "../core/Layout";
import axios from "axios";
import { API } from "../../config";
import { Jwt } from "../../store/models/auth";
import { Link } from "react-router-dom";
import { isAuth } from "../../helpers/auth";

const AddCategory = () => {
  const [name, setName] = useState<string>("");

  const { user, token } = isAuth() as Jwt;

  useEffect(() => {
    async function addCategory() {
      try {
        let response = await axios.post<{ name: string }>(
          `${API}/category/create/${user._id}`,
          {
            name: name,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        message.success(`[${response.data.name}] 分类添加成功`);
      } catch (error) {
        message.error(error.response.data.error);
      }
    }
    if (name) {
      addCategory();
    }
  }, [name]);

  const onFinish = (value: { name: string }) => {
    if (name === value.name) {
      message.error("请勿添加相同的分类");
    } else {
      setName(value.name);
    }
  };
  return (
    <Layout title="添加分类" subTitle="">
      <Form onFinish={onFinish}>
        <Form.Item name="name" label="分类名称">
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            添加分类
          </Button>
        </Form.Item>
      </Form>
      <Button>
        <Link to="/admin/dashboard">返回 Dashboard</Link>
      </Button>
    </Layout>
  );
};

export default AddCategory;
