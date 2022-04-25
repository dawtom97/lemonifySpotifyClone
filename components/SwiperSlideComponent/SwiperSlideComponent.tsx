import Link from "next/link";
import React from "react";
import { SwiperSlide } from "swiper/react";
import { ButtonComponent } from "../ButtonComponent/ButtonComponent";
import { StyledSlide } from "./SwiperSlide.styles";

export const SwiperSlideComponent = ({ slide, active }: any) => {
  return (
    <SwiperSlide key={slide.id}>
      <StyledSlide image={slide.images[0].url} active={active}>
        <p>{slide.type}</p>
        <h3>{slide.name}</h3>
        <Link href="/">
          <ButtonComponent>Show</ButtonComponent>
        </Link>
        <div>
            <p>Release date:</p>
            <p>{slide.release_date}</p>
        </div>
     
      </StyledSlide>
    </SwiperSlide>
  );
};
