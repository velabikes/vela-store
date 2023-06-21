import React from "react";

const AutoplayRender1Mob = () => {
  return (
    <div className="autoplay-video">
      <video width="100%" height="100%" autoPlay muted loop playsInline>
        <source src="/velax/AutoplayRender1Mob.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default AutoplayRender1Mob;
