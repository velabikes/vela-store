import { velaBlue } from '../../style/colors'

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
        border-radius: 2em;
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
  onSelect
}) =>
  <div>
    <label>{name}</label>
    {values.map(value =>
      <OptionButton
        label={value}
        selected={value === selectedValue}
        onClick={() => onSelect({[name]: value})}
      />
    )}
  </div>

export default ProductVariantSelectItem
