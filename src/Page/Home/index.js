import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Button } from "@mui/material";
import HomerBanner from "../../Components/HomeBanner";
import banner1 from "../../assets/images/banner1.jpg";
import { IoIosArrowRoundForward } from "react-icons/io";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

import ProductItem from "../../Components/ProductItem";

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
              <div className="product_row w-100 mt-4">
                <Swiper
                  slidesPerView={4}
                  spaceBetween={0}
                  pagination={{
                    clickable: true,
                  }}
                  modules={Navigation}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <ProductItem />
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductItem />
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductItem />
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductItem />
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductItem />
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductItem />
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Home;
