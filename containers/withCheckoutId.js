/*
Get checkout ID from Redux store.
Also pass down `dispatch` method used to *set* checkout ID
*/
import { connect } from 'react-redux'

const withCheckoutId = connect(
  ({ checkoutId, persistLoaded }) => ({ checkoutId, persistLoaded })
)

export default withCheckoutId
