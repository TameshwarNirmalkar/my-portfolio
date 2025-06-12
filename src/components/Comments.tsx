"use client";

import React, { memo } from "react";
import type { FormProps } from "antd";
import { Button, Form, Input } from "antd";

type FieldType = {
  client_name: string;
  email: string;
  comments: string;
};

const { TextArea } = Input;

const Comments: React.FC<{ onFinishHandler: (e: FieldType) => void }> = ({ onFinishHandler }) => {
  const [commentForm] = Form.useForm();

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    onFinishHandler(values);
    commentForm.resetFields();
  };

  return (
    <div>
      <Form
        form={commentForm}
        name="commentForm"
        layout="vertical"
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
        initialValues={{}}
        onFinish={onFinish}
        // onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item<FieldType>
          label="Full Name"
          name="client_name"
          rules={[{ required: true, message: "Please enter your name!" }]}
        >
          <Input />
        </Form.Item>

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
