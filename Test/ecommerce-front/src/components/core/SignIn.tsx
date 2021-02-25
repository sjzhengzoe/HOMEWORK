import { Form, Input, Button, Result } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { isAuth, isRole } from "../../helper/auth";
import { resetSignin, signin, SignupPayload } from "../../store/actions/auth.action";
import { Jwt } from "../../store/models/auth";
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

  // 离开页面 重置状态
  useEffect(() => {
    return () => {
      dispatch(resetSignin());
    };
  }, []);

  return (
    <Layout title="登录" subTitle="嘿，小伙伴，立即登录到拉勾电商系统吧">
      {/* 跳转 */}
      {redirectToDashboard()}
      {/* 登录失败 显示失败的提示信息 */}
      {auth.signin.loaded && !auth.signin.success ? (
        <Result status="warning" title="登录失败" subTitle={auth.signin.message} />
      ) : null}

      {/* 登录表单 */}
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
