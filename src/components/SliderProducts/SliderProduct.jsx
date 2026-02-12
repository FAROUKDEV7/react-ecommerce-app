import Product from "./Product";
import "./SliderProduct.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";

const SliderProduct = ({ data, title }) => {
  return (
    <>
      <div className="slider_product">
        <div className="container">
          <div className="main_content">
            <h2>{title}</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          </div>

          <Swiper
            loop={true}
            navigation={true}
            modules={[Autoplay, Navigation]}
            className="mySwiper"
            slidesPerView={4}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
          >
            {data.map((item) => {
              return (
                <SwiperSlide>
                  <Product item={item}/>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default SliderProduct;
