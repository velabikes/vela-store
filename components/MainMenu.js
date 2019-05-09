import PropTypes from 'prop-types'
import { compose, lifecycle } from 'recompose'
import Link from 'next/link'
import withCheckout from '../containers/withCheckout'
import PaddedView from '../components/PaddedView'

const MainMenu = ({ visible }) =>
  
  <PaddedView className='MainMenu'>
    <nav>
      <h1>Menu</h1>
      <ul className='items'>
        <li><Link href='https://turmadamonica.com.br'><a>
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
        font-size: 1em;
      }
      li
    `}</style>
  </PaddedView>

export default compose(
  withCheckout
)(MainMenu)
