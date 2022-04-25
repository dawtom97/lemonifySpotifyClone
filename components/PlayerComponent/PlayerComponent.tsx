import { useSession } from "next-auth/react";
import { useRecoilValue } from "recoil";
import { currentSong } from "../../recoilAtoms/playlistAtom";

import SpotifyPlayer from "react-spotify-web-playback";
import { useEffect, useState } from "react";
import styled from "styled-components";

const StyledPlayer = styled(SpotifyPlayer)`
    & > div {
    }
`
const StyledWrapper = styled.div`
position: fixed;
z-index: 900;
width:100%;
bottom: 0;

background-color: ${props=>props.theme.primary};
& > div > div {
  background-color: ${props=>props.theme.primary};
  color: white;

  & > div {
    padding: 6px 10px;
    &  a {
      color: white !important;
      font-weight:500
    }
    & span {
      color: white;
     
    }
    & svg {
      color: #fff;
    }
  }
}
& img {
  border-radius: 50%;
}
& p {
  color: white;
}
`

export const PlayerComponent = () => {
  const { data: session, status } = useSession();
  const [play,setPlay] = useState(false);
  const song = useRecoilValue(currentSong)
  useEffect(() => setPlay(true),[song])
  console.log(song);

  interface Locale {
      devices?: string; // 'Devices'
      next?: string; // 'Next'
      pause?: string; // 'Pause'
      play?: string; // 'Play'
      previous?: string; // 'Previous'
      title?: string; // '{name} on SPOTIFY'
      volume?: string; // 'Volume'
    }
  

  return (
    <StyledWrapper>
      {song && (
        <StyledPlayer
          autoPlay
          previousTracks
          play={play}
          locale
          callback={state => {
            if(!state.isPlaying) setPlay(false)
        }}
          token={session?.user.accessToken}
          uris={song ? [song] : []}
        />
      )}
    </StyledWrapper>
  );
};
