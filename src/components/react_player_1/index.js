import React from 'react';
import { Player, BigPlayButton } from 'video-react';
import "../../../node_modules/video-react/dist/video-react.css";

export default function ReactPlayer1({poster}){
  return (
    <Player
      playsInline
      poster={poster}
      src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
      width={700}
      fluid={false}
      play
    >
      <BigPlayButton position="center"/>
    </Player>
  );
};