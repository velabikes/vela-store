import { compose, withProps, defaultProps } from 'recompose'
import PropTypes from 'prop-types'
import {
  velaGreen,
  offBlack,
  midGray,
  lightGray,
  white,
  velaBlue,
  offWhite
} from '../style/colors'

const Button = ({
  children,
  onClick,
  disabled,
  loading,
  color,
  bgColor,
  textColor
}) =>
  <>
    <button
      onClick={!loading && onClick}
      disabled={disabled}
    >
      {children}
    </button>
    <style jsx>{`
      button {
        padding: 0.8em 1.2em;
        margin: 0 0.5em 0.5em 0;
        font-size: 0.8em;
        border: 2px solid ${color};
        background: ${bgColor};
        border-radius: 0.5em;
        ${!disabled && 'box-shadow: 0px 3px 3px -2px rgba(0,0,0,0.15)'};
        color: ${textColor};
        font-weight: 600;
        transition: .2s transform, .2s box-shadow, .3s background linear, .3s border linear;
        -webkit-tap-highlight-color: transparent;
        cursor: pointer;
        outline: none;
      }
      button:active {
        transform: translateY(2px);
        box-shadow: none;
        color: ${bgColor};
      }
    `}</style>
  </>

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  color: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string
}

export default compose(
  defaultProps({ color: offWhite, textColor: offBlack, bgColor: offWhite }),
  withProps(({ primary }) => primary && ({ color: velaGreen, bgColor: velaGreen, textColor: white })),
  withProps(({ secondary }) => secondary && ({ color: velaBlue, bgColor: velaBlue, textColor: white })),
  withProps(({ outline, color }) => outline && ({ bgColor: 'transparent', textColor: color === offWhite ? offBlack : color })),
  withProps(({ disabled }) => disabled && ({ bgColor: lightGray, textColor: midGray, color: lightGray }))
)(Button)
