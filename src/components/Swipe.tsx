import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

export default function Slider() {
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
      slidesPerView={3}
      speed={3000}
    >
      <SwiperSlide>
        <img src="/img/sample1.png" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/img/sample2.png" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/img/sample3.png" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/img/sample4.png" />
      </SwiperSlide>
    </Swiper>
  );
}
