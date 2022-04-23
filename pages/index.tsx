import type { NextPage } from "next";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useSpotify } from "../hooks/useSpotify";
import { MainLayout } from "../layouts/MainLayout/MainLayout";
import { BannerComponent } from "../components/BannerComponent/BannerComponent";

const Home: NextPage = () => {
  const spotifyApi = useSpotify();
  const [releases, setReleases] = useState([]);
  const { data: session, status } = useSession();

  useEffect(() => {
    if (spotifyApi.getAccessToken()) {
      spotifyApi
        .getNewReleases({ limit: 15, offset: 0, country: "PL" })
        .then((data: any) => setReleases(data.body.albums.items));
    }
  }, [session, spotifyApi]);

  return (
    <MainLayout>

      <BannerComponent releases={releases}/>

    </MainLayout>
  );
};

export default Home;
