import { lightGray, velaGreen, white, offWhite } from '../../style/colors'

const Tab = ({ children, step, onStep }) => {

  return (
    <div className='Tab'>
      <div className='TabSelector'>
        <div className={step === 1 ? 'active' : 'inactive'}>
          1. Montar
        </div>
        <div className={step === 2 ? 'active' : 'inactive'}>2. Extras</div>
        <div className={step === 3 ? 'active' : 'inactive'}>3. Pagar</div>
      </div>
      <div className='TabContent'>
        {step === 1 && children[0]}
        {step === 2 && children[1]}
        {step === 3 && children[2]}
      </div>
      <style jsx>{`
        .Tab {
          width: 100%;
          display: flex;
          flex-direction: column;
        }
        .TabSelector {
          position: fixed;
          z-index: 120;
          display: flex;
          flex-direction: row;
          width: 100%;
          font-size: 0.9em;
          text-align: center;
          background-color: ${white};
          margin-top: 12.8em;
          box-shadow: rgb(0 0 0 / 3%) 0px -7px 7px 0px, rgb(0 0 0 / 17%) 0px 8px 10px -7px;
        }
        .TabSelector > div {
          border: 1px solid ${lightGray};
          padding: 1em;
          flex: 1;
        }
        .active {
          color: ${velaGreen};
          font-weight: 600;
          cursor: auto;
        }
        .TabContent {
          background-color: ${white};
          padding: 2em 1em 1em 2em;
          margin-top: 14em;
        }
        @media only screen and (min-width: 768px) {
          .Tab {
            width: 26em;
            overflow-y: auto;
          }
          .TabSelector {
            position: relative;
            margin-top: 0;
          }
          .TabContent {
            padding: 2em 2em 2em 2.5em;
            margin-top: 0;
          }
        }
    `}</style>
    </div>
  )
}

export default Tab
