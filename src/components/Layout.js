import React from "react";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div>
      <Header /> {/* Header stays fixed on all pages */}
      <main>{children}</main>
    </div>
  );
};

export default Layout;
