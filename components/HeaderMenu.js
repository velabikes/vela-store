import Link from '../components/Link'

const HeaderMenu = () =>
  <nav>
    <Link href='/store'><a>Loja</a></Link>
    <Link href='/store'><a>Loja</a></Link>
    <Link href='/store'><a>Loja</a></Link>
    <Link href='/store'><a>Loja</a></Link>
    <style jsx>{`
      nav {
        display: flex;
        justify-content: space-between;
      }
      nav a {
        color: white;
        text-transform: uppercase;
      }
    `}</style>
  </nav>

export default HeaderMenu
