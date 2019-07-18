import { velaGreen, offBlack, offWhite, velaBlue } from '../style/colors'
import { compose, withProps } from 'recompose';

const classNameSize = ({ small, big }) => {
  if (small) return 'btn-small'
  if (big) return 'btn-big'
  return 'btn-normal'
}

const createClassName = ({ secondary, action, inverted }) =>
  inverted
    ? secondary ? 'btn-secondary-inverted' : action ? 'btn-action-inverted' : 'btn-default'
    : secondary ? 'btn-secondary' : action ? 'btn-action' : 'btn-default'

const Button = ({
  children,
  onClick,
  disabled,
  secondary,
  action,
  inverted,
  style,
  loading,
  type,
  small,
  big,
  bgLoadingBar,
  txtLoadingColor,
  txtBarColor,
  ...props
}) =>
  <>
    <button
      type={loading ? 'button' : type}
      onClick={loading ? undefined : onClick}
      style={style}
      disabled={disabled}
      className={`btn ${createClassName({ secondary, action, inverted })} ${classNameSize({small, big})}`}
      {...props}
    >
      <div className={`btn-loading-bar ${loading ? 'btn-loading-progress' : ''}`}/>
      <span className={`btn-text ${loading ? 'btn-text-progress' : ''}`}>{children}</span>
    </button>
    <style jsx>{`
      .btn-small {
        margin: 0.5em 0.5em 0 0;
        font-size: 0.5em;
        padding: 0.5em 1em;
      }
      .btn-normal {
        font-size: .75em;
        line-height: 1em;
        padding: 1em 1em;
      }
      .btn-big {
        font-size: 1em;
        line-height: 1em;
        padding: 1em 1em;
      }

      .btn-text {
        font-style: italic;
        position: relative;
      }
      .btn-text-progress {
        color: ${txtLoadingColor};
        animation-duration: 1s;
        animation-name: loading-text-animation;
        animation-iteration-count: infinite;
      }
      @keyframes loading-text-animation {
        40% { color: ${txtBarColor} }
        60% { color: ${txtBarColor} }
      }

      .btn-default {
        background-color: ${velaGreen};
        color: ${offWhite};
        border: 0px solid transparent;
      }
      .btn-default:hover {
        background-color: ${offBlack};
        color: ${offWhite};
        border: 0px solid transparent;
      }

      .btn-secondary {
        background-color: transparent;
        color: ${velaGreen};
        border: 1px solid ${velaGreen};
      }
      .btn-secondary:hover {
        background-color: ${velaGreen};
        color: ${offWhite};
        border: 1px solid ${velaGreen};
      }
      .btn-secondary-inverted {
        background-color: transparent;
        color: ${offWhite};
        border: 1px solid ${offWhite};
      }
      .btn-secondary-inverted:hover {
        background-color: ${offWhite};
        color: ${offBlack};
        border: 1px solid ${offWhite};
      }

      .btn-action {
        background-color: ${velaBlue};
        color: ${offWhite};
        border: 1px solid transparent;
      }
      .btn-action:hover {
        background-color: ${offWhite};
        color: ${velaBlue};
        border: 1px solid ${velaBlue};
      }
      .btn-action-inverted {
        background-color: transparent;
        color: ${velaBlue};
        border: 1px solid ${velaBlue};
      }
      .btn-action-inverted:hover {
        background-color: ${velaBlue};
        color: ${offWhite};
        border: 1px solid ${velaBlue};
      }

      button {
        position: relative;
        color: ${offWhite};
        border: 0px solid transparent;
        border-radius: 5px;
        font-family: neue-haas-grotesk-display, sans;
        font-weight: 700;
        text-transform: uppercase;
        cursor: pointer;
        margin: 0;
        transition: .4s all cubic-bezier(0.175, 0.885, 0.32, 1.275);
        margin-right: .6rem;
      }
      button:disabled {
        opacity: 0.7;
        filter: saturate(20%);
        pointer-events: none;
        transform: translate3d(0,0,0);
      }
      button:active {
        box-shadow: 0px 0px 18px -7px ${velaGreen};
      }

      .btn-loading-bar {
        position: absolute;
        background-color: ${bgLoadingBar};
        height: 100%;
        width: 0;
        top: 0;
        border-radius: 5px;
      }
      .btn-loading-progress {
        animation-duration: 1s;
        animation-name: loading-animation;
        animation-iteration-count: infinite;
      }
      @keyframes loading-animation {
        from { left: 0; width: 0; }
        40% { left: 0; width: 100%; }
        60% { right: 0; width: 100%; }
        to { right: 0; width: 0; }
      }
    `}</style>
  </>

export default compose(
  withProps(({ loadingBgColor, action, secondary, inverted }) => {
    if (action) return inverted
      ? { bgLoadingBar: velaBlue }
      : { bgLoadingBar: offWhite }

    if(!inverted && !action && !secondary) return { bgLoadingBar: offBlack }
    
    return { bgLoadingBar: loadingBgColor || velaGreen }
  }),
  withProps(({ inverted, secondary, action, loadingTextColor, }) => {
    if (!inverted && secondary) return {
      txtLoadingColor: offBlack,
      txtBarColor: offWhite
    }
    
    if (!inverted && action) return {
      txtLoadingColor: offWhite,
      txtBarColor: velaBlue
    }

    return {
      txtLoadingColor: offWhite,
      txtBarColor: loadingTextColor || offWhite
    }
  })
)(Button)
