import React from "react";
import { HiBookmark, HiOutlineClock, HiShieldCheck } from "react-icons/hi";
import { useRecoilState } from "recoil";
import { useSpotify } from "../../hooks/useSpotify";
import { currentSong } from "../../recoilAtoms/playlistAtom";
import { formatNumber } from "../../utils/formatNumber";
import { formatTime } from "../../utils/formatTime";
import { TextComponent } from "../TextComponent/TextComponent";
import { StyledImg, StyledWrapper } from "./SongCard.styles";

export const SongCardComponent = ({ item }: any) => {
  const spotifyApi = useSpotify();

  const [song, setCurrentSong] = useRecoilState(currentSong);

  const playSong = () => {
     setCurrentSong(item.track ? item.track.uri : item.uri)
  //   setCurrentTrackId(item.track ? item.track.id : item.id);
   //  setIsPlaying(true);
  }

  return (
      <StyledWrapper onClick={playSong}>
        <StyledImg>
          {item.images ? (
            <img
              src={item.track ? item.track.images[0] : item.images[0].url}
              alt=""
            />
          ) : (
            <img
              src={
                item.track
                  ? item.track.album.images[0].url
                  : item.album.images[0].url
              }
              alt=""
            />
          )}
        </StyledImg>
        {item.genres &&
          (item.genres.length < 3 ? (
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
            <HiShieldCheck />{" "}
            {item.artists.map((artist: any) => [artist.name]).join(", ").slice(0,40)}
          </TextComponent>
        )}
        {item.track && (
          <TextComponent size="0.7rem" weight={700}>
            <HiShieldCheck />{" "}
            {item.track.artists.length > 2 ? item.track.artists.map((artist: any) => [artist.name]).join(", ").slice(0,40)+"...": item.track.artists.map((artist: any) => [artist.name]).join(", ") }
          </TextComponent>
        )}

        <div>
          <TextComponent size="1.1rem" weight={400}>
            {item.track ? item.track.name.slice(0,24) : item.name.slice(0,24)}
            ...
          </TextComponent>
          {item.followers && (
            <TextComponent size="0.7rem" weight={700}>
              <span>{formatNumber(item.followers.total)}</span> followers
            </TextComponent>
          )}
          {item.duration_ms && (
            <TextComponent size="0.7rem" weight={700}>
              <span>
                <HiOutlineClock />
              </span>{" "}
              {formatTime(item.duration_ms)}
            </TextComponent>
          )}
          {item.track && (
            <TextComponent size="0.7rem" weight={700}>
              <span>
                <HiOutlineClock />
              </span>{" "}
              {formatTime(item.track.duration_ms)}
            </TextComponent>
          )}
        </div>
      </StyledWrapper>
  );
};
