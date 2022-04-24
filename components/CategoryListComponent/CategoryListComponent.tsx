import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from 'swiper';
import React, { useState } from "react";
import { StyledCategory, StyledWrapper } from "./CategoryList.styles";
import { CategoryInterface } from "../../interfaces/CategoryInterface";
import Link from "next/link";

export const CategoryListComponent = ({ categories }: any) => {
 // console.log(categories);
  return (
    <StyledWrapper>
      <Swiper
        modules={[Autoplay]}
        initialSlide={0}
        spaceBetween={10}
        slidesPerView={3}
        loop={true}
        speed={4000}
        autoplay={{
          delay: 1,
          disableOnInteraction: false,
        }}
        //  onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex)}
        breakpoints={{
          1200: {
            width: 1200,
            slidesPerView: 12,
          },
          768: {
            width: 768,
            slidesPerView: 8,
          },
          640: {
            width:640,
            slidesPerView:5
          }
        }}
      >
   
          {/* <SwiperButtonsComponent /> */}
 
        {categories.map((category: CategoryInterface) => (
          <SwiperSlide key={category.id}>
            <StyledCategory>
              <Link href={category.href}>
                <p>{category.name.slice(0,10)}</p>
              </Link>
            </StyledCategory>
          </SwiperSlide>
        ))}
      </Swiper>
    </StyledWrapper>
  );
};
