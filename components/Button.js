import { velaGreen, offBlack, offWhite } from '../style/colors'

const classNameSize = ({ small, big }) => {
  if (small) return 'btn-small'
  if (big) return 'btn-big'
  return 'btn-normal'
}

const createClassName = ({ secondary, cta, inverted }) =>
  inverted
    ? secondary ? 'btn-secondary-inverted' : cta ? 'btn-cta-inverted' : 'btn-default'
    : secondary ? 'btn-secondary' : cta ? 'btn-cta' : 'btn-default'

const button = ({
  children, onClick, disabled, secondary, cta, inverted, style, loading, loadingBgColor, loadingTextColor, type, small, big, ...props
}) =>
  <>
    <button
      type={type}
      onClick={!loading && onClick}
      style={style}
      disabled={disabled}
      className={`btn ${createClassName({ secondary, cta, inverted })} ${classNameSize({small, big})}`}
      {...props}
    >
      <span className={`btn-text ${loading ? 'btn-text-progress' : ''}`}>{children}</span>
      <div className={`btn-loading-bar ${loading ? 'btn-loading-progress' : ''}`}/>
    </button>
    <style jsx>{`
      .btn-small {
        margin: 0.61em 0.61em 0 0;
        font-size: 0.61rem;
        padding: 0.61em 1em;
      }
      .btn-normal {
        margin-right: 1em;
        font-size: 1em;
        padding: 0.61em 1.6em;
      }
      .btn-big {
        margin: 0.61em 0.61em 0 0;
        font-size: 1.29em;
        padding: 0.61em 1em;
      }

      .btn-text {
        font-style: italic;
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
        border-radius: 5px;
        font-family: neue-haas-grotesk-display, sans;
        font-weight: 700;
        text-transform: uppercase;
        cursor: pointer;
        margin: 0;
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
        background-color: ${loadingBgColor || velaGreen};
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