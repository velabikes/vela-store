import PropTypes from 'prop-types'

const Cart = ({ checkout }) =>
  <div>
    {JSON.stringify(checkout)}
  </div>

Cart.propTypes = {
  checkout: PropTypes.object
}

export default Cart
