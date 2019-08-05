import { velaGreen, offBlack, lightGray, offWhite, velaBlue } from '../style/colors'
import { compose, withProps } from 'recompose';

const Button = ({
  children,
  onClick,
  disabled,
  loading,
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
        border: 1px solid ${lightGray};
        background: ${lightGray};
        border-radius: 2rem;
        margin-bottom: 0.5em;
        box-shadow: 0px 2px 2px rgba(0,0,0,0.1);
        color: ${offBlack};
        text-transform: uppercase;
        font-weight: 500;
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
