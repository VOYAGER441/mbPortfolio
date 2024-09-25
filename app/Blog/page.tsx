import React from "react";
import Navbar from "../component/Navbar";

function page() {
  return (
    <>
            <Navbar />
      <div
        style={{
          minHeight: "100vh",
          backgroundColor: "#000",
          color: "black",
          textDecoration:"none"
        }}
        className="container-fluid"
      >
      </div>
    </>
  );
}

export default page;
