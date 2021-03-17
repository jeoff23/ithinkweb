import { useState } from "react";
import React from "react";
import { Modal } from "antd";
import { FundViewOutlined } from "@ant-design/icons";

function ViewUser({ value }) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div>
      <FundViewOutlined onClick={showModal} />

      <Modal
        title="View User"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        >
          <img
            src={value.avatar}
            style={{ borderRadius: "9999px", padding: "12px" }}
          />
          <div>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <p style={{ fontWeight: "700" }}>ID :&nbsp;</p>
              <p>{value.id}</p>
            </div>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <p style={{ fontWeight: "700" }}>Email : &nbsp;</p>
              <p>{value.email}</p>
            </div>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <p style={{ fontWeight: "700" }}>First Name : &nbsp;</p>
              <p> {value.first_name}</p>
            </div>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <p style={{ fontWeight: "700" }}>Last Name : &nbsp;</p>
              <p> {value.last_name}</p>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default ViewUser;
