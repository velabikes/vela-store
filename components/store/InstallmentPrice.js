import { compose, withProps } from 'recompose'
import Price from 'components/Price'

const InstallmentPrice = ({ count, installmentValue }) =>
  <span>
   ou {count}x de <Price value={installmentValue} />
  </span>

export default compose(
  withProps(({ count, value }) => ({ installmentValue: value/count }))
)(InstallmentPrice)
