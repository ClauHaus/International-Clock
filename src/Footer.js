import React from "react";

const Footer = () => {
  const actualYear = new Date().getFullYear();
  return (
    <section className="footer">Powered by ClauHaus ⚡ © {actualYear}</section>
  );
};

export default Footer;
