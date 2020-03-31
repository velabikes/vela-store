const Tab = ({children}) => {
  return (
    <div>
      <div>
        <div>1. Passo</div>
        <div>1. Acessorios</div>
        <div>1. Pagamento</div>
      </div>
      {children[0]}
      {children[1]}
    </div>
  )
}

export default Tab
