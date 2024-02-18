import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import "../style/SwipeStyle.css";
import cut from "../images/cut.jpeg";
import ny1 from "../images/home3.jpeg";
import ny2 from "../images/home4.jpeg";
import mexican from "../images/mexicanfood.jpeg";

export default function SampleSlider() {
  return (
    <Swiper
      className="sample-slider"
      modules={[Autoplay]}
      loop={true}
      autoplay={{
        delay: 0,
        pauseOnMouseEnter: true, // ホバーした時に自動再生を停止する
        disableOnInteraction: false, // ホバー外した時に自動再生を再開する
        reverseDirection: true, // 自動再生を逆向きにする
      }}
      slidesPerView={5}
      speed={3000}
    >
      <SwiperSlide>
        <img src={cut} alt="cut_image" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={ny1} alt="ny_image1" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={ny2} alt="ny_image2" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={mexican} alt="mexicanfood_image" />
      </SwiperSlide>
    </Swiper>
  );
}
