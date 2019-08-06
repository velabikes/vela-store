import Button from '../Button'

const OptionButton = ({ selected, label, value, onClick, ...props }) =>
  <Button
    secondary={selected}
    onClick={onClick}
    {...props}
  >
    <span />
    {label.replace(/\s*\[.*?\]\s*/g, '')}
    <style jsx>{`
      span {
        background-color: ${label.match(/\s*\[.*?\]\s*/g) && label.match(/\[(.*?)\]/)[1]};
        display: ${label.match(/\s*\[.*?\]\s*/g) ? 'inline-block' : 'none'};
        height: 1em;
        width: 1em;
        border: 2px solid white;
        border-radius: 50%;
        margin-right: 0.5em;
        margin-bottom: -2px;
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
    <div className='field'>
      {!disabled && values.map(value =>
        <OptionButton
          key={value}
          value={value}
          label={value}
          selected={value === selectedValue}
          onClick={() => onSelect({[name]: value})}
        />
      )}
    </div>
    <style jsx>{`
      label {
        opacity: ${disabled && '0.5'};
        margin-bottom: .5rem;
        display: block;
      }
      .product-variant > :global(.btn span) {
        font-style: normal;
      }
    `}</style>
  </fieldset>

export default ProductVariantSelectItem
