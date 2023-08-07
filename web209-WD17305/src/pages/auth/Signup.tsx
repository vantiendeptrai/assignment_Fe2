import React from "react";
import { Button, Checkbox, Form, Input, message } from "antd";
import { useRegisterMutation } from "@/api/auth";

interface RegisterResponse {
  data: {
    token: string;
  };
}

const SignUp: React.FC = () => {
  const [register, { isLoading }] = useRegisterMutation();

  const onFinish = async (values: any) => {
    try {
      const { username, password } = values;

      const response = await register({ username, password });
      console.log(response);
      if (response.data?.token) {
        // Handle successful registration here
        message.success("Registration successful!");
      } else {
        // Handle registration failure here
        message.error("Registration failed. Please try again later.");
      }
    } catch (error) {
      console.error("Registration failed:", error);
      message.error("Registration failed. Please try again later.");
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="email"
        name="email"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{ offset: 8, span: 16 }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit" loading={isLoading}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default SignUp;
