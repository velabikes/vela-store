import { compose, withHandlers, lifecycle } from 'recompose'
import Router, { withRouter } from 'next/router'
import { offWhite } from '../style/colors'
import withOpenDrawer from '../containers/withOpenDrawer'
import { toggleDrawer } from '../lib/redux'
import { BackIcon } from '../components/Icons'

const HeaderDrawer = ({ children, visible, handleCloseClick }) =>
  <div className='HeaderDrawer'>
    {children}
    <a onClick={handleCloseClick}><BackIcon /></a>
    <style jsx>{`
      .HeaderDrawer {
        position: fixed;
        transform: translateX(${visible ? '0' : '-100%'});
        transition: ${visible ? '.5s all ease-out' : '.3s all ease-in'};
        top: 4em;
        bottom: 0;
        background-color: ${offWhite};
        box-shadow: 0px 0px ${visible ? '8' : '0'}px 0px rgba(100,100,100,0.3);
        display: flex;
        flex-direction: column;
        max-width: 100%;
        min-width: 100%;
        z-index: 1000;
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
          left: 5em;
          top: 0;
          max-width: 40vw;
          min-width: 300px;
        }
      }
    `}</style>
  </div>

export default compose(
  withRouter,
  withOpenDrawer,
  withHandlers({
    handleCloseClick: ({ dispatch }) => e => dispatch(toggleDrawer(''))
  }),
  lifecycle({
    componentDidMount() {
      Router.events.on('routeChangeStart', this.props.handleCloseClick)
    }
  })
)(HeaderDrawer)
