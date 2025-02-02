import React from "react";

const Footer = () => {
  return (
    <footer className="text-[#262626] text-center py-4">
      <p className="text-sm">© {new Date().getFullYear()} MIK. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;