import { LuShirt } from "react-icons/lu";
import { TbTruckDelivery } from "react-icons/tb";
import { RiDiscountPercentLine } from "react-icons/ri";
import { LuCircleDollarSign } from "react-icons/lu";
import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="topInfo row">
          <div className="col d-flex align-items-center">
            <span>
              <LuShirt />
            </span>
            <span className="ml-2">Producto cárnicos de uso diario</span>
          </div>
          <div className="col d-flex align-items-center">
            <span>
              <TbTruckDelivery />
            </span>
            <span className="ml-2">Envío gratis en pedidos mas $70</span>
          </div>
          <div className="col d-flex align-items-center">
            <span>
              <RiDiscountPercentLine />
            </span>
            <span className="ml-2">Mega descuentos diarios</span>
          </div>
          <div className="col d-flex align-items-center">
            <span>
              <LuCircleDollarSign />
            </span>
            <span className="ml-2">El mejor precio del mercado</span>
          </div>
        </div>

        <div className="row mt-5 linksWrap">
          <div className="col">
            <h5>FRUTAS & VEGETALES</h5>
            <ul>
              <li>
                <Link to="#">Frutas y Verduras</Link>
              </li>
              <li>
                <Link to="#">Hierbas y condimentos</Link>
              </li>
              <li>
                <Link to="#">Frutas frescas</Link>
              </li>
              <li>
                <Link to="#">Cortes y brotes</Link>
              </li>
              <li>
                <Link to="#">Frutas y verduras exóticas</Link>
              </li>
              <li>
                <Link to="#">Productos envasados</Link>
              </li>
              <li>
                <Link to="#">Bandejas para fiestas</Link>
              </li>
            </ul>
          </div>
          <div className="col">
            <h5>DESAYUNO Y LACTEOS</h5>
            <ul>
              <li>
                <Link to="#">Frutas y Verduras</Link>
              </li>
              <li>
                <Link to="#">Hierbas y condimentos</Link>
              </li>
              <li>
                <Link to="#">Frutas frescas</Link>
              </li>
              <li>
                <Link to="#">Cortes y brotes</Link>
              </li>
              <li>
                <Link to="#">Frutas y verduras exóticas</Link>
              </li>
              <li>
                <Link to="#">Productos envasados</Link>
              </li>
              <li>
                <Link to="#">Bandejas para fiestas</Link>
              </li>
            </ul>
          </div>
          <div className="col">
            <h5>CARNE Y MARISCOS</h5>
            <ul>
              <li>
                <Link to="#">Frutas y Verduras</Link>
              </li>
              <li>
                <Link to="#">Hierbas y condimentos</Link>
              </li>
              <li>
                <Link to="#">Frutas frescas</Link>
              </li>
              <li>
                <Link to="#">Cortes y brotes</Link>
              </li>
              <li>
                <Link to="#">Frutas y verduras exóticas</Link>
              </li>
              <li>
                <Link to="#">Productos envasados</Link>
              </li>
              <li>
                <Link to="#">Bandejas para fiestas</Link>
              </li>
            </ul>
          </div>
          <div className="col">
            <h5>BEBIDAS</h5>
            <ul>
              <li>
                <Link to="#">Frutas y Verduras</Link>
              </li>
              <li>
                <Link to="#">Hierbas y condimentos</Link>
              </li>
              <li>
                <Link to="#">Frutas frescas</Link>
              </li>
              <li>
                <Link to="#">Cortes y brotes</Link>
              </li>
              <li>
                <Link to="#">Frutas y verduras exóticas</Link>
              </li>
              <li>
                <Link to="#">Productos envasados</Link>
              </li>
              <li>
                <Link to="#">Bandejas para fiestas</Link>
              </li>
            </ul>
          </div>
          <div className="col">
            <h5>PANADERIA</h5>
            <ul>
              <li>
                <Link to="#">Frutas y Verduras</Link>
              </li>
              <li>
                <Link to="#">Hierbas y condimentos</Link>
              </li>
              <li>
                <Link to="#">Frutas frescas</Link>
              </li>
              <li>
                <Link to="#">Cortes y brotes</Link>
              </li>
              <li>
                <Link to="#">Frutas y verduras exóticas</Link>
              </li>
              <li>
                <Link to="#">Productos envasados</Link>
              </li>
              <li>
                <Link to="#">Bandejas para fiestas</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="copyright mt-3 pt-3 pb-3 d-flex">
          <p className="mb-0">
            Copyright 2024. Todos los derechos reservados. Desarrollado por
            Cristian Villalobos
          </p>
          <ul className="list list-inline ml-auto mb-0">
            <li className="list-inline-item">
              <Link to="#">
                <FaInstagram />
              </Link>
            </li>
            <li className="list-inline-item">
              <Link to="#">
                <FaLinkedin />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
