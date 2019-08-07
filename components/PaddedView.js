import PropTypes from 'prop-types'

const PaddedView = props =>
  <div className='PaddedView' {...props}>
    <div className='PaddedViewWrapper'>
      {props.children}
    </div>
    <style jsx>{`
      .PaddedViewWrapper {
        padding: 0 1rem;
      }
      @media only screen and (min-width: 400px) {
        .PaddedViewWrapper {
          padding: 0rem 3rem;
        }
      }
      @media only screen and (min-width: 1280px) {
        .PaddedViewWrapper {
          width: 100%;
          max-width: 1214px;
          margin: 0 auto;
        }
      }
    `}</style>
  </div>

PaddedView.propTypes = {
  children: PropTypes.node.isRequired
}

export default PaddedView
