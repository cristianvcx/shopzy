import { Button } from "@mui/material";
import { IoIosMenu } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <div className="container">
        <div className="row">
          <div className="col-sm-2 navPart1">
            <Button className="allCatTab align-items-center">
              <span className="icon1 mr-2">
                <IoIosMenu />
              </span>
              <span class="text">Categorias</span>
              <span className="icon2 ml-2">
                <FaAngleDown />
              </span>
            </Button>
          </div>
          <div className="col-sm-10 navPart2 d-flex align-items-center">
            <ul className="list list-inline ml-auto">
                <li className="list-inline-item">
                    <Link to="/"><Button>Inicio</Button></Link>
                </li>
                <li className="list-inline-item">
                    <Link to="/"><Button>Moda</Button></Link>
                </li>
                <li className="list-inline-item">
                    <Link to="/"><Button>Electronica</Button></Link>
                </li>
                <li className="list-inline-item">
                    <Link to="/"><Button>Panaderia</Button></Link>
                </li>
                <li className="list-inline-item">
                    <Link to="/"><Button>Comestible</Button></Link>
                </li>
                <li className="list-inline-item">
                    <Link to="/"><Button>Movil</Button></Link>
                </li>
                <li className="list-inline-item">
                    <Link to="/"><Button>Blog</Button></Link>
                </li>
                <li className="list-inline-item">
                    <Link to="/"><Button>Contacto</Button></Link>
                </li>
            </ul>    
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navigation;
