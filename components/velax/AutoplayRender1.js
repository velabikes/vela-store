import React from "react";

const AutoplayRender1 = () => {
  return (
    <div className="autoplay-video">
      <video width="100%" height="100%" autoPlay loop muted>
        <source src="/velax/render1.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default AutoplayRender1;
