import { lightGray, offWhite, velaGreen, white, midGray } from "../../style/colors";

const Tab = ({ children, step, onStep }) => {
  return (
    <div className="Tab">
      <div className="TabSelector">
        <div
          onClick={() => onStep(1)}
          className={step === 1 ? "active" : "inactive"}
        >
          Pacote Anual
        </div>
        <div
          onClick={() => onStep(2)}
          className={step === 2 ? "active" : "inactive"}
        >
          Pacote Semestral
        </div>
      </div>
      <div className="TabContent">
        {step === 1 && children[0]}
        {step === 2 && children[1]}
      </div>
      <style jsx>{`
        .Tab {
          width: 100%;
          display: flex;
          flex-direction: column;
        }
        .TabSelector {
          display: flex;
          flex-direction: column;
          width: 100%;
          font-size: 0.9em;
          text-align: center;
          background-color: ${white};
          margin: 1em 0;
        }
        .TabSelector > div {
          padding: 1em 1.5em;
          border: 1px solid ${lightGray};
        }
        .active {
          color: ${white};
          background-color: ${velaGreen};
          cursor: auto;
          font-weight: 600;
        }
        .inactive {
          cursor: pointer;
          color: ${midGray};
          font-weight: 500;
        }
        .inactive:hover {
          background-color: ${offWhite};
        }
        .TabContent {
          background-color: ${white};
        }
        @media only screen and (min-width: 768px) {
          .TabSelector {
            flex-direction: row;
          }
          .Tab {
            overflow-y: auto;
          }
          .TabContent {
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  );
};

export default Tab;
