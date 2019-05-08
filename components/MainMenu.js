import PropTypes from 'prop-types'
import { compose, lifecycle } from 'recompose'
import Link from 'next/link'
import withCheckout from '../containers/withCheckout'

const MainMenu = ({ visible }) =>
  <div className='MainMenu'>
    <h2>Menu</h2>
    <ul className='items'>
      <li><Link href='https://turmadamonica.com.br'><a>
        Monte a sua
      </a></Link></li>
      <li><Link href='/store'><a>
        Acessorios
      </a></Link></li>
      <li><Link href='/user'><a>
        Minha Conta
      </a></Link></li>
      <li><Link href='/contact'><a>
        Contato
      </a></Link></li>
    </ul>
  </div>

export default compose(
  withCheckout
)(MainMenu)
