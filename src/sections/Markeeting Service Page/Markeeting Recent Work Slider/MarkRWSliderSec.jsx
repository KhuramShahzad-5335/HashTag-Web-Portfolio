// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper/modules";

function MarkRWSliderSec() {
  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide className="slider">
          <img src="/1.png" alt="" />
        </SwiperSlide>
        <SwiperSlide className="slider">
          <img src="/2.png" alt="" />
        </SwiperSlide>
        <SwiperSlide className="slider">
          <img src="/3.png" alt="" />
        </SwiperSlide>
        <SwiperSlide className="slider">
          <img src="/4.png" alt="" />
        </SwiperSlide>
        <SwiperSlide className="slider">
          <img src="/5.png" alt="" />
        </SwiperSlide>
        <SwiperSlide className="slider">
          <img src="/6.png" alt="" />
        </SwiperSlide>
        <SwiperSlide className="slider">
          <img src="/1.png" alt="" />
        </SwiperSlide>
        <SwiperSlide className="slider">
          <img src="/4.png" alt="" />
        </SwiperSlide>
        <SwiperSlide className="slider">
          <img src="/2.png" alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default MarkRWSliderSec;
