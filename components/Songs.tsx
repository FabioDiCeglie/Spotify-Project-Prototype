import type { NextComponentType } from "next";
import { useRecoilValue } from "recoil";
import { playlistState } from "../atoms/playlistAtom";
import Song from "./Song";

const Songs: NextComponentType = () => {
  const playlist = useRecoilValue(playlistState);

  return (
    <div className="text-white">
      {/* @ts-ignore */}
      {playlist?.tracks.items.map((track: any, i: number) => (
        // @ts-ignore
        <Song key={track.track.id} track={track} order={i} />
      ))}
    </div>
  );
};

export default Songs;
