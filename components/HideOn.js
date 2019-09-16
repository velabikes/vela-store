import PropTypes from 'prop-types'

export const HideOnMobile = ({ children }) =>
  <div className='hide-mobile'>
    {children}
    <style jsx>{`
      @media only screen and (max-width: 767px) {
        .hide-mobile {
          display: none;
        }
      }
    `}</style>
  </div>

HideOnMobile.propTypes = {
  children: PropTypes.node
}

export const HideOnDesktop = ({ children }) =>
  <div className='hide-mobile'>
    {children}
    <style jsx>{`
      @media only screen and (min-width: 768px) {
        .hide-mobile {
          display: none;
        }
      }
    `}</style>
  </div>

HideOnDesktop.propTypes = {
  children: PropTypes.node
}

export default {
  HideOnMobile,
  HideOnDesktop
}
