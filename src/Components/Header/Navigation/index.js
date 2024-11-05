import { Button } from "@mui/material";
import { IoIosMenu } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaAngleRight } from "react-icons/fa6";

const Navigation = () => {
  const [isopenSidebarVal, setisopenSidebarVal] = useState(false);
  return (
    <nav>
      <div className="container">
        <div className="row">
          <div className="col-sm-2 navPart1">
            <div className="catWrapper">
              <Button
                className="allCatTab align-items-center"
                onClick={() => setisopenSidebarVal(!isopenSidebarVal)}
              >
                <span className="icon1 mr-2">
                  <IoIosMenu />
                </span>
                <span class="text">Categorias</span>
                <span className="icon2 ml-2">
                  <FaAngleDown />
                </span>
              </Button>
              <div
                className={`sidebarNav ${
                  isopenSidebarVal === true ? "open" : ""
                }`}
              >
                <ul>
                  <li>
                    <Link to="/">
                      <Button>Hombres <FaAngleRight className="ml-auto" /></Button>
                    </Link>
                    <div className="submenu">
                      <Link to="/">
                        <Button>Ropa</Button>
                      </Link>
                      <Link to="/">
                        <Button>Calzado</Button>
                      </Link>
                      <Link to="/">
                        <Button>Relojes</Button>
                      </Link>
                      <Link to="/">
                        <Button>Ropa</Button>
                      </Link>
                      <Link to="/">
                        <Button>Calzado</Button>
                      </Link>
                      <Link to="/">
                        <Button>Relojes</Button>
                      </Link>
                    </div>
                  </li>
                  <li>
                    <Link to="/">
                      <Button>Mujeres <FaAngleRight className="ml-auto" /></Button>
                    </Link>
                    <div className="submenu">
                      <Link to="/">
                        <Button>Ropa</Button>
                      </Link>
                      <Link to="/">
                        <Button>Calzado</Button>
                      </Link>
                      <Link to="/">
                        <Button>Relojes</Button>
                      </Link>
                      <Link to="/">
                        <Button>Ropa</Button>
                      </Link>
                      <Link to="/">
                        <Button>Calzado</Button>
                      </Link>
                      <Link to="/">
                        <Button>Relojes</Button>
                      </Link>
                    </div>
                  </li>
                  <li>
                    <Link to="/">
                      <Button>Bellezas</Button>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <Button>Relojes</Button>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <Button>Niños</Button>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <Button>Regalos</Button>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-sm-10 navPart2 d-flex align-items-center">
            <ul className="list list-inline ml-auto">
              <li className="list-inline-item">
                <Link to="/">
                  <Button>Inicio</Button>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <Button>Hombres</Button>
                </Link>
                <div className="submenu shadow">
                  <Link to="/">
                    <Button>Ropa</Button>
                  </Link>
                  <Link to="/">
                    <Button>Calzado</Button>
                  </Link>
                  <Link to="/">
                    <Button>Relojes</Button>
                  </Link>
                  <Link to="/">
                    <Button>Ropa</Button>
                  </Link>
                  <Link to="/">
                    <Button>Calzado</Button>
                  </Link>
                  <Link to="/">
                    <Button>Relojes</Button>
                  </Link>
                </div>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <Button>Mujeres</Button>
                </Link>
                <div className="submenu shadow">
                  <Link to="/">
                    <Button>Ropa</Button>
                  </Link>
                  <Link to="/">
                    <Button>Calzado</Button>
                  </Link>
                  <Link to="/">
                    <Button>Relojes</Button>
                  </Link>
                </div>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <Button>Bellezas</Button>
                </Link>
                <div className="submenu shadow">
                  <Link to="/">
                    <Button>Ropa</Button>
                  </Link>
                  <Link to="/">
                    <Button>Calzado</Button>
                  </Link>
                  <Link to="/">
                    <Button>Relojes</Button>
                  </Link>
                </div>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <Button>Relojes</Button>
                </Link>
                <div className="submenu shadow">
                  <Link to="/">
                    <Button>Ropa</Button>
                  </Link>
                  <Link to="/">
                    <Button>Calzado</Button>
                  </Link>
                  <Link to="/">
                    <Button>Relojes</Button>
                  </Link>
                </div>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <Button>Niños</Button>
                </Link>
                <div className="submenu shadow">
                  <Link to="/">
                    <Button>Ropa</Button>
                  </Link>
                  <Link to="/">
                    <Button>Calzado</Button>
                  </Link>
                  <Link to="/">
                    <Button>Relojes</Button>
                  </Link>
                </div>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <Button>Regalos</Button>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <Button>Blog</Button>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <Button>Contacto</Button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navigation;
