import React from "react";

const IntroDark = () => {
  return (
    <div className="autoplay-video">
      <video width="100%" autoPlay muted loop playsInline>
        <source src="/velax/introdark.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default IntroDark;
