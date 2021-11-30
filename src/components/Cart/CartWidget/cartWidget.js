import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { useCartContext } from "../../../context/cartContext";

export const CartWidget = () => {
  const { totalItems } = useCartContext();

  return (
    <div className="iconsNavBar">
      <NavLink to="/cart">
        <FontAwesomeIcon icon={faShoppingCart} />{" "}
      </NavLink>
      <sup className="cartLength">({totalItems})</sup>
    </div>
  );
};
