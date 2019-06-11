import { velaGreen, offBlack, offWhite } from '../style/colors'

const createClassName = ({ secondary, inverted }) => {
  if (secondary && inverted) return 'btn-secondary-inverted'
  return secondary ? 'btn-secondary' : 'btn-default'
}

const button = ({
  children, onClick, disabled, secondary, inverted, style, loading, loadingBgColor, loadingTextColor
}) =>
  <>
    <button
      onClick={onClick}
      style={style}
      disabled={disabled}
      className={`btn ${createClassName({ secondary, inverted })}`}
    >
      <span className={`btn-text ${loading ? 'btn-text-progress' : ''}`}>{children}</span>
      <div className={`btn-loading-bar ${loading ? 'btn-loading-progress' : ''}`}/>
    </button>
    <style jsx>{`
      .btn-text {
        position: relative;
        z-index: 1;
      }
      .btn-text-progress {
        color: ${secondary && !inverted ? offBlack : offWhite};
        animation-duration: 1s;
        animation-name: loading-text-animation;
        animation-iteration-count: infinite;
      }
      @keyframes loading-text-animation {
        from {  }
        40% { color: ${loadingTextColor} }
        60% { color: ${loadingTextColor} }
        to {  }
      }

      .btn-default {
        background-color: ${offBlack};
        color: ${offWhite};
        border: 0px solid transparent;
      }
      .btn-default:hover {
        background-color: ${velaGreen};
        color: ${offWhite};
        border: 0px solid transparent;
      }

      .btn-secondary {
        background-color: transparent;
        color: ${offBlack};
        border: 1px solid ${offBlack};
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

      button {
        position: relative;
        color: white;
        border: 0px solid transparent;
        font-size: 1em;
        padding: 0.6em 1.6em;
        border-radius: 5px;
        font-family: neue-haas-grotesk-display, sans;
        font-weight: 700;
        text-transform: uppercase;
        cursor: pointer;
        margin: 0;
        font-style: normal;
        transition: .4s all cubic-bezier(0.175, 0.885, 0.32, 1.275);
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
        background-color: ${loadingBgColor};
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

export default button