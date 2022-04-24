import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { StyledBanner, StyledTitleBox } from "./Banner.styles";
import { ReleaseInterface } from "../../interfaces/ReleaseInterface";
import { SwiperSlideComponent } from "../SwiperSlideComponent/SwiperSlideComponent";
import { TitleComponent } from "../TitleComponent/TitleComponent";
import React, { useState } from "react";
import { SwiperButtonsComponent } from "../SwiperButtonsComponent/SwiperButtonsComponent";

export const BannerComponent = ({ releases }: any) => {
  const [currentSlide, setCurrentSlide] = useState(0);
//  console.log(releases);
  return (
    <StyledBanner>
      <Swiper
        initialSlide={0}
        spaceBetween={18}
        slidesPerView={1.1}
        onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex)}
        breakpoints={{
          1200: {
            width: 1200,
            slidesPerView: 2,
          },
          768: {
            width: 768,
            slidesPerView: 1.5,
          },
          640: {
            width:640,
            slidesPerView:1.2
          }
        }}
      >
        <StyledTitleBox>
          <TitleComponent fontSize="2rem">
            New releases
          </TitleComponent>
          <SwiperButtonsComponent />
        </StyledTitleBox>

        {releases.map((release: ReleaseInterface, index:number) => (
          <SwiperSlide key={release.id}>
            <SwiperSlideComponent slide={release} active={currentSlide === index ? true : false} />
          </SwiperSlide>
        ))}
      </Swiper>
    </StyledBanner>
  );
};
