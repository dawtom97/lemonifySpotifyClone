import type { InferGetServerSidePropsType, NextPage } from "next";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useSpotify } from "../../hooks/useSpotify";
import { PlaylistInterface } from "../../interfaces/PlaylistInterface";
import { MainLayout } from "../../layouts/MainLayout/MainLayout";

const Playlist = ({playlistId}:InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const spotifyApi = useSpotify();
  const [playlist, setPlaylist] = useState<PlaylistInterface>();
  const { data: session, status } = useSession();

  useEffect(() => {
    if (spotifyApi.getAccessToken()) {
      spotifyApi
        .getPlaylist(playlistId)
        .then((data: any) => setPlaylist(data.body));
    }
  }, [session, spotifyApi,playlistId]);

  console.log(playlist)

  return (
    <MainLayout>
      <div>{playlist?.name}</div>
    </MainLayout>
  );
};

export default Playlist;

export const getServerSideProps = async (context: { params: { id: any; }; }) => {
  const id = context.params.id
  return {
    props: {
      playlistId: id,
    },
  };
};
