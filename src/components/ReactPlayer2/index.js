import React, { Component, useState } from 'react'
import ReactPlayer from 'react-player'
import "./ReactPlayer2.scss"

export default function ReactPlayer2({ videoUrl, videoThumbnailUrl }) {

  const [playing, setPlaying] = useState(false);
  const [showLoader, setShowLoader] = useState(false);

  function toggleVideo() {
    setPlaying(!playing);
    toggleLoader();
  }

  function toggleLoader() {
    setShowLoader(!showLoader)
  }

  return (
    <div className="video-container">
      
      <ReactPlayer
        url={videoUrl}
        width="100%"
        height="100%"
        controls={true}
        playing={playing}
        light={videoThumbnailUrl}
        onReady={() => toggleLoader()}
        playIcon={
          <a
            onClick={() => toggleVideo()}
            className="play-video-button"
          >
            <span className="play-icon" style={{backgroundImage: "url(./img/icons/play_icon.png)"}}></span>
          </a>}
      />
      {showLoader &&
        <div className="video-loader">
          <div class="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      }
    </div>
  )
}