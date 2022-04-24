import type { NextPage } from "next";
import { useSession } from "next-auth/react";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useSpotify } from "../hooks/useSpotify";
import { MainLayout } from "../layouts/MainLayout/MainLayout";
import { BannerComponent } from "../components/BannerComponent/BannerComponent";
import { CategoryListComponent } from "../components/CategoryListComponent/CategoryListComponent";
import { ContentSwiperComponent } from "../components/ContentSwiperComponent/ContentSwiperComponent";

const Home: NextPage = () => {
  const spotifyApi = useSpotify();
  const [releases, setReleases] = useState([]);
  const [categories, setCategories] = useState([]);
  const [myTopArtists, setMyTopArtists] = useState([]);
  const [myTopTracks, setMyTopTracks] = useState([]);
  const [recentlyPlayedTracks, setRecentlyPlayedTracks] = useState([]);
  const { data: session, status } = useSession();

  useEffect(() => {
    if (spotifyApi.getAccessToken()) {
      spotifyApi
        .getNewReleases({ limit: 15, offset: 0, country: "PL" })
        .then((data: any) => setReleases(data.body.albums.items));

      spotifyApi
        .getCategories({
          limit: 35,
          offset: 0,
          country: "SE",
          locale: "sv_SE",
        })
        .then((data: any) => setCategories(data.body.categories.items))
        .catch((err) => console.log(err));

      spotifyApi
        .getMyTopArtists()
        .then((data: any) => setMyTopArtists(data.body.items))
        .catch((err) => console.log(err));

      spotifyApi
        .getMyTopTracks()
        .then((data: any) => setMyTopTracks(data.body.items))
        .catch((err) => console.log(err));

      spotifyApi
        .getMyRecentlyPlayedTracks({ limit: 25 })
        .then((data: any) =>
          !recentlyPlayedTracks.length && (
          data.body.items.map((item: any) =>
            setRecentlyPlayedTracks((prev):never[] | any => [...prev, item.track])
          ))
        )
        .catch((err) => console.log(err));

      spotifyApi.getFeaturedPlaylists()
      .then(data=>console.log(data.body.playlists.items))
    }





  }, [session, spotifyApi]);

 // console.log(recentlyPlayedTracks);

  return (
    <MainLayout>
      <BannerComponent releases={releases} />
      <CategoryListComponent categories={categories} />
      <ContentSwiperComponent
        content={myTopArtists}
        title="Favourite artists"
      />
      <ContentSwiperComponent content={myTopTracks} title="Favourite tracks" />
      <ContentSwiperComponent
        content={recentlyPlayedTracks}
        title="Recently played"
      />
    </MainLayout>
  );
};

export default Home;
