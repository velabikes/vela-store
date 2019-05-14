import { compose, withHandlers, withState, withProps, withPropsOnChange } from 'recompose'
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
  selectedOptions,
  setSelectedOptions,
  selectedVariant,
  onVariantSelect,
  hasOptions
}) =>
  <div className='ProductForm'>
    {hasOptions && product.options.map(option =>
      <div className='option'>
        <label>{option.name}</label>
        {option.values.map(value =>
          <OptionButton
            onClick={() => {
              setSelectedOptions({ ...selectedOptions, [option.name]: value })
            }}
            selected={selectedOptions[option.name] === value}
          >
            {value.replace(/\s*\[.*?\]\s*/g, '')}
          </OptionButton>
        )}
      </div>
    )}
    <button
      onClick={handleAddToCartClick}
      disabled={hasOptions && Object.keys(selectedOptions).length !== product.options.length}
    >
      { isAddToCartLoading ? 'Carregando...' : 'comprar' }
    </button>
    <style jsx>{`
      .option {
        margin-bottom: 1em;
      }
    `}</style>
  </div>

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
      ? product.variants.edges[0].node.id
      : findSelectedVariant(product.variants.edges, selectedOptions)
  })),
  withPropsOnChange(
    (props, nextProps) =>
      nextProps.selectedVariant
      && !props.selectedVariant
      || props.selectedVariant !== nextProps.selectedVariant,
    ({ selectedVariant, onVariantSelect }) => onVariantSelect(selectedVariant)
  ),
  withState('isAddToCartLoading', 'setAddToCartLoading', false),
  withCheckoutLineItemsAdd,
  withCheckoutId,
  withHandlers({
    handleAddToCartClick
  })
)(ProductForm)
