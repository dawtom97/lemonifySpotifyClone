import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { StyledButtons, StyledWrapper } from "./ContentSwiper.styles";
import { TitleComponent } from "../TitleComponent/TitleComponent";
import { SwiperButtonsComponent } from "../SwiperButtonsComponent/SwiperButtonsComponent";
import { ContentCardComponent } from "../ContentCardComponent/ContentCardComponents";
import Link from "next/link";

export const ContentSwiperComponent = ({ content, title }:any) => {
  return (
    <StyledWrapper>
      <Swiper
        initialSlide={0}
        spaceBetween={18}
        slidesPerView={2}
        breakpoints={{
          1200: {
            width: 1200,
            slidesPerView: 4.5,
          },
          768: {
            width: 768,
            slidesPerView: 3,
          },
          640: {
            width: 640,
            slidesPerView: 2.5,
          },
        }}
      >
        <StyledButtons>
        <TitleComponent fontSize="1.5rem">{title}</TitleComponent>
        <div>
          <Link href="/">
            <a> Show ({content.length})</a>
           
          </Link>
           <SwiperButtonsComponent />
        </div>
       
        </StyledButtons>
      
        {content.map((item: any) => (
        <SwiperSlide key={item.id}>
          <ContentCardComponent item={item}/>
        </SwiperSlide>
      ))}
      </Swiper>

    </StyledWrapper>
  );
};
