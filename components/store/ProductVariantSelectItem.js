import Button from '../Button'
import { velaBlue, offWhite } from '../../style/colors'

const OptionButton = ({ selected, label, ...props }) =>
  <button {...props}>
    <span />
    {label.replace(/\s*\[.*?\]\s*/g, '')}
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
        background-color: ${label.match(/\s*\[.*?\]\s*/g) && label.match(/\[(.*?)\]/)[1]};
        margin: 0 auto;
        display: ${label.match(/\s*\[.*?\]\s*/g) ? 'block' : 'none'};
        height: 2em;
        margin-bottom: ${0.61 * 0.61}em;
        width: 2em;
        border: 2px solid white;
      }
    `}</style>
  </button>

const ProductVariantSelectItem = ({
  name,
  values,
  selectedValue,
  disabled,
  onSelect
}) =>
  <fieldset>
    <div>
      <label>{name}</label>
    </div>
    {disabled && <small></small>}
    {!disabled && values.map(value =>
      <Button
        small
        key={value}
        secondary={value !== selectedValue}
        onClick={() => onSelect({[name]: value})}
      >
        {value.replace(/\s*\[.*?\]\s*/g, '')}
      </Button>
      // <OptionButton
      //   key={value}
      //   label={value}
      //   selected={value === selectedValue}
      //   onClick={() => onSelect({[name]: value})}
      // />
    )}
    <style jsx>{`
      label {
        opacity: ${disabled && '0.5'}
      }
    `}</style>
  </fieldset>

export default ProductVariantSelectItem
