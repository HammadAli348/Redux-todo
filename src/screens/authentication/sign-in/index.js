import { useDispatch, useSelector } from "react-redux";

import { Button, Form, Input, Typography } from "antd";

import { SignInAction } from "../../../redux/actions";

import { useNavigate } from "react-router-dom";

import "antd/dist/antd.css";
import "./signin.css";

const SignIn = () => {
  const { Title } = Typography;
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const onFinish = (values) => {
    dispatch(SignInAction(values));
    navigate("/todo");
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const state = useSelector((state) => state);

  console.log(state);

  return (
    <div className="auth__form">
      <Title level={3}>Login </Title>
      <Form
        name="basic"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            log in
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default SignIn;
