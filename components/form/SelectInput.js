import { white } from 'style/colors'
import PropTypes from 'prop-types'

const SelectInput = ({ children, field, ...props }) =>
  <div>
    <select
      {...field}
      {...props}
    >
      {children}
    </select>
    <span />
    <style jsx>{`
      div {
        position: relative;
        margin: 0.61em 0 0.61em;;
      }
      select {
        -moz-appearance: none;
        -webkit-appearance: none;
        appearance: none;
        border: 0;
        padding: 10px;
        border-radius: 5px;
        width: 100%;
        font-size: 1rem;
        font-family: neue-haas-grotesk-display, sans-serif;
        box-sizing: border-box;
        background: ${white};
        box-shadow: 0 2px 3px rgba(0,0,0,0.05), 0 2px 3px rgba(0,0,0,0.05);
      }
      span {
        display: block;
        width: 0;
        height: 0;
        position: absolute;
        top: 50%;
        right: 1em;
        transform: translateY(-50%);
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        border-top: 5px solid black;
      }
    `}</style>
  </div>

SelectInput.propTypes = {
  children: PropTypes.any,
  label: PropTypes.any
}

export default SelectInput
