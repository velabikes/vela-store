import { offWhite, darkGray, offBlack } from "../../style/colors.js";
import ModelData from "./ModelData.js";
import { HideOnMobile } from "../HideOn.js";

const Display = ({ model: { frame, size, color, tire } }) => {
  const selectedModelData =
    ModelData[JSON.stringify({ frame, size, color, tire })] || {};

  return (
    <div className="Display">
      {selectedModelData.photos && selectedModelData.photos[0] && (
        <div className="image-container">
          <img
            className="image"
            src={selectedModelData.photos[0]}
            alt="Model Image"
          />
        </div>
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
          width: 66vw;
        }
        h1 {
          color: ${darkGray};
          font-size: 4.5rem;
          text-align: center;
        }

        .image-container {
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: hidden;
          max-height: 50vh;
          width: 140vw;
        }

        .image {
          width: 100%;
          height: auto;
          object-fit: cover;
        }

        @media only screen and (min-width: 868px) {
          .Display {
            position: relative;
            height: 80vh;
          }
          .image-container {
            overflow: hidden;
            margin-top: ;
            max-height: 80vh;

            width: 80vw;
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
