import React from "react";

const IntroDarkMob = () => {
  return (
    <div className="autoplay-video">
      <video width="100%" autoPlay muted loop playsInline>
        <source src="/velax/introdark-mob.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default IntroDarkMob;
