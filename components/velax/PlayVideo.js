import React from "react";

const PlayVideo = () => {
  return (
    <div className="play-video">
      <video height="100%" width="auto" controls poster="/velax/darkhero.jpg">
        <source src="/velax/velax-release.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default PlayVideo;
