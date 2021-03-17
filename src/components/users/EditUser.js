import React, { useState } from "react";
import { Input } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { EditOutlined } from "@ant-design/icons";
import { Form, Modal, Button } from "antd";
import axios from "../../services/axios";

function EditUser({ value, users, setUsers }) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };

  const layout = {
    labelCol: { span: 5 },
    wrapperCol: { span: 16 },
  };

  const [form] = Form.useForm();

  const onFinish = async (data) => {
    const response = await axios.put(`api/users/${value.id}`, data);

    setUsers({
      ...users,
      data: users.data.map((user) => {
        if (user.id === value.id) {
          response.data.id = value.id;
          response.data.avatar = value.avatar;
          return response.data;
        }
        return user;
      }),
    });

    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div style={{}}>
      <EditOutlined onClick={showModal} />

      <Modal
        title="Edit User"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <Form {...layout} form={form} onFinish={onFinish} initialValues={value}>
          <div
            style={{
              fontWeight: "bolder",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <img src={value.avatar} style={{ borderRadius: "9999px" }} />
            <h2>{value.id}</h2>
            <Form.Item
              label="Email"
              name="email"
              style={{
                width: "80%",
              }}
            >
              <Input
                size="medium"
                placeholder="Your Email"
                prefix={<UserOutlined />}
              />
            </Form.Item>
            <Form.Item
              label="First Name"
              name="first_name"
              style={{
                width: "80%",
              }}
            >
              <Input
                placeholder="Your First Name"
                prefix={<UserOutlined />}
                style={{}}
              />
            </Form.Item>
            <Form.Item
              label="Last Name"
              name="last_name"
              style={{
                width: "80%",
              }}
            >
              <Input
                size="medium"
                placeholder="Your Last Name"
                prefix={<UserOutlined />}
              />
            </Form.Item>
            <Form.Item
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "row",
                width: "50%",
              }}
            >
              <Button key="back" onClick={handleCancel}>
                Return
              </Button>
              <Button htmlType="submit" type="primary">
                Submit
              </Button>
            </Form.Item>
          </div>
        </Form>
      </Modal>
    </div>
  );
}

export default EditUser;
