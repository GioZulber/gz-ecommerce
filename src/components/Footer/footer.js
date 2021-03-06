import {
  faInstagram,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Footer = () => {
  return (
    <footer>
      <div className="container divContainer">
        <div className="divFooter">
          <div className="divFooterColumn">
            <div className="divFooterTitle">Tienda.</div>
            <ul className="divFooterList">
              <li>Quienes Somos</li>
              <li>Preguntas Frecuentes</li>
              <li>Formas de Pago</li>
            </ul>
          </div>
          <div className="divFooterColumn">
            <div className="divFooterTitle">Compras.</div>
            <ul className="divFooterList">
              <li>Quienes Somos</li>
              <li>Preguntas Frecuentes</li>
              <li>Formas de Pago</li>
            </ul>
          </div>
          <div className="divFooterColumn">
            <div className="divFooterTitle">Contacto.</div>
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
        <div className="divNombre">
          <p>
            Hecho por Giovanni Zulberti{" "}
            <a
              href="https://www.linkedin.com/in/giovanni-zulberti/"
              className="linkedinLink"
            >
              <FontAwesomeIcon className="linkedinIcon" icon={faLinkedin} />
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
