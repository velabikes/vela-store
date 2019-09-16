import PropTypes from 'prop-types'
import { compose, withState, withHandlers } from 'recompose'
import ProductVariantSelectItem from './ProductVariantSelectItem'

const ProductVariantSelect = ({
  product,
  selectedOptions,
  handleOptionSelect
}) =>
  product.options.map((option, i) => {
    return (
      <ProductVariantSelectItem
        key={option.name}
        name={option.name}
        values={
          getAvailableOptionValues(
            option.name,
            getAvailableVariants(
              product.variants,
              filterSelectedOptions(selectedOptions, product.options.slice(0, i))
            )
          )
        }
        selectedValue={selectedOptions[option.name]}
        onSelect={handleOptionSelect}
        disabled={Object.keys(selectedOptions).length < i}
      />
    )
  })

ProductVariantSelect.propTypes = {
  product: PropTypes.object,
  handleOptionSelect: PropTypes.func,
  selectedOptions: PropTypes.object
}

const filterSelectedOptions = (selectedOptions, options) => {
  return options.reduce((obj, item) => {
    if (!selectedOptions[item.name]) {
      return obj
    }

    const option = (obj[item.name] = selectedOptions[item.name], obj)

    return option
  }, {})
}

const getAvailableVariants = (variants, selectedOptions) => {
  const availableEdges = variants.edges.filter(variant => {
    const variantOptions = variant.node.selectedOptions.reduce((obj, item) => {
      obj[item.name] = item.value

      return obj
    }, {})

    return Object.keys(selectedOptions).every(k => variantOptions[k] === selectedOptions[k])
  })

  return { edges: availableEdges }
}

const getAvailableOptionValues = (name, variants) => {
  const dupeValues = variants.edges.map(variant => variant.node.selectedOptions.find(option => option.name === name).value)

  return [...new Set(dupeValues)]
}

export default compose(
  withState('selectedOptions', 'setSelectedOptions', {}),
  withHandlers({
    handleOptionSelect: props => change => {
      const optionPos = props.product.options.findIndex(option => option.name === Object.keys(change)[0])
      const slicedOptions = props.product.options.slice(0, optionPos)
      const nextSelectedOptions = {
        ...filterSelectedOptions(props.selectedOptions, slicedOptions),
        ...change
      }
      const availableVariants = getAvailableVariants(props.product.variants, nextSelectedOptions)

      props.onVariantSelect(availableVariants)
      props.setSelectedOptions(nextSelectedOptions)
    }
  })
)(ProductVariantSelect)
