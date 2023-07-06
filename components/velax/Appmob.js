import React, { useState } from "react";
import VisibilitySensor from "react-visibility-sensor";
import { offBlack, offWhite } from "../../style/colors";

const Appmob = () => {
  const [isVisible, setIsVisible] = useState(false);

  const onVisibilityChange = (visible) => {
    setIsVisible(visible);
  };

  return (
    <div className="Appmob">
      <img src="/velax/appmob.webp" alt="Appmob" className="Appmob-image" />

      <style jsx>{`
        .Appmob {
          position: relative;
          height: 100%;
          background-color: #ebbd99;

        }

        .Appmob-image {
          object-fit: cover;
          width: 100vw;
          height: auto;
          margin-bottom: 10vh;
        }

        }
      `}</style>
    </div>
  );
};

export default Appmob;
