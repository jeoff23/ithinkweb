import React, { useEffect, useState } from "react";
import { FileAddOutlined } from "@ant-design/icons";
import { Modal } from "antd";
import { Form, Input, Button, Checkbox } from "antd";
import axiosInstance from "../../services/axios";

function AddUser({ users, setUsers }) {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const layout = {
    labelCol: { span: 5 },
    wrapperCol: { span: 16 },
  };
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    let response = await axiosInstance.post("api/users", values);
    const newUsers = { ...users, data: [...users.data, response.data] };
    setUsers(newUsers);
    setIsModalVisible(false);
  };

  return (
    <div>
      <Button
        type="primary"
        style={{
          background: "#096dd9",
          borderRadius: "0.75rem",
          fontWeight: "500",
          margin: "8px",
        }}
        onClick={showModal}
      >
        <FileAddOutlined />
        Add Account
      </Button>

      <Modal
        title="Add User"
        visible={isModalVisible}
        footer={null}
        onCancel={handleCancel}
      >
        <div style={{ fontWeight: "bolder" }}>
          <Form {...layout} form={form} onFinish={onFinish}>
            <Form.Item
              label="Email"
              name="email"
              rules={[{ required: true, message: "Please input your email!" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="First Name"
              name="firstName"
              rules={[
                { required: true, message: "Please input your First Name!" },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Last Name"
              name="lastName"
              rules={[
                { required: true, message: "Please input your Last Name!" },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item>
              <Button key="back" onClick={handleCancel}>
                Return
              </Button>
              <Button htmlType="submit" type="primary">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Modal>
    </div>
  );
}

export default AddUser;
