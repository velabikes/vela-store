import { offWhite, darkGray, offBlack } from "../../style/colors.js";
import ModelData from "./ModelData.js";
import { HideOnMobile } from "../HideOn.js";

const Display = ({ model: { frame, size, color, tire } }) => {
  const selectedModelData =
    ModelData[JSON.stringify({ frame, size, color, tire })] || {};

  return (
    <div className="Display">
      <img
        src={selectedModelData.photos && selectedModelData.photos[0]}
        alt="Vela X"
      />
      <style jsx>{`
        .Display {
          background-color: #000000;
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
        .Display img {
          object-fit: contain;
          height: 100%;
          max-height: calc(25vh);
        }

        @media only screen and (min-width: 768px) {
          .Display {
            position: relative;
          }
          h1 {
            font-size: 5rem;
          }
          .Display img {
            position: relative;
            max-width: 70vw;
            object-fit: cover;
            max-height: 100%;
            object-position: 50% 50%;
          }
        }
      `}</style>
    </div>
  );
};

export default Display;
