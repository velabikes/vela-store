import PropTypes from 'prop-types'

const PaddedView = props =>
  <div className='PaddedView' {...props}>
    <div className='PaddedViewWrapper'>
      {props.children}
    </div>
    <style jsx>{`
      .PaddedViewWrapper {
        padding: 0 1rem 1rem 1rem;
        max-height: 100%;
      }
      @media only screen and (min-width: 400px) {
        .PaddedViewWrapper {
          padding: 0rem 1rem 2rem 1rem;
        }
      }
      @media only screen and (min-width: 1280px) {
        .PaddedViewWrapper {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding-bottom: 3rem;
        }
      }
    `}</style>
  </div>

PaddedView.propTypes = {
  children: PropTypes.node.isRequired
}

export default PaddedView
