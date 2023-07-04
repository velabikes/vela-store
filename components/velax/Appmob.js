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
      <img src="/velax/appmob.png" alt="Appmob" className="Appmob-image" />

      <style jsx>{`
        .Appmob {
          position: relative;
          height: 100%;

        }

        .Appmob-image {
          object-fit: cover;
          width: 100vw;
          height: auto;
        }

        }
      `}</style>
    </div>
  );
};

export default Appmob;
