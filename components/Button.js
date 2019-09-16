import { compose, withProps, defaultProps } from 'recompose'
import PropTypes from 'prop-types'
import {
  velaGreen,
  offBlack,
  darkGray,
  midGray,
  lightGray,
  offWhite,
  velaBlue
} from '../style/colors'

const Button = ({
  children,
  onClick,
  disabled,
  loading,
  color,
  bgColor,
  textColor,
  ...props
}) =>
  <>
    <button
      onClick={!loading && onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
    <style jsx>{`
      button {
        width: 100%;
        padding: .5rem 1rem;
        font-size: .8rem;
        background: none;
        border: 2px solid ${color};
        background: ${bgColor};
        border-radius: 2rem;
        margin-bottom: 0.5em;
        ${!disabled && 'box-shadow: 0px 3px 3px -2px rgba(0,0,0,0.15)'};
        color: ${textColor};
        text-transform: uppercase;
        font-weight: 700;
        transition: .2s transform, .2s box-shadow, .3s background linear, .3s border linear;
        -webkit-tap-highlight-color: transparent;
        cursor: pointer;
        outline: none;
      }
      button:active {
        transform: translateY(2px);
        box-shadow: none;
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
  defaultProps({ color: lightGray, textColor: offBlack, bgColor: lightGray }),
  withProps(({ primary }) => primary && ({ color: velaGreen, bgColor: velaGreen, textColor: offWhite })),
  withProps(({ secondary }) => secondary && ({ color: velaBlue, bgColor: velaBlue, textColor: offWhite })),
  withProps(({ outline, color }) => outline && ({ bgColor: 'transparent', textColor: color === lightGray ? offBlack : color })),
  withProps(({ disabled }) => disabled && ({ bgColor: midGray, textColor: darkGray, color: midGray }))
)(Button)
