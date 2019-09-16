import PropTypes from 'prop-types'
import { compose, withProps } from 'recompose'

const Price = ({ formatedValue }) =>
  <span className='Price'>
    {formatedValue}
  </span>

const intToBRL = n => parseFloat(n).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', currencyDisplay: 'symbol' })

Price.propTypes = {
  formatedValue: PropTypes.string
}

export default compose(
  withProps(
    ({ value }) => ({ formatedValue: intToBRL(value) })
  )
)(Price)
