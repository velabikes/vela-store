import PropTypes from 'prop-types'
import { compose, lifecycle } from 'recompose'
import withCheckout from '../containers/withCheckout'

const MainMenu = ({ visible }) =>
  <div className='MainMenu'>
    <h2>Menu</h2>
    <ul className='items'>
      <li>item1</li>
    </ul>
    <style jsx>{`
      .MainMenu {
        width: 500px;
        padding: 1em;
      }
      .items li {
        font-size: 2em;
      }
    `}</style>
  </div>

export default compose(
  withCheckout
)(MainMenu)
