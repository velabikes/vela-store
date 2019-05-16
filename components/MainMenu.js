import PropTypes from 'prop-types'
import { compose, lifecycle } from 'recompose'
import Link from 'next/link'
import withCheckout from '../containers/withCheckout'
import PaddedView from '../components/PaddedView'
import { velaBlue } from '../style/colors'

const MainMenu = () =>
  <PaddedView className='MainMenu'>
    <nav>
      <h1>Menu</h1>
      <ul className='items'>
        <li><Link href='/store?handle=vela-1'><a>
          Monte a sua
        </a></Link></li>
        <li><Link href='/store'><a>
          Acessorios
        </a></Link></li>
        <li><Link href='/contact'><a>
          Contato
        </a></Link></li>
      </ul>
    </nav>
    <style jsx>{`
      ul {
        padding: 0;
      }
      li {
        list-style: none;
        line-height: 2em;
        font-weight: 600;
        font-size: 1em;
        color: ${velaBlue};
        text-transform: uppercase;
      }
      li
    `}</style>
  </PaddedView>

export default compose(
  withCheckout
)(MainMenu)
