import { velaGreen, offBlack, darkGray, lightGray, offWhite, velaBlue } from '../style/colors'
import { compose, withProps, defaultProps } from 'recompose';

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
        border: 1px solid ${color};
        background: ${bgColor};
        border-radius: 2rem;
        margin-bottom: 0.5em;
        ${!disabled && 'box-shadow: 0px 3px 3px -2px rgba(0,0,0,0.15)'};
        color: ${textColor};
        text-transform: uppercase;
        font-weight: 700;
        transition: .2s transform, .2s box-shadow;
        -webkit-tap-highlight-color: transparent;
      }
      button:active {
        transform: translateY(2px);
        box-shadow: none;
      }
    `}</style>
  </>

export default compose(
  defaultProps({ color: lightGray, textColor: offBlack, bgColor: lightGray }),
  withProps(({ primary }) => primary && ({ color: velaGreen, bgColor: velaGreen, textColor: offWhite })),
  withProps(({ secondary }) => secondary && ({ color: velaBlue, bgColor: velaBlue, textColor: offWhite })),
  withProps(({ outline, color }) => outline && ({ bgColor: 'transparent', textColor: color })),
  withProps(({ disabled }) => disabled && ({ bgColor: lightGray, textColor: darkGray, color: lightGray })),
)(Button)
