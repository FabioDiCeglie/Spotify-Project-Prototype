import type { NextComponentType } from "next";
import useSpotify from "../hooks/useSpotify";

const Song: NextComponentType = ({ track, order }: any) => {
  const spotifyApi = useSpotify();

  const { track: trackInfo } = track;
  return (
    <div className="text-white">
      <div className="flex items-center space-x-4">
        <p>{order + 1}</p>
        <img className="h-10 w-10" src={trackInfo.album.images[0].url} alt="" />
        <div>
          <p>{trackInfo.name}</p>
          <p>{trackInfo.artists[0].name}</p>
        </div>

        <div>
          <p>{trackInfo.name}</p>
          <p>{trackInfo.artists[0].name}</p>
        </div>
      </div>
    </div>
  );
};

export default Song;
