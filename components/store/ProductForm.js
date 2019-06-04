import { compose, withHandlers, withState, withProps, withPropsOnChange, branch } from 'recompose'
import withCheckoutLineItemsAdd from '../../containers/withCheckoutLineItemsAdd'
import withCheckoutId from '../../containers/withCheckoutId'
import { toggleDrawer } from '../../lib/redux'
import ProductVariantSelect from './ProductVariantSelect'

const ProductForm = ({
  product,
  handleAddToCartClick,
  isAddToCartLoading,
  selectedOptions,
  setSelectedOptions,
  selectedVariant,
  onVariantSelect,
  hasOptions
}) =>
  <div className='ProductForm'>
    <ProductVariantSelect
      product={product}
    />
    <br />
    <button
      onClick={handleAddToCartClick}
      disabled={hasOptions && Object.keys(selectedOptions).length !== product.options.length}
    >
      { isAddToCartLoading ? 'Carregando...' : 'comprar' }
    </button>
  </div>

const handleAddToCartClick = ({
  checkoutLineItemsAdd,
  checkoutId,
  setAddToCartLoading,
  product,
  hasOptions,
  selectedOptions,
  dispatch
}) => async e => {
  setAddToCartLoading(true)
  await checkoutLineItemsAdd({
    variables: {
      checkoutId: checkoutId,
      lineItems: [
        {
          variantId: !hasOptions
            ? product.variants.edges[0].node.id
            : findSelectedVariant(product.variants.edges, selectedOptions).node.id,
          quantity: 1
        }
      ]
     }
  })
  setAddToCartLoading(false)
  dispatch(toggleDrawer('CART'))
}

export default compose(
  withState('isAddToCartLoading', 'setAddToCartLoading', false),
  withCheckoutLineItemsAdd,
  withCheckoutId,
  withHandlers({
    handleAddToCartClick
  })
)(ProductForm)
