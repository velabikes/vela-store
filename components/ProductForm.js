import { compose, withHandlers, withState } from 'recompose'
import withCheckoutLineItemsAdd from '../containers/withCheckoutLineItemsAdd'
import withCheckoutId from '../containers/withCheckoutId'
import { velaBlue } from '../style/colors'

const OptionButton = props =>
  <button>{props.children}
    <style jsx>{`
      button {
        background: transparent;
        color: ${velaBlue};
        border: 2px solid ${velaBlue};
        font-size: 0.75rem;
      }
    `}</style>
  </button>

const OpttionColor = props =>
  <button>{props.children}
    <style jsx>{`
      button {
        background: transparent;
        color: ${velaBlue};
        border: 2px solid ${velaBlue};
        font-size: 0.75rem;
      }
    `}</style>
  </button>

const ProductForm = ({ product, handleAddToCartClick, isLoading }) =>
  <div className='ProductForm'>
    {product.options[0].name !== 'Title' && product.options.map(option =>
      <div className='option'>
        <label>{option.name}</label>
        {option.values.map(value => <OptionButton>{value}</OptionButton>)}
      </div>
    )}
    <button onClick={handleAddToCartClick} disabled={isLoading}>comprar</button>
    <style jsx>{`
      .option {
        margin-bottom: 1em;
      }
    `}</style>
  </div>

export default compose(
  withState('isAddToCartLoading', 'setAddToCartLoading', false),
  withCheckoutLineItemsAdd,
  withCheckoutId,
  withHandlers({
    handleAddToCartClick: ({
      checkoutLineItemsAdd,
      checkoutId,
      setAddToCartLoading,
      product
    }) => async e => {
      setAddToCartLoading(true)
      await checkoutLineItemsAdd({
        variables: {
          checkoutId: checkoutId,
          lineItems: [
            { variantId: product.variants.edges[0].node.id, quantity: 1 }
          ]
        }
      })
      setAddToCartLoading(false)
    }
  })
)(ProductForm)
