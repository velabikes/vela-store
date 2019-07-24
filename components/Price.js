import { compose, withProps } from 'recompose'

const Price = ({ formatedValue }) =>
  <span className='Price'>
    {formatedValue}
  </span>

const intToBRL = n => parseInt(n).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', currencyDisplay: 'symbol' })

export default compose(
  withProps(
    ({ value }) => ({ formatedValue: intToBRL(value) })
  )
)(Price)

