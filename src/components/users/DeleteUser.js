import React, { useState } from "react";
import { Modal, Button } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import axios from "../../services/axios";

function DeleteUser({ users, value, setUsers }) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    axios.delete(`api/users/${value.id}`);
    setUsers({
      ...users,
      data: users.data.filter((user) => user.id !== value.id),
    });
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div>
      <DeleteOutlined onClick={showModal} />
      <Modal
        title="Delete User"
        visible={isModalVisible}
        onCancel={handleCancel}
        onOk={handleOk}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div key={value.id}>
            <img
              src={value.avatar}
              style={{ borderRadius: "9999px", padding: "12px" }}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <p style={{ fontWeight: "800" }}>ID :&nbsp;</p>
              <p>{value.id}</p>
            </div>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <p style={{ fontWeight: "800" }}>Email : &nbsp;</p>
              <p>{value.email}</p>
            </div>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <p style={{ fontWeight: "800" }}>First Name : &nbsp;</p>
              <p> {value.first_name}</p>
            </div>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <p style={{ fontWeight: "800" }}>Last Name : &nbsp;</p>
              <p> {value.last_name}</p>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default DeleteUser;
