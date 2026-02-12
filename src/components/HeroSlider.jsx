import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "../page/home/Home.css";
import BannerOne from "../img/banner_Hero1.jpg"
import BannerTwo from "../img/banner_Hero2.jpg"
import BannerThree from "../img/banner_Hero3.jpg"
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const HeroSlider = () => {
  return (
    <>
      <div className="hero_slider">
        <div className="container">
          <Swiper
            loop = {true}
            autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            }}
            pagination={{
              dynamicBullets: true,
            }}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="content">
                  <h4>Introducing the new</h4>
                  <h3>Microsoft Xbox <br /> 360 controller</h3>
                  <p>Windows Xp/10/7/8 ps3 , Tv Box</p>
                  <a href="/" className="btn">Shop Now</a>
              </div>
              <img src={BannerOne} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <div className="content">
                  <h4>new arrival</h4>
                  <h3>xiaomi air 75 <br /> Earbuds</h3>
                  <p>AAC HD Sound Quality</p>
                  <a href="/" className="btn">Shop Now</a>
              </div>
              <img src={BannerTwo} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <div className="content">
                  <h4>mini-x6u speaker</h4>
                  <h3>led bluetooth <br /> speaker lamp</h3>
                  <p>support 3.5 mm jack audio input</p>
                  <a href="/" className="btn">Shop Now</a>
              </div>
              <img src={BannerThree} alt="" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default HeroSlider;
