import React from "react";

const Navigation = ({ onClick }) => {
  return (
    <nav style={{ display: "flex", justifyContent: "flex-end" }}>
      <p
        className="f4 link dim black underline mt3 mr4 pointer"
        onClick={onClick}
      >
        Sign Out
      </p>
    </nav>
  );
};

export default Navigation;
