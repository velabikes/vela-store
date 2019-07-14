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

export default {
  HideOnMobile,
  HideOnDesktop
}
