import React, { useState } from "react";
import logo from "../../images/logoBarberFinal.png";
import { Menu } from "../Menu/menu";
import { CartWidget } from "../Cart/CartWidget/cartWidget";

export const NavBar = () => {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => {
    return setOpen(!open);
  };

  return (
    <nav>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>

      <Menu className={open ? "two" : "one"} />

      <CartWidget />

      <div className="icon" id="icon">
        {<span onClick={toggleOpen}> &#9776;</span>}
      </div>
    </nav>
  );
};
