import { offWhite, darkGray, offBlack } from "../../style/colors.js";
import ModelData from "./ModelData.js";
import { HideOnMobile } from "../HideOn.js";

const Display = ({ model: { frame, size, color, tire } }) => {
  const selectedModelData =
    ModelData[JSON.stringify({ frame, size, color, tire })] || {};

  return (
    <div className="Display">
      {selectedModelData.photos && selectedModelData.photos[0] && (
        <video
          className="video"
          autoPlay
          muted
          loop
          playsInline
          key={selectedModelData.photos[0]}
        >
          <source src={selectedModelData.photos[0]} type="video/mp4" />
        </video>
      )}
      <style jsx>{`
        .Display {
          background-color: #ede6de;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          flex: 1;
          position: fixed;
          z-index: 5;
          width: 100%;
        }
        h1 {
          color: ${darkGray};
          font-size: 4.5rem;
          text-align: center;
        }

        .video {
          max-height: 50vh;
          width: 140vw;
        }

        @media only screen and (min-width: 868px) {
          .Display {
            position: relative;
            height: 80vh;
          }
          .video {
            height: 100%;
            width: 100%;
            max-height: 80vh;
          }

          h1 {
            font-size: 5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Display;
