import { lightGray, offWhite, velaGreen, white, midGray } from "../../style/colors";

const Tab = ({ children, step, onStep }) => {
  return (
    <div className="Tab">
      <div className="TabSelector">
        <div
          onClick={() => onStep(1)}
          className={step === 1 ? "active" : "inactive"}
        >
          Termos de Serviços
        </div>
        <div
          onClick={() => onStep(2)}
          className={step === 2 ? "active" : "inactive"}
        >
          Política de Frete
        </div>
        <div
          onClick={() => onStep(3)}
          className={step === 3 ? "active" : "inactive"}
        >
          Política de Devoluções
        </div>
        <div
          onClick={() => onStep(4)}
          className={step === 4 ? "active" : "inactive"}
        >
          Termos de Garantia
        </div>
        <div
          onClick={() => onStep(5)}
          className={step === 5 ? "active" : "inactive"}
        >
          Política de Privacidade
        </div>
        <div
          onClick={() => onStep(6)}
          className={step === 6 ? "active" : "inactive"}
        >
          Termos de Aluguel
        </div>
        <div
          onClick={() => onStep(7)}
          className={step === 7 ? "active" : "inactive"}
        >
          Termos do Plano Vela+
        </div>
      </div>
      <div className="TabContent">
        {step === 1 && children[0]}
        {step === 2 && children[1]}
        {step === 3 && children[2]}
        {step === 4 && children[3]}
        {step === 5 && children[4]}
        {step === 6 && children[5]}
        {step === 7 && children[6]}
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
