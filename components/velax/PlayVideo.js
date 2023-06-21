import React from "react";

const PlayVideo = () => {
  return (
    <div className="autoplay-video">
      <video width="100%" height="100%" autoPlay muted loop playsInline>
        <source src="/velax/velax-release2.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default PlayVideo;
