"use client";

import React, { memo } from "react";
import type { FormProps } from "antd";
import { Button, Form, Input } from "antd";

type FieldType = {
  email: string;
  comments: string;
};

const { TextArea } = Input;

const Comments: React.FC = () => {
  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log("Success:", values);
  };

  // const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
  //   console.log("Failed:", errorInfo);
  // };

  return (
    <div>
      <Form
        name="basic"
        layout="vertical"
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
        initialValues={{}}
        onFinish={onFinish}
        // onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item<FieldType>
          label="Email"
          name="email"
          rules={[{ type: "email", required: true, message: "Please input valid email!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="Write your comments!"
          name="comments"
          rules={[{ required: true, message: "Please input your comments!" }]}
        >
          <TextArea rows={4} />
        </Form.Item>

        <Form.Item label={null}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default memo(Comments);
