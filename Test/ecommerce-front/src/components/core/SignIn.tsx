import { Form, Input, Button } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetSignin, signin, SignupPayload } from "../../store/actions/auth.action";
import { AppState } from "../../store/reducers";
import { AuthState } from "../../store/reducers/auth.reducer";
import Layout from "./Layout";

export default function SignIn() {
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  // 获取登录结果
  const auth = useSelector<AppState, AuthState>((state) => state.auth);

  // 登录表单提交
  const onFinish = (value: SignupPayload) => {
    dispatch(signin(value));
  };

  // 登录成功 清空表单
  useEffect(() => {
    if (auth.signin.loaded && auth.signin.success) {
      form.resetFields();
    }
  }, [auth, form]);

  // 离开页面 重置状态
  useEffect(() => {
    return () => {
      dispatch(resetSignin());
    };
  }, []);

  return (
    <Layout title="登录" subTitle="嘿，小伙伴，立即登录到拉勾电商系统吧">
      <Form form={form} onFinish={onFinish}>
        <Form.Item name="email" label="邮箱">
          <Input />
        </Form.Item>
        <Form.Item name="password" label="密码">
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
