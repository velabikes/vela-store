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

const getAvailableVariants = (variants, selectedOptions) => {
  const availableEdges = variants.edges.filter(variant => {
    const variantOptions = variant.node.selectedOptions.reduce((obj,item) => {
      obj[item.name] = item.value
      return obj
    }, {});
    return Object.keys(selectedOptions).every(k => variantOptions[k] == selectedOptions[k])
  })
  return { edges: availableEdges }
}

const getAvailableOptionValues = (name, variants) => {
  const dupeValues = variants.edges.map(variant => variant.node.selectedOptions.find(option => option.name === name).value)
  return [...new Set(dupeValues)]
}

const findSelectedVariant = (variants, selected) => {
  return variants.find(variant =>
    variant.node.selectedOptions.every(
      option => selected[option.name] === option.value
    )
  )
}

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
  withState('selectedOptions', 'setSelectedOptions', {}),
  withProps(({ product }) => ({ hasOptions: product.options.length > 1 || product.options[0].values.length > 1 })),
  withProps(({ product, hasOptions, selectedOptions }) => ({
    selectedVariant: !hasOptions
      ? product.variants.edges[0]
      : findSelectedVariant(product.variants.edges, selectedOptions)
  })),
  withPropsOnChange(
    (props, nextProps) =>
      nextProps.selectedVariant &&
      !props.selectedVariant ||
      props.selectedVariant !== nextProps.selectedVariant,
    ({ selectedVariant, onVariantSelect }) => onVariantSelect(selectedVariant)
  ),
  withState('isAddToCartLoading', 'setAddToCartLoading', false),
  withCheckoutLineItemsAdd,
  withCheckoutId,
  withHandlers({
    handleAddToCartClick
  })
)(ProductForm)
