import type { NextPage } from "next";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useSpotify } from "../hooks/useSpotify";
import { MainLayout } from "../layouts/MainLayout/MainLayout";
import { BannerComponent } from "../components/BannerComponent/BannerComponent";
import { CategoryListComponent } from "../components/CategoryListComponent/CategoryListComponent";
import { ContentSwiperComponent } from "../components/ContentSwiperComponent/ContentSwiperComponent";
import { PlaylistSwiperComponent } from "../components/PlaylistSwiperComponent/PlaylistSwiperComponent";
import { useRecoilState, useRecoilValue } from "recoil";
import { seedsArray } from "../recoilAtoms/playlistAtom";

const Home: NextPage = () => {
  const spotifyApi = useSpotify();
  const [releases, setReleases] = useState([]);
  const [categories, setCategories] = useState([]);
  const [myTopArtists, setMyTopArtists] = useState([]);
  const [myTopTracks, setMyTopTracks] = useState([]);
  const [recentlyPlayedTracks, setRecentlyPlayedTracks] = useState([]);
  const [featured, setFeatured] = useState([]);
  const [recomendations, setRecomendations] = useState([]);
  const [genres, setGenres] = useRecoilState(seedsArray);
  const genresId = useRecoilValue(seedsArray);
  const { data: session, status } = useSession();

  const generateSeeds = () =>
    myTopArtists.forEach((artist: any) =>
      setGenres((prev) => [...prev, artist.id])
    );

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
        .then(generateSeeds)
        .catch((err) => console.log(err));

      spotifyApi
        .getMyTopTracks()
        .then((data: any) => setMyTopTracks(data.body.items))
        .catch((err) => console.log(err));

      spotifyApi
        .getMyRecentlyPlayedTracks({ limit: 25 })
        .then((data: any) => setRecentlyPlayedTracks(data.body.items));

 
      

      spotifyApi
        .getFeaturedPlaylists()
        .then((data: any) => setFeatured(data.body.playlists.items));
    }
  }, [session, spotifyApi]);


  useEffect(()=>{

    if(genres.length) {
      spotifyApi
      .getRecommendations({
        min_energy: 0.4,
        limit:35,
        seed_artists: genresId[Math.floor(Math.random() * genres.length)],
        min_popularity: 50,
      })
      .then((data: any) => setRecomendations(data.body.tracks))
      .catch((err) => console.log(err));
    }
  },[genresId])


  return (
    <MainLayout>
      <BannerComponent releases={releases} />
      <CategoryListComponent categories={categories} />
      <ContentSwiperComponent
        content={recomendations}
        isSong={true}
        title="Matched to you"
      />
      <ContentSwiperComponent
        content={myTopArtists}
        title="Favourite artists"
      />
      <PlaylistSwiperComponent playlist={featured} title="Featured playlists" />
      <ContentSwiperComponent
        content={recentlyPlayedTracks}
        isSong={true}
        title="Recently played"
      />
      <ContentSwiperComponent content={myTopTracks} title="Favourite tracks" isSong={true} />

    </MainLayout>
  );
};

export default Home;
