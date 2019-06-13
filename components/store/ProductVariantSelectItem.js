import Button from '../Button'

const OptionButton = ({ selected, label, value, onClick, ...props }) =>
  <Button
  action
    small
    inverted={!selected}
    onClick={onClick}
    {...props}
  >
    <span />
    {label.replace(/\s*\[.*?\]\s*/g, '')}
    <style jsx>{`
      span {
        background-color: ${label.match(/\s*\[.*?\]\s*/g) && label.match(/\[(.*?)\]/)[1]};
        margin: 0 auto;
        display: ${label.match(/\s*\[.*?\]\s*/g) ? 'block' : 'none'};
        height: 2em;
        margin-bottom: ${0.61 * 0.61}em;
        width: 2em;
        border: 2px solid white;
        border-radius: 50%;
      }
    `}</style>
  </Button>

const ProductVariantSelectItem = ({
  name,
  values,
  selectedValue,
  disabled,
  onSelect
}) =>
  <fieldset className='product-variant'>
    <div>
      <label>{name}</label>
    </div>
    {disabled && <small></small>}
    {!disabled && values.map(value =>
      <OptionButton
        key={value}
        value={value}
        label={value}
        selected={value === selectedValue}
        onClick={() => onSelect({[name]: value})}
      />
    )}
    <style jsx>{`
      label {
        opacity: ${disabled && '0.5'}
      }
      .product-variant > :global(.btn span) {
        font-style: normal;
      }
    `}</style>
  </fieldset>

export default ProductVariantSelectItem
