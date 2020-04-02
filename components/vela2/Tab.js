import { lightGray, velaGreen } from '../../style/colors'

const Tab = ({ children, step, onStep }) => {
  return (
    <div className='Tab'> 
      <div className='TabSelector'>
        <div onClick={() => onStep(1)} className={step === 1 && 'active'}>
          1. Monte a sua
        </div>
        <span>></span>
        <div className={step === 2 && 'active'}>2. Acessórios</div>
        <span>></span>
        <div>3. Pagamento</div>
      </div>
      {step === 1 && children[0]}
      {step === 2 && children[1]}
      <style jsx>{`
        .TabSelector {
          display: flex;
          flex-direction: row;
          font-size: 0.9em;
          justify-content: space-between;
          padding: 1em;
          border-bottom: 1px solid ${lightGray};
          text-align: center;
        }
        .active {
          color: ${velaGreen};
        }
        @media only screen and (min-width: 768px) {
          .Tab {
            width: 60%;
            margin-left: 40%;
          }
        }
    `}</style>
    </div>
  )
}

export default Tab
