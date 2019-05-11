import { compose, withProps } from "recompose"

const Price = ({ minValue, maxValue }) =>
  <span className='price'>
    {minValue && parseInt(minValue).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
    {minValue !== maxValue && ' - ' + parseInt(maxValue).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
  </span>

export default compose(
  withProps(
    ({ value }) => ({
      minValue: value instanceof Array ? Math.min.apply(null, value) : value,
      maxValue: value instanceof Array ? Math.max.apply(null, value) : value
    })
  )
)(Price)
