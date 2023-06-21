import React from "react";

const AutoplayRender2 = () => {
  return (
    <div className="autoplay-video">
      <video width="100%" height="100%" autoPlay muted playsInline>
        <source src="/velax/render2.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default AutoplayRender2;
