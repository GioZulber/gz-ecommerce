import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faUser } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { useCartContext } from "../../../context/cartContext";
export const CartWidget = () => {
  const { cart } = useCartContext();
  return (
    <div className="iconsNavBar">
      <NavLink to="/cart">
        <FontAwesomeIcon icon={faShoppingCart} />{" "}
      </NavLink>
      <p className="cartLength">({cart.length})</p>
      <FontAwesomeIcon className="iconUser" icon={faUser} />
    </div>
  );
};
