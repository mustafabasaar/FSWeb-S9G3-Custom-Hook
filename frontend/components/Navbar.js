import React from "react";

const Navbar = (props) => {
  const { geceModu, toggleGeceModu } = props;
  return (
    <nav className="navbar">
      <h1>Kripto İzleyici</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleGeceModu}
          className={geceModu ? "toggle toggled" : "toggle"}
        />
      </div>
    </nav>
  );
};

export default Navbar;
