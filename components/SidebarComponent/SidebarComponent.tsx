import {
  HiLogin,
  HiMenuAlt1,
  HiOutlineBookOpen,
  HiOutlineHeart,
  HiOutlineHome,
  HiOutlineLibrary,
  HiPlusCircle,
  HiRss,
  HiSearch,
} from "react-icons/hi";
import { LinkComponent } from "../LinkComponent/LinkComponent";
import {
  StyledAppShadowOverlay,
  StyledAside,
  StyledLogout,
  StyledMenuBtn,
  StyledMenuWrapper,
} from "./Sidebar.styles";
import { useEffect, useState } from "react";
import { signOut, useSession } from "next-auth/react";
import { SidebarTypes } from "./Sidebar.types";
import { useSpotify } from "../../hooks/useSpotify";
import { PlaylistInterface } from "../../interfaces/PlaylistInterface";



export const SidebarComponent = ({ onClick, isMenuVisible }: SidebarTypes) => {
  const spotifyApi = useSpotify();
  const { data: session, status } = useSession();
  const [playlists, setPlaylists] = useState([]);


  useEffect(() => {
    if (spotifyApi.getAccessToken()) {
      spotifyApi
        .getUserPlaylists()
        .then((data:any) => setPlaylists(data.body.items));
    }
  }, [session, spotifyApi]);

 /// console.log(playlistId);

  return (
      <StyledAside showMenu={isMenuVisible}>
        <StyledMenuBtn onClick={onClick}>
          <HiMenuAlt1 />
        </StyledMenuBtn>

        <StyledMenuWrapper>
          <LinkComponent href="/" title="Homepage">
            <HiOutlineHome />
          </LinkComponent>
          <LinkComponent href="/" title="Search">
            <HiSearch />
          </LinkComponent>
          <LinkComponent href="/" title="Library">
            <HiOutlineLibrary />
          </LinkComponent>
          <hr />
          <LinkComponent href="/" title="Liked Songs">
            <HiOutlineHeart />
          </LinkComponent>
          <LinkComponent href="/" title="Create Playlist">
            <HiPlusCircle />
          </LinkComponent>
          <LinkComponent href="/" title="Your episodes">
            <HiRss />
          </LinkComponent>
          {/* logout button */}
          <StyledLogout onClick={() => signOut()}>
            <HiLogin />
            <span>Logout</span>
          </StyledLogout>
          <hr />

          {/* {Playlists.............} */}
          {playlists.map(({ id, name }: PlaylistInterface) => (
            <LinkComponent title={name} key={id} href={`/playlist/${id}`}>   
              <HiOutlineBookOpen />
          
            </LinkComponent>
          ))}
        </StyledMenuWrapper>
      </StyledAside>

  );
};
