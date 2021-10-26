import {
  faHome,
  faIdBadge,
  faShoppingBag,
  faStore,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export const Menu = ({ className }) => {
  const defaultClass = "linksMenu ";

  return (
    <div className={defaultClass + className}>
      <a href="/#" className="active">
        <FontAwesomeIcon icon={faHome} /> Inicio
      </a>
      <a href="/#">
        <FontAwesomeIcon icon={faStore} /> Tienda
      </a>
      <a href="/#">
        <FontAwesomeIcon icon={faIdBadge} /> Contacto
      </a>
      <a href="/#">
        <FontAwesomeIcon icon={faShoppingBag} /> Como comprar
      </a>
    </div>
  );
};
