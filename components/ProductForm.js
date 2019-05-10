import { compose, withHandlers, withState, withProps } from 'recompose'
import withCheckoutLineItemsAdd from '../containers/withCheckoutLineItemsAdd'
import withCheckoutId from '../containers/withCheckoutId'
import { velaBlue } from '../style/colors'
import { toggleDrawer } from '../lib/redux'

const OptionButton = ({ selected, children, ...props }) =>
  <button {...props}>{children}
    <style jsx>{`
      button {
        background: ${selected ? velaBlue : 'transparent'};
        color: ${selected ? 'white' : velaBlue};
        border: 1px solid ${velaBlue};
        font-size: 0.75rem;
      }
    `}</style>
  </button>

const ProductForm = ({
  product,
  handleAddToCartClick,
  isAddToCartLoading,
  selected,
  setSelected,
  hasOptions
}) =>
  <div className='ProductForm'>
    {hasOptions && product.options.map(option =>
      <div className='option'>
        <label>{option.name}</label>
        {option.values.map(value =>
          <OptionButton
            onClick={() => setSelected({ ...selected, [option.name]: value })}
            selected={selected[option.name] === value}
          >
            {value.replace(/\s*\[.*?\]\s*/g, '')}
          </OptionButton>
        )}
      </div>
    )}
    <button
      onClick={handleAddToCartClick}
      disabled={hasOptions && Object.keys(selected).length !== product.options.length}
    >
      { isAddToCartLoading ? 'Carregando...' : 'comprar' }
    </button>
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
  withProps(({ product }) => ({ hasOptions: product.options.length > 1 || product.options[0].values.length > 1 })),
  withHandlers({
    handleAddToCartClick: ({
      checkoutLineItemsAdd,
      checkoutId,
      setAddToCartLoading,
      product,
      dispatch
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
      dispatch(toggleDrawer('CART'))
    }
  })
)(ProductForm)
