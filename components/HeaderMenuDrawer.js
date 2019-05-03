import PropTypes from 'prop-types'
import { compose, lifecycle } from 'recompose'
import withCheckout from '../containers/withCheckout'

const MenuDrawer = ({ visible }) =>
  <div className='root'>
    <h2>Menu</h2>
    <ul className='items'>
      <li>item1</li>
    </ul>
    <style jsx>{`
      .root {
        position: absolute;
        left: 0;
        transform: translateX(${visible ? '0' : '-100%'});
        transition: 1s all;
        top: 0;
        bottom: 0;
        width: 600px;
        background-color: white; //#f5f5f5;
        z-index: 0;
        margin-left: 5em;
        padding: 1em;
      }
      .items li {
        font-size: 2em;
      }
    `}</style>
  </div>

MenuDrawer.propTypes = {
  checkout: PropTypes.object
}

export default compose(
  withCheckout
)(MenuDrawer)
