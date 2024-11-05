import React from "react";
import Slider from "react-slick";
import { Button } from "@mui/material";
import HomerBanner from "../../Components/HomeBanner";
import banner1 from "../../assets/images/banner1.jpg";
import { IoIosArrowRoundForward } from "react-icons/io";

const Home = () => {
  var productSliderOptions = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <>
      <HomerBanner />
      <section className="homeProducts">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="banner">
                <img src={banner1} className="cursor w-100" />
              </div>
            </div>
            <div className="col-md-9 productRow">
              <div className="d-flex align-items-center">
                <div className="info w-75">
                  <h3 className="mb-0 hd">Los mas vendidos</h3>
                  <p className="text-light text-sml mb-0">
                    No te pierdas las ofertas vigentes hasta final de marzo.
                  </p>
                </div>
                <Button className="viewAllBtn ml-auto">
                  Ver Todo <IoIosArrowRoundForward />
                </Button>
              </div>
              <div className="product_row w-100">
                <Slider {...productSliderOptions}>
                  <div className="item productItem">
                    <div className="imgWrapper">
                      <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-3-346x310.jpg" className="w-100" />
                    </div>
                  </div>

                  <div className="item productItem">
                    <div className="imgWrapper">
                      <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-3-346x310.jpg" className="w-100" />
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Home;
