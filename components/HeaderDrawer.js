import { compose, withHandlers, lifecycle } from 'recompose'
import PropTypes from 'prop-types'
import Router, { withRouter } from 'next/router'
import { white } from '../style/colors'
import withOpenDrawer from '../containers/withOpenDrawer'
import { toggleDrawer } from '../lib/redux'
import { BackIcon } from '../components/Icons'

/* eslint-disable */
const HeaderDrawer = ({ children, visible, handleCloseClick }) =>
  <div className='HeaderDrawer'>
    {children}
    <a onClick={handleCloseClick}><BackIcon /></a>
    <style jsx>{`
      .HeaderDrawer {
        position: fixed;
        transform: translateX(${visible ? '0' : '100%'});
        transition: ${visible ? '.5s all ease-out' : '.3s all ease-in'};
        top: 3.5em;
        right: 0;
        bottom: 0;
        background-color: ${white};
        box-shadow: 0px 0px ${visible ? '8' : '0'}px 0px rgba(100,100,100,0.3);
        display: flex;
        flex-direction: column;
        max-width: 100%;
        min-width: 100%;
        z-index: 1000;
        padding: 1em;
      }
      .HeaderDrawer :global(div:first-child) {
        flex: 1;
      }
      .HeaderDrawer :global(div) {
        opacity: ${visible ? '1' : '0'};
        transition: .2s opacity ${visible ? '.3s ease-in' : 'ease-out'};
      }
      a {
        position: absolute;
        right: 2em;
        top: 1.75em;
      }
      @media only screen and (min-width: 768px) {
        .HeaderDrawer {
          right: 0;
          top: 3em;
          max-width: 600px;
          min-width: 480px;
        }
      }
    `}</style>
  </div>
/* eslint-enable */

HeaderDrawer.propTypes = {
  children: PropTypes.node,
  handleCloseClick: PropTypes.func,
  visible: PropTypes.bool
}

export default compose(
  withRouter,
  withOpenDrawer,
  withHandlers({
    handleCloseClick: ({ dispatch }) => e => dispatch(toggleDrawer(''))
  }),
  lifecycle({
    componentDidMount () {
      Router.events.on('routeChangeStart', this.props.handleCloseClick)
    }
  })
)(HeaderDrawer)
