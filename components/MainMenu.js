import Link from 'next/link'
import { velaRed, offBlack } from '../style/colors'

const MainMenu = () =>
  <nav className='MainMenu'>
    <h2>Menu</h2>
    <ul className='items'>
      <li><Link href='/vela'><a>
        Vela 2
      </a></Link></li>
      <li><Link href='/store' as='/loja'><a>
        Acessórios
      </a></Link></li>
      <li><Link href='/store/parts' as='/loja/pecas'><a>
        Peças
      </a></Link></li>
      {/* <li><Link href='/network/stores' as='/rede/lojas'><a>
        Nossas lojas
      </a></Link></li> */}
      {/*
      <li><Link href='/about' as='/sobre'><a>
        Sobre nós
      </a></Link></li>
      */}
      {/*
      <li><Link href='/about' as='/network/charge'><a>
        Recarga Rápida
      </a></Link></li>
      */}
      {/*       <li><Link href='/test-ride'><a>
        Test-ride
      </a></Link></li> */}
      <hr />
      <li><Link href='/network/map' as='/rede/mapa'><a>
        Rede
      </a></Link></li>
      <li><Link href='/blog'><a>
        Blog
      </a></Link></li>
      <li><Link href='/contact' as='/contato'><a>
        Contato
      </a></Link></li>
      <li><Link href='/invest' as='/investir'><a>
        Investir
      </a></Link></li>
    </ul>
    <style jsx>{`
      h2 {
        color: ${offBlack};
      }
      nav {
      padding: 0.5rem 1rem;
      }
      ul {
        padding: 0;
      }
      li {
        list-style: none;
        line-height: 2em;
        font-weight: 600;
        font-size: 1em;
      }
      li .outlet {
        color: ${velaRed}
      }
    `}</style>
  </nav>

export default MainMenu
