import Link from 'next/link'
import { velaBlue } from '../style/colors'

const MainMenu = () =>
  <nav className='MainMenu'>
    <h1>Menu</h1>
    <ul className='items'>
      <li><Link href='/store?handle=vela-1' as='/loja/vela-1'><a>
        Monte sua Vela
      </a></Link></li>
      <li><Link href='/store' as='/loja'><a>
        Acessórios
      </a></Link></li>
      <li><Link href='/locations' as='/lugares'><a>
        Nossas lojas
      </a></Link></li>
      {/*
      <li><Link href='/about' as='/sobre'><a>
        Sobre nós
      </a></Link></li>
      */}
      <li><Link href='/charge' as='/recarga'><a>
        Rede de Recarga
      </a></Link></li>
      <li><Link href='https://velabikes.freshdesk.com/support/home'><a>
        Suporte
      </a></Link></li>
    </ul>
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
  </nav>

export default MainMenu
