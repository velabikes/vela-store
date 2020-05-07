import { lightGray, velaGreen, white } from '../../style/colors'

const Tab = ({ children, step }) => {
  return (
    <div className='Tab'>
      <div className='TabSelector'>
        <div className={step === 1 && 'active'}>
          1. Monte a sua
        </div>
        <div className={step === 2 && 'active'}>2. Acessórios</div>
        <div className={step === 3 && 'active'}>3. Pagamento</div>
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
          display: flex;
          flex-direction: row;
          width: 100%;
          font-size: 0.9em;
          text-align: center;
          background-color: ${white};
        }
        .TabSelector > div {
          border: 1px solid ${lightGray};
          padding: 1em;
          flex: 1;
        }
        .active {
          color: ${velaGreen};
          font-weight: 600;
        }
        .TabContent {
          background-color: ${white};
          padding: 1.5em;
        }
        @media only screen and (min-width: 768px) {
          .Tab {
            width: 25.3em;
            overflow-y: auto;
          }
          .TabContent {
            padding: 2em;
          }
        }
    `}</style>
    </div>
  )
}

export default Tab
