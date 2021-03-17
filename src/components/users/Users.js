import React, { useEffect, useState } from "react";
import { Table } from "antd";
import axiosInstance from "../../services/axios";

import ViewUser from "./ViewUser";
import DeleteUser from "./DeleteUser";
import AddUser from "./AddUser";
import EditUser from "./EditUser";

function UsersList() {
  const [users, setUsers] = useState([]);

  const [page, setPage] = useState(1);

  useEffect(() => {
    const getData = async () => {
      const response = await axiosInstance.get(`api/users?page=${page}`);
      const data = response.data;

      setUsers(data);
    };
    getData();
  }, [page]);

  const column = [
    {
      title: "ID",
      dataIndex: "id",
      key: users.id,
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Avatar",
      dataIndex: "avatar",
      key: users.avatar,
      render: (text) => <img src={text} style={{ borderRadius: "9999px" }} />,
    },
    {
      title: "Email",
      dataIndex: "email",
      key: users.email,
      render: (text) => <a>{text}</a>,
    },
    {
      title: "First Name",
      dataIndex: "first_name",
      key: users.first_name,
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Last Name",
      dataIndex: "last_name",
      key: users.last_name,
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Action",

      id: "x",
      render: (value) => (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <a>
            <ViewUser value={value} />
          </a>
          &nbsp;
          <a>
            <EditUser users={users} setUsers={setUsers} value={value} />
          </a>
          &nbsp;
          <a>
            <DeleteUser users={users} setUsers={setUsers} value={value} />
          </a>
        </div>
      ),
    },
  ];

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        padding: "6px",
      }}
    >
      <div style={{ textAlign: "right" }}>
        <AddUser users={users} setUsers={setUsers} />
      </div>
      <Table
        columns={column}
        dataSource={users.data}
        style={{ borderRadius: "1.5rem" }}
        pagination={{
          position: "bottom",
          total: users.total,
          onChange: (page) => {
            setPage(page);
          },
        }}
      />
    </div>
  );
}

export default UsersList;
