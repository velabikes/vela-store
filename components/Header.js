import Link from 'next/link'
import { velaGreen } from '../style/colors'
import PaddedView from '../components/PaddedView'

const Header = () =>
  <header>
    <PaddedView>
      <nav>
        <Link href='/store'><a>Loja</a></Link>
        <Link href='/store'><a>Loja</a></Link>
        <Link href='/store'><a>Loja</a></Link>
        <Link href='/store'><a>Loja</a></Link>
      </nav>
    </PaddedView>
    <style jsx>{`
      header {
        background-color: ${velaGreen};
        padding: 1em 0;
        color: white;
      }
      nav {
        display: flex;
        justify-content: space-between;
      }
      nav a {
        color: white;
        text-transform: uppercase;
      }
    `}</style>
  </header>

export default Header
