import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faUser } from "@fortawesome/free-solid-svg-icons";
export const CartWidget = () => {
  return (
    <div className="iconsNavBar">
      <FontAwesomeIcon className="cartWidget" icon={faShoppingCart} />
      <FontAwesomeIcon icon={faUser} />
    </div>
  );
};
