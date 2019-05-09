const Price = ({ value }) =>
  <span className='price'>
    {value && parseInt(value).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
  </span>

export default Price
