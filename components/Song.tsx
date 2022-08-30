import type { NextComponentType } from "next";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { currentTrackIdState, isPlayingState } from "../atoms/songAtom";
import useSpotify from "../hooks/useSpotify";
import { convertMsToMinutesSeconds } from "../lib/time";

const Song: NextComponentType = ({ track, order }: any) => {
  const spotifyApi = useSpotify();
  const [currentTrackId, setCurrentTrackId] =
    useRecoilState(currentTrackIdState);
  const [isPlaying, setIsPlaying] = useRecoilState(isPlayingState);

  const playSong = () => {
    setCurrentTrackId(trackInfo.id);
    setIsPlaying(true);
    spotifyApi.play({
      uris: [trackInfo.uri],
    });
  };

  const { track: trackInfo } = track;
  return (
    <div
      className="grid grid-cols-2 text-gray-500 py-4 px-5 hover:bg-gray-900 rounded-lg cursor-pointer"
      onClick={playSong}
    >
      <div className="flex items-center space-x-4">
        <p>{order + 1}</p>
        <img className="h-10 w-10" src={trackInfo.album.images[0].url} alt="" />
        <div>
          <p className="w-36 lg:w-64 text-white truncate">{trackInfo.name}</p>
          <p className="w-40 ">{trackInfo.artists[0].name}</p>
        </div>
      </div>

      <div className="flex items-center justify-between ml-auto md:ml-0">
        <p className="w-40 hidden md:inline">{trackInfo.album.name}</p>
        <p>{convertMsToMinutesSeconds(trackInfo.duration_ms)}</p>
      </div>
    </div>
  );
};

export default Song;
