import { compose, withHandlers, withState, withProps, withPropsOnChange, branch } from 'recompose'
import withCheckoutLineItemsAdd from '../../containers/withCheckoutLineItemsAdd'
import withCheckoutId from '../../containers/withCheckoutId'
import { toggleDrawer } from '../../lib/redux'
import ProductVariantSelect from './ProductVariantSelect'

const ProductForm = ({
  product,
  handleAddToCartClick,
  isAddToCartLoading,
  onVariantSelect,
  selectedVariant,
  hasOptions
}) =>
  <div className='ProductForm'>
    { hasOptions &&
      <ProductVariantSelect
        product={product}
        onVariantSelect={onVariantSelect}
      />
    }
    <button
      onClick={handleAddToCartClick}
      disabled={hasOptions ? !(selectedVariant && selectedVariant.edges.length === 1) : false}
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
  selectedVariant,
  dispatch
}) => async e => {
  const variant = hasOptions ? selectedVariant.edges[0] : product.variants.edges[0]
  setAddToCartLoading(true)
  await checkoutLineItemsAdd({
    variables: {
      checkoutId: checkoutId,
      lineItems: [
        {
          variantId: variant.node.id,
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
  withProps(({ product }) => ({ hasOptions: product.options && product.options[0].values.length > 1 })),
  withCheckoutLineItemsAdd,
  withCheckoutId,
  withHandlers({
    handleAddToCartClick
  })
)(ProductForm)
