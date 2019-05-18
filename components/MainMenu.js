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
          Monte sua Vela
        </a></Link></li>
        <li><Link href='/store'><a>
          Acessórios
        </a></Link></li>
<<<<<<< HEAD
        <li><Link href='/stores'><a>
          Nossas Lojas
=======
        <li><Link href='/locations'><a>
          Nossas lojas
        </a></Link></li>
		<li><Link href='/about'><a>
          Sobre nós
		 </a></Link></li>
        <li><Link href='/contact'><a>
          Suporte
>>>>>>> a0252b1fca0898a186721d9ffbfa39e2d2763390
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
