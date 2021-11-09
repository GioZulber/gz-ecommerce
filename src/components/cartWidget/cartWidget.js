import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faUser } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
export const CartWidget = () => {
  return (
    <div className="iconsNavBar">
      <NavLink to="/cart">
        <FontAwesomeIcon className="cartWidget" icon={faShoppingCart} />
      </NavLink>
      <FontAwesomeIcon icon={faUser} />
    </div>
  );
};
