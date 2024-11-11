import { Button, Dialog } from "@mui/material";
import { MdClose } from "react-icons/md";

const ProductModal = (props) => {
  return (
    <>
      <Dialog
        open={true}
        className="productModal"
        onClose={() => props.closeProductModal()}>
        <Button className="close_" onClick={() => props.closeProductModal()}>
          <MdClose />
        </Button>
        <h4 className="mb-0">
          Albóndigas de pollo al estilo italiano totalmente naturales
        </h4>
        <div className="d-flex align-items-center">
          <div className="d-flex align-items-center">
            <span>Marcas:</span>
            <span className="ml-2">De Welch </span>
          </div>
        </div>
      </Dialog>
    </>
  );
};
export default ProductModal;
