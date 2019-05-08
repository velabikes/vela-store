import PropTypes from 'prop-types'

const PaddedView = props =>
  <div {...props}>
    {props.children}
    <style jsx>{`
      div {
        padding: 0 1em;
      }
      @media only screen and (min-width: 768px) {
        div {
          padding: 0 2em;
        }
      }
    `}</style>
  </div>

PaddedView.propTypes = {
  children: PropTypes.node.isRequired
}

export default PaddedView
