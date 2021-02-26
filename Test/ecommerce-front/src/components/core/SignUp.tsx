import { Form, Input, Button, Result } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { isAuth, isRole } from "../../helpers/auth";
import { resetSignup, signup, SignupPayload } from "../../store/actions/auth.action";
import { AppState } from "../../store/reducers";
import { AuthState } from "../../store/reducers/auth.reducer";
import Layout from "./Layout";

export default function SignUp() {
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  //   获取注册结果
  const auth = useSelector<AppState, AuthState>((state) => state.auth);

  //   注册表单提交
  const onFinish = (value: SignupPayload) => {
    dispatch(signup(value));
  };

  //   注册成功 清空表单
  useEffect(() => {
    if (auth.signup.loaded && auth.signup.success) {
      form.resetFields();
    }
  }, [auth, form]);

  // 跳转dashboard 不是刚注册成功的情况
  const redirectToDashboard = () => {
    const auth = isAuth();
    if (auth) {
      if (!isRole) {
        //  用户
        return <Redirect to="/user/dashboard" />;
      } else {
        // 管理员
        return <Redirect to="/admin/dashboard" />;
      }
    }
  };

  //   离开页面 重置状态
  useEffect(() => {
    return () => {
      dispatch(resetSignup());
    };
  }, []);

  return (
    <Layout title="注册" subTitle="">
      {!auth.signup.loaded && !auth.signup.success && redirectToDashboard()}
      {/* 注册成功 显示成功的提示信息， */}
      {auth.signup.loaded && auth.signup.success ? (
        <Result
          status="success"
          title="注册成功"
          extra={[
            <Button type="primary">
              <Link to="/signin">登录</Link>
            </Button>,
          ]}
        />
      ) : null}

      {/* 注册失败 显示失败的提示信息 */}
      {auth.signup.loaded && !auth.signup.success ? (
        <Result status="warning" title="注册失败" subTitle={auth.signup.message} />
      ) : null}

      {/* 注册表单 */}
      <Form form={form} onFinish={onFinish}>
        <Form.Item name="name" label="昵称">
          <Input />
        </Form.Item>
        <Form.Item name="password" label="密码">
          <Input.Password />
        </Form.Item>
        <Form.Item name="email" label="邮箱">
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            注册
          </Button>
        </Form.Item>
      </Form>
    </Layout>
  );
}
