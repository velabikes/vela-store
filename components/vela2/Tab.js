const Tab = ({children, step, onStep}) => {
  return (
    <div>
      <div>
        <div onClick={() => onStep(1)}>1. Passo</div>
        <div>1. Acessorios</div>
        <div>1. Pagamento</div>
      </div>
      {step === 1 && children[0]}
      {step === 2 && children[1]}
    </div>
  )
}

export default Tab
