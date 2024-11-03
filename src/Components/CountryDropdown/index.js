import React from "react";
import { Button } from "@mui/material";
import { FaAngleDown } from "react-icons/fa6";
import Dialog from "@mui/material/Dialog";
import { IoIosSearch } from "react-icons/io";
import { MdClose } from "react-icons/md";
import { useState } from "react";
import Slide from "@mui/material/Slide";

const Transition = React.forwardRef(function Transition(props, ref){
    return <Slide direction="up" ref={ref} {...props}/>;
});

const CountryDropdown = () => {
    const [isOpenModal, setisOpenModal] = useState(false);
  return (
    <>
      <Button className="countryDrop" onClick={()=>setisOpenModal(true)}>
        <div className="info d-flex flex-column">
          <span className="label">Tu Ubicacion</span>
          <span className="name">Chile</span>
        </div>
        <span className="ml-auto">
          <FaAngleDown />
        </span>
      </Button>
      <Dialog open={isOpenModal} onClose={()=>setisOpenModal(false)} className="locationModal" TransitionComponent={Transition}>
        <h4 className="mb-0">Elige tu lugar de entrega</h4>
        <p>Introduce tu dirección y te concretaremos la oferta para tu zona</p>
        <Button className="close_" onClick={()=>setisOpenModal(false)}>
          <MdClose />
        </Button>
        <div className="headerSearch w-100">
          <input type="text" placeholder="Busca tu zona..." />
          <Button>
            <IoIosSearch />
          </Button>
        </div>
        <ul className="countryList mt-3">
          <li>
            <Button onClick={()=>setisOpenModal(false)}>Delhi</Button>
          </li>
          <li>
            <Button onClick={()=>setisOpenModal(false)}>Sri Lanka</Button>
          </li>
          <li>
            <Button onClick={()=>setisOpenModal(false)}>Pakistan</Button>
          </li>
          <li>
            <Button onClick={()=>setisOpenModal(false)}>Delhi</Button>
          </li>
          <li>
            <Button onClick={()=>setisOpenModal(false)}>Sri Lanka</Button>
          </li>
          <li>
            <Button onClick={()=>setisOpenModal(false)}>Pakistan</Button>
          </li>
          <li>
            <Button onClick={()=>setisOpenModal(false)}>Delhi</Button>
          </li>
          <li>
            <Button onClick={()=>setisOpenModal(false)}>Sri Lanka</Button>
          </li>
          <li>
            <Button onClick={()=>setisOpenModal(false)}>Pakistan</Button>
          </li>
        </ul>
      </Dialog>
    </>
  );
};
export default CountryDropdown;
