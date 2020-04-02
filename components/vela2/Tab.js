import { midGray } from '../../style/colors'

const Tab = ({ children, step, onStep }) => {
  return (
    <div>
      <div className='TabSelector'>
        <div onClick={() => onStep(1)} className={step === 1 && 'active'}>
          1. Monte a sua
        </div>
        <span>></span>
        <div>2. Acessórios</div>
        <span>></span>
        <div>3. Pagamento</div>
      </div>
      {step === 1 && children[0]}
      {step === 2 && children[1]}
      <style jsx>{`
        .TabSelector {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          padding: 1em;
          border-bottom: 1px solid ${midGray};
          text-align: center;
        }
      `}</style>
    </div>
  )
}

export default Tab
