import ProductFormItem from './ProductFormItem'
import { compose, withState, withHandlers, withProps } from 'recompose'

const ProductVariantSelect = ({
  product,
  onSelect,
  selectedOptions,
  handleOptionSelect
}) =>
    product.options.map((option, i) => {
      return (
        <ProductFormItem
          name={option.name}
          values={option.values}
          selectedValue={selectedOptions[option.name]}
          onSelect={handleOptionSelect}
        />
      )
    })

export default compose(
  withState('selectedOptions', 'setSelectedOptions', {}),
  withHandlers({
    handleOptionSelect: props => change => {
      const optionPos = props.product.options.findIndex(option => option.name === Object.keys(change)[0])
      const slicedOptions = props.product.options.slice(0, optionPos)
      const nextSelectedOptions = {
        ...slicedOptions.reduce((obj, item) => (obj[item.name] = props.selectedOptions[item.name], obj) ,{}),
        ...change
      }

      return props.setSelectedOptions(nextSelectedOptions)
    }
  })
)(ProductVariantSelect)
