import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
export const CartWidget = () => {
  return (
    <div className="cartWidget">
      <FontAwesomeIcon icon={faShoppingCart} />
    </div>
  );
};
