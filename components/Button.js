import { velaGreen, offBlack, offWhite, velaBlue } from '../style/colors'
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
