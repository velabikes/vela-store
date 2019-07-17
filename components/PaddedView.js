import PropTypes from 'prop-types'

const PaddedView = props =>
  <div {...props}>
    {props.children}
    <style jsx>{`
      div {
        padding: 1rem;
      }
      @media only screen and (min-width: 400px) {
        div {
          padding: 1rem 2rem;
        }
      }
      @media only screen and (min-width: 1366px) {
        div {
          width: 100%;
          max-width: 1300px;
          margin: 0 auto;
        }
      }
    `}</style>
  </div>

PaddedView.propTypes = {
  children: PropTypes.node.isRequired
}

export default PaddedView
