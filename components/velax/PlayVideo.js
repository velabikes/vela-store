import React from "react";

const PlayVideo = () => {
  return (
    <div className="play-video">
      <video width="100%" height="100%" controls poster="/velax/darkhero.jpg">
        <source src="/velax/velax-release.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default PlayVideo;
