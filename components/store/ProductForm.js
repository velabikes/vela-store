import { compose, withHandlers, withState, withProps, withPropsOnChange, branch } from 'recompose'
import withCheckoutLineItemsAdd from '../../containers/withCheckoutLineItemsAdd'
import withCheckoutId from '../../containers/withCheckoutId'
import { velaBlue } from '../../style/colors'
import { toggleDrawer } from '../../lib/redux'

const OptionButton = ({ selected, children, ...props }) =>
  <button {...props}>
    <span />
    {children.replace(/\s*\[.*?\]\s*/g, '')}
    <style jsx>{`
      button {
        background: ${selected ? velaBlue : 'transparent'};
        color: ${selected ? 'white' : velaBlue};
        border: 1px solid ${velaBlue};
        font-size: 0.6rem;
        margin: 0.61em 0.61em 0 0;
        display: inline-block;
        text-transform: uppercase;
        font-style: normal;
      }
      span {
        background-color: ${children.match(/\s*\[.*?\]\s*/g) && children.match(/\[(.*?)\]/)[1]};
        margin: 0 auto;
        display: ${children.match(/\s*\[.*?\]\s*/g) ? 'block' : 'none'};
        height: 2em;
        border-radius: 2em;
        margin-bottom: ${0.61 * 0.61}em;
        width: 2em;
        border: 2px solid white;
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
      <div className='optionField'>
        <label>{option.name}:</label><br />
        <div className='options'>
          {option.values.map(value =>
            <OptionButton
              onClick={() => {
                setSelectedOptions({ ...selectedOptions, [option.name]: value })
              }}
              selected={selectedOptions[option.name] === value}
            >
              {value}
            </OptionButton>
          )}
        </div>
      </div>
    )}
    <div><label>Disponibilidade: </label><span>Em Estoque</span></div>
    <br />
    <button
      onClick={handleAddToCartClick}
      disabled={hasOptions && Object.keys(selectedOptions).length !== product.options.length}
    >
      { isAddToCartLoading ? 'Carregando...' : 'comprar' }
    </button>
    <style jsx>{`
      .optionField {
        margin-bottom: 1em;
      }
      .optionField label {
        display: inline-block;
        margin-bottom: .37em;
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
