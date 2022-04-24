import Link from "next/link";
import React from "react";
import { HiBookmark, HiOutlineClock, HiShieldCheck } from "react-icons/hi";
import { formatNumber } from "../../utils/formatNumber";
import { formatTime } from "../../utils/formatTime";
import { TextComponent } from "../TextComponent/TextComponent";
import { StyledImg, StyledWrapper } from "./ContentCard.styles";

export const ContentCardComponent = ({ item }: any) => {
  return (
    <Link href="/">
      <StyledWrapper>
        <StyledImg>
          {item.images ? (
            <img src={item.images[0].url} alt="" />
          ) : (
            <img src={item.album.images[0].url} alt="" />
          )}
        </StyledImg>
        {item.genres && (
                  item.genres.length < 3 ? (
          <TextComponent size="0.7rem" weight={700}>
            <HiBookmark /> ({item.genres.length}) {item.genres.join(", ")}
          </TextComponent>
        ) : (
          <TextComponent size="0.7rem" weight={700}>
            <HiBookmark /> ({item.genres.length}){" "}
            {item.genres.slice(0, 3).join(", ")} ...
          </TextComponent>
         
        ))}
        {item.artists && (
            <TextComponent size="0.7rem" weight={700}>
               <HiShieldCheck /> {item.artists.map((artist:any)=> [artist.name]).join(", ")}
             </TextComponent>
        )}


        <div>
          <TextComponent size="1.1rem" weight={400}>
            {item.name}
          </TextComponent>
          {item.followers && (
            <TextComponent size="0.7rem" weight={700}>
              <span>{formatNumber(item.followers.total)}</span> followers
            </TextComponent>
          )}
          {item.duration_ms && (
            <TextComponent size="0.7rem" weight={700}>
              <span><HiOutlineClock/></span> {formatTime(item.duration_ms)}
            </TextComponent>
          )}
        </div>
      </StyledWrapper>
    </Link>
  );
};
