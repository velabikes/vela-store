import { compose, withHandlers, withState } from 'recompose'
import withCheckoutLineItemsAdd from '../containers/withCheckoutLineItemsAdd'
import withCheckoutId from '../containers/withCheckoutId'
import { velaBlue } from '../style/colors'

const OptionButton = ({ selected, children, ...props }) =>
  <button {...props}>{children}
    <style jsx>{`
      button {
        background: ${selected ? velaBlue : 'transparent' };
        color: ${selected ? 'white' : velaBlue};
        border: 1px solid ${velaBlue};
        font-size: 0.75rem;
      }
    `}</style>
  </button>

const ProductForm = ({
  product,
  handleAddToCartClick,
  isLoading,
  selected,
  setSelected
}) =>
  <div className='ProductForm'>
    {product.options[0].name !== 'Title' && product.options.map(option =>
      <div className='option'>
        <label>{option.name}</label>
        {option.values.map(value =>
          <OptionButton
            onClick={() => setSelected({...selected, [option.name]: value})}
            selected={selected[option.name] === value}
          >
            {value.replace(/\s*\[.*?\]\s*/g, '')}
          </OptionButton>
        )}
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
  withState('selected', 'setSelected', {}),
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
