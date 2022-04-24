import React from "react";
import { StyledPlaylistBox, StyledWrapper } from "./PlaylistCard.styles";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { TitleComponent } from "../TitleComponent/TitleComponent";
import Link from "next/link";
import { SwiperButtonsComponent } from "../SwiperButtonsComponent/SwiperButtonsComponent";
import { StyledButtons } from "../ContentSwiperComponent/ContentSwiper.styles";
import { TextComponent } from "../TextComponent/TextComponent";
import { FaSpotify } from 'react-icons/fa';
import { Autoplay } from 'swiper';

export const PlaylistSwiperComponent = ({ playlist,title }:any) => {
 // console.log(playlist)
  return (
    <StyledWrapper>
      <Swiper
        modules={[Autoplay]}
        initialSlide={0}
        spaceBetween={18}
        slidesPerView={1.2}
        speed={7000}
        loop={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          1200: {
            width: 1200,
            slidesPerView: 3,
          },
          768: {
            width: 768,
            slidesPerView: 2.5,
          },
          640: {
            width: 640,
            slidesPerView: 2,
          },
        }}
      >
        {/* <SwiperButtonsComponent /> */}
        <StyledButtons>
        <TitleComponent fontSize="1.5rem">{title}</TitleComponent>
        <div>
          <Link href="/">
            <a> Show ({playlist.length})</a>
           
          </Link>
           <SwiperButtonsComponent />
        </div>
       
        </StyledButtons>

        {playlist.map((item: any) => (
          <SwiperSlide key={item.id}>
            <Link href="/">
              <StyledPlaylistBox>
                 <img src={item.images[0].url}/>
                 <div>
                   <TextComponent weight={400} size="0.9rem">
                     <FaSpotify/> {item.owner.display_name}
                   </TextComponent>
                   <TextComponent weight={600} size="1.1rem">
                        {item.name}
                   </TextComponent>
                   <TextComponent weight={400} size="1rem">
                        {item.description.length > 50 ? item.description.slice(0,50) + " ..." : item.description}
                   </TextComponent>
                   <TextComponent weight={700} size="0.8rem">
                        {item.tracks.total} track{item.tracks.total === 1 ? "" : "s"}
                   </TextComponent>
                 </div>
              </StyledPlaylistBox>
              </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </StyledWrapper>
  );
};
