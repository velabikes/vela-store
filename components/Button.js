import { compose, withProps, defaultProps } from "recompose";
import PropTypes from "prop-types";
import {
  offBlack,
  midGray,
  lightGray,
  lightGreen,
  white,
  velaBlue,
  offWhite,
  velaGreen,
  velaRed,
  velaYellow,
  darkGray,
} from "../style/colors";

const Button = ({
  children,
  onClick,
  disabled,
  loading,
  color,
  bgColor,
  textColor,
}) => (
  <>
    <button onClick={!loading && onClick} disabled={disabled}>
      {children}
    </button>
    <style jsx>{`
      button {
        padding: 0.8em 1.2em;
        margin: 0 0.5em 0.5em 0;
        font-size: 1em;
        border: 0px solid ${lightGray};
        background: ${bgColor};
        border-radius: 0.5em;
        ${!disabled && "box-shadow: 0px 3px 3px -2px rgba(0,0,0,0.15)"};
        color: ${textColor};
        font-weight: 600;
        transition: 0.2s transform, 0.2s box-shadow, 0.3s background linear,
          0.3s border linear;
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
);

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  color: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
};

export default compose(
  defaultProps({ color: midGray, textColor: offBlack, bgColor: offBlack }),
  withProps(
    ({ primary }) =>
      primary && {
        color: velaGreen,
        bgColor: lightGreen,
        textColor: offBlack,
      }
  ),
  withProps(
    ({ secondary }) =>
      secondary && {
        color: velaGreen,
        bgColor: lightGreen,
        textColor: lightGray,
      }
  ),
  withProps(
    ({ bf }) =>
      bf && { color: "#F99E0B", bgColor: "#F99E0B", textColor: offBlack }
  ),
  withProps(
    ({ outline, color }) =>
      outline && {
        bgColor: "transparent",
        textColor: color === offWhite ? offBlack : color,
      }
  ),
  withProps(
    ({ icon }) =>
      icon && {
        bgColor: "transparent",
        textColor: "transparent",
        color: "transparent",
      }
  ),
  withProps(
    ({ disabled }) =>
      disabled && { bgColor: lightGray, textColor: darkGray, color: lightGray }
  )
)(Button);
