import Link from 'next/link'
import { velaBlue, velaRed } from '../style/colors'

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
      <li><Link href='/network/stores' as='/rede/lojas'><a>
        Nossas lojas
      </a></Link></li>
      {/*
      <li><Link href='/about' as='/sobre'><a>
        Sobre nós
      </a></Link></li>
      */}
      <li><Link href='/network/charge' as='/rede/recarga'><a>
        Rede de Recarga Rápida
      </a></Link></li>
      <li><Link href='https://velabikes.freshdesk.com/support/home'><a>
        Suporte
      </a></Link></li>
      <li><Link href='/store?handle=outlet' as='/loja/outlet'>
        <a className='outlet'>Outlet</a>
      </Link></li>
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
      li .outlet {
        color: ${velaRed}
      }
    `}</style>
  </nav>

export default MainMenu
