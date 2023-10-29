import React from "react";

const Button = ({ children, onClick }) => {
  return (
    <button className="outline-btn" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
