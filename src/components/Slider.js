
import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

export default function App() {
  const [swiper, setSwiper] = useState(null);

  useEffect(() => {
    if (swiper) {
      const interval = setInterval(() => {
        if (swiper.isEnd) {
          swiper.slideTo(0); // Go to the first slide if at the end
        } else {
          swiper.slideNext(); // Go to the next slide
        }
      }, 3000); // Set the autoplay delay to 3000ms (3 seconds)

      return () => {
        clearInterval(interval);
      };
    }
  }, [swiper]);

  return (
    <div className="container ">
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
        onSwiper={setSwiper} // Correctly set the 'swiper' variable
      >
        <SwiperSlide>
          <img src="images/slider-badag.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/slider-scale.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/slider-badging.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/slider-scales.jpg" alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}


