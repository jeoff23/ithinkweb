import React from "react";

function Home() {
  return (
    <div>
      <div
        style={{
          height: "192px",
          width: "384px",
          border: "2px solid white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          background: "#f0f0f0",
          borderRadius: "1rem",
          boxShadow: "10px 10px 10px 10px",
        }}
      >
        <h1
          style={{
            fontWeight: "bolder",
            fontSize: "36px",
            textColor: "red",
          }}
        >
          Jeoffrey Rico
        </h1>
        <h2>jeoffreyrico@yahoo.com</h2>
      </div>
    </div>
  );
}

export default Home;
