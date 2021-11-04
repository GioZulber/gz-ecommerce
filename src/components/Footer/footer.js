import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Footer = () => {
  return (
    <footer>
      <div className="container divContainer">
        <div className="divFooter">
          <div className="divFooterColumn">
            <div className="divFooterTitle">TIENDA</div>
            <ul className="divFooterList">
              <li>Quienes Somos</li>
              <li>Preguntas Frecuentes</li>
              <li>Formas de Pago</li>
            </ul>
          </div>
          <div className="divFooterColumn">
            <div className="divFooterTitle">COMPRAS</div>
            <ul className="divFooterList">
              <li>Quienes Somos</li>
              <li>Preguntas Frecuentes</li>
              <li>Formas de Pago</li>
            </ul>
          </div>
          <div className="divFooterColumn">
            <div className="divFooterTitle">CONTACTO</div>
            <ul className="divFooterList">
              <li>
                <FontAwesomeIcon icon={faWhatsapp} className="iconsFooter" />
              </li>
              <li>
                <FontAwesomeIcon icon={faInstagram} className="iconsFooter" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
