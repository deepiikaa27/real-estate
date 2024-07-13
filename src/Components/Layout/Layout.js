import React from "react";
import Routers from "../../Routers/Routers";
import Header from "../Header/Header";

const Layout = () => {
  return (
    <div style={{ backgroundColor: "#122B49", height: "100vh" }}>
      <Header />
      <div>
        <Routers />
      </div>
    </div>
  );
};

export default Layout;
