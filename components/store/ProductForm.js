import { compose, withHandlers, withState, withProps, withPropsOnChange, branch } from 'recompose'
import withCheckoutLineItemsAdd from '../../containers/withCheckoutLineItemsAdd'
import withCheckoutId from '../../containers/withCheckoutId'
import { toggleDrawer } from '../../lib/redux'
import ProductVariantLeadtime from './ProductVariantLeadtime'
import ProductVariantSelect from './ProductVariantSelect'
import Button from '../Button'
import ReactGA from 'react-ga'

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
    <div className='actions'>
      <Button
        action
        onClick={handleAddToCartClick}
        disabled={hasOptions ? !(selectedVariant && selectedVariant.edges.length === 1) : false}
        loading={isAddToCartLoading}
      >
        { isAddToCartLoading ? 'Carregando...' : 'comprar' }
      </Button>
    </div>
    { selectedVariant && selectedVariant.edges.length === 1 && <div className='leadtime'>
      <ProductVariantLeadtime variant={selectedVariant.edges[0]} />
    </div>}
    <style jsx>{`
      .leadtime {
        margin-bottom: 1rem;
        font-weight: 700;
      }
      .actions {
        margin-bottom: 1rem;
      }
    `}</style>
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

  ReactGA.plugin.require('ec')
  ReactGA.plugin.execute('ec', 'addProduct', {
    id: variant.node.id,
    name: product.title,
    price: variant.node.price,
    quantity: 1
  })
  ReactGA.plugin.execute('ec', 'setAction', 'add')
  ReactGA.event({
    category: 'UX',
    action: 'click',
    label: 'add to cart'
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
