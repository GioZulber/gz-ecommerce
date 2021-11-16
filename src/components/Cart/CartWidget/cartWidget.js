import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faUser } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { useCartContext } from "../../../context/cartContext";
// import { Cart } from "../cart";
export const CartWidget = () => {
  const { totalItems } = useCartContext();

  return (
    <div className="iconsNavBar">
      <NavLink to="/cart">
        <FontAwesomeIcon icon={faShoppingCart} />{" "}
      </NavLink>
      <sup className="cartLength">({totalItems})</sup>
      <FontAwesomeIcon className="iconUser" icon={faUser} />
    </div>
  );
};
