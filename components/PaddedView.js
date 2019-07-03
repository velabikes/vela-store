import PropTypes from 'prop-types'

const PaddedView = props =>
  <div {...props}>
    {props.children}
    <style jsx>{`
      div {
        padding: 1px 1em;
      }
      @media only screen and (min-width: 768px) {
        div {
          padding: 1px 2em;
        }
      }
      @media only screen and (min-width: 1366px) {
        div {
          padding: 1px 3em;
          width: 100%;
          max-width: 1366px;
          margin: 0 auto;
        }
      }
    `}</style>
  </div>

PaddedView.propTypes = {
  children: PropTypes.node.isRequired
}

export default PaddedView
