import PropTypes from 'prop-types'

const PaddedView = ({ leftBackground, rightBackground, children, ...props }) =>
  <div className='PaddedSplitView' {...props}>
    <div>
      <div>
        {children[0]}
      </div>
    </div>
    <div>
      <div>
        {children[1]}
      </div>
    </div>
    <style jsx>{`
      .PaddedSplitView > div {
        background: ${rightBackground};
      }
      .PaddedSplitView > div:first-child {
        background: ${leftBackground};
      }
      .PaddedSplitView > div > div {
        padding: 0 1rem;
      }
      @media only screen and (min-width: 768px) {
        .PaddedSplitView {
          display: flex;
        }
        .PaddedSplitView > div {
          flex: 1;
          display: flex;
        }
        .PaddedSplitView > div:first-child {
          justify-content: flex-end;
          background: ${leftBackground};
        }
        .PaddedSplitView > div > div {
          padding: 0 2rem;
          max-width: 600px;
        }
      }
    `}</style>
  </div>

PaddedView.propTypes = {
  children: PropTypes.node.isRequired,
  leftBackground: PropTypes.string,
  rightBackground: PropTypes.string
}

export default PaddedView
