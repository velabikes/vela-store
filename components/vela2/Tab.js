import { lightGray, velaGreen, white } from '../../style/colors'

const Tab = ({ children, step }) => {
  return (
    <div className='Tab'>
      <div className='TabSelector'>
        <div className={step === 1 && 'active'}>
          1. Monte a sua
        </div>
        <span>></span>
        <div className={step === 2 && 'active'}>2. Acessórios</div>
        <span>></span>
        <div className={step === 3 && 'active'}>3. Pagamento</div>
      </div>
      <div className='TabContent'>
        {step === 1 && children[0]}
        {step === 2 && children[1]}
        {step === 3 && children[2]}
      </div>
      <style jsx>{`
        .TabSelector {
          display: flex;
          flex-direction: row;
          font-size: 0.9em;
          justify-content: space-between;
          padding: 1em;
          border-bottom: 1px solid ${lightGray};
          text-align: center;
          background-color: ${white};
        }
        .active {
          color: ${velaGreen};
          font-weight: 600;
        }
        .TabContent {
          background-color: ${white};
          padding: 1em;
        }
        @media only screen and (min-width: 768px) {
          .Tab {
            width: 500px;
            overflow-y: auto;
          }
          .TabSelector {
            justify-content: flex-start;
          }
          .TabSelector > * {
            margin-right: 0.5em;
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
