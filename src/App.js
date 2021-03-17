import React from "react";
import { Button } from "antd";
import classes from "./App.less";
import UsersList from "./components/users/Users";
import { Layout } from "antd";
import { HomeOutlined, UserSwitchOutlined } from "@ant-design/icons";
import { NavLink, Route, Switch } from "react-router-dom";

import Home from "./components/Home";
function App() {
  const { Header, Footer, Sider, Content } = Layout;
  return (
    <div>
      <Layout style={{ minHeight: "100vh" }}>
        <Sider
          style={{
            background: "#434343",
            boxShadow: "10px 15px 10px 5px",
            height: "",
          }}
        >
          <NavLink to="/">
            <Button
              type="primary"
              style={{
                background: "#8c8c8c",
                padding: "20px 50px 20px 50px",
                marginTop: "20px",
                marginLeft: "15px",
                fontSize: "15px",
                borderColor: "white",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontWeight: "bold",
                borderRadius: "0.75rem",
              }}
            >
              <HomeOutlined />
              Home
            </Button>
          </NavLink>
          <NavLink to="/users">
            <Button
              type="primary"
              style={{
                background: "#8c8c8c",
                padding: "20px 55px 20px 50px",
                marginTop: "15px",
                marginLeft: "15px",
                fontSize: "15px",
                borderColor: "white",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontWeight: "bold",
                borderRadius: "0.75rem",
              }}
            >
              <UserSwitchOutlined />
              Users
            </Button>
          </NavLink>
        </Sider>
        <Layout
          style={{
            background: "#d9d9d9",
          }}
        >
          <Content
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Switch>
              <Route component={UsersList} path="/users" />
              <Route component={Home} path="/" />
            </Switch>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
