import React from "react";

const Layout = ({ children }) => {
  return (
    <>
      <header className="header">{/* Add your header content here */}</header>
      <main className="main">{children}</main>
      <footer className="footer">{/* Add your footer content here */}</footer>
    </>
  );
};

export default Layout;
