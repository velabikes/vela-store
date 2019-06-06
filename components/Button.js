import { velaGreen, velaBlue, offBlack, offWhite, lightGray } from '../style/colors'

const createClassName = ({ primary, secondary, inverted, loading }) => {
  if(primary && secondary) console.error('You can only choose between primary or secondary, and not both')
  const defaultClass = !primary && !secondary

  let name;
  if (defaultClass) name = 'default'
  if (primary) name = 'primary'
  if (secondary) name = 'secondary'

  const classNames = inverted ? `btn-${name} btn-${name}-inverted` : `btn-${name}`
  const classLoading = loading ? `${classNames} btn-loading` : classNames

  return classLoading
}

const button = ({ children, onClick, disabled, primary, secondary, inverted, style, loading }) =>
  <>
    <button
      onClick={onClick}
      style={style}
      disabled={disabled}
      className={createClassName({ primary, secondary, inverted, loading })}
    >
      {children}
    </button>
    <style jsx>{`
      .btn-default {
        background-color: ${velaBlue};
      }
      .btn-default-inverted {
        background-color: transparent;
        border: 1px solid ${velaBlue};
        color: ${velaBlue};
      }
      .btn-default:hover {
        background-color: #649bcc;
      }
      .btn-default-inverted:hover {
        color: ${offWhite}
      }

      .btn-primary {
        background-color: ${offBlack};
        color: ${offWhite};
        border: 0px solid transparent;
      }
      .btn-primary:hover {
        background-color: ${velaGreen};
        color: ${offWhite};
        border: 0px solid transparent;
      }
      .btn-primary:hover {
        background-color: ${velaGreen};
      }

      .btn-secondary {
        background-color: none;
        color: ${offBlack};
        border: 1px solid ${offBlack};
      }
      .btn-secondary:hover {
        background-color: ${velaGreen};
        color: ${offWhite};
        border: 1px solid ${velaGreen};
      }
      .btn-secondary-inverted {
        background-color: none;
        color: ${offBlack};
        border: 1px solid ${offWhite};
      }
      .btn-secondary-inverted:hover {
        background-color: ${offWhite};
        color: ${offBlack};
        border: 1px solid ${offWhite};
      }

      button {
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

      .btn-loading {
        background-color: red;
      }
    `}</style>
  </>

export default button