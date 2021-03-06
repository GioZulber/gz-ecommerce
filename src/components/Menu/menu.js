import { faHome, faIdBadge } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { NavLink } from "react-router-dom";
import { Nav, NavDropdown } from "react-bootstrap";
const categories = [
  { url: "tijera", label: "Tijeras" },
  { url: "maquina", label: "Maquinas" },
  { url: "accesorio", label: "Accesorios" },
];
export const Menu = ({ className }) => {
  const defaultClass = "linksMenu ";
  return (
    <div className={defaultClass + className}>
      <NavLink to={`/`} activeClassName="active">
        <FontAwesomeIcon icon={faHome} /> Inicio
      </NavLink>
      <Nav>
        <NavDropdown
          id="nav-dropdown-dark"
          title="Categorias"
          menuVariant="dark"
        >
          {categories.map(({ url, label }) => (
            <NavLink key={url} to={`/category/${url}`} activeClassName="active">
              <NavDropdown.Item href="#action/3.1">{label}</NavDropdown.Item>
            </NavLink>
          ))}
        </NavDropdown>
      </Nav>

      <NavLink to="/contacto" activeClassName="active">
        <FontAwesomeIcon icon={faIdBadge} /> Contacto
      </NavLink>
    </div>
  );
};
