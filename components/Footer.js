// Footer ou Rodapé, localizado embaixo de todo o conteúdo do site
// Os links mapeiam a estrutura do site
// com estilo localizado dentro do components/Head.js
import Link from 'next/link'
import { offWhite, lightGray, midGray } from '../style/colors'
import PaddedView from './PaddedView'
import SubscribeForm from './SubscribeForm'
import { Instagram, Facebook, YouTube } from './Icons'

const Footer = () =>
  <footer>
    <PaddedView style={{ background: `#272727` }}>
      <div className='footer-navigation'>
        <nav className='store'>
          <h3>Loja</h3>
          <ul className='store-items'>
            <li><Link href='/vela'><a>
              Vela 2
            </a></Link></li>
            <li><Link href='/store' as='/loja'><a>
              Acessórios
            </a></Link></li>
            <li><Link href='/store/parts' as='/loja/pecas'><a>
              Peças
            </a></Link></li>
          </ul>
        </nav>
        <nav className='about'>
          <h3>Sobre</h3>
          <ul className='about-items'>
            <li><Link href='/network/map' as='/rede/mapa'><a>
              Rede
            </a></Link></li>
            <li><Link href='/blog'><a>
              Blog
            </a></Link></li>
            <li><Link href='/invest' as='/investir'><a>
              Investir
            </a></Link></li>
          </ul>
        </nav>
        <nav className='help'>
          <h3>Ajuda</h3>
          <ul className='help-items'>
            <li><Link href='/contact' as='/contato'><a>
              Contato
            </a></Link></li>
            <li><Link href='https://velabikes.freshdesk.com/support/home'><a>
              FAQ
            </a></Link></li>
            <li><Link href='/legal'><a>
              Termos
            </a></Link></li>
          </ul>
        </nav>
        <div className='social'>
          <h3>+</h3>
            <Link href='https://www.instagram.com/velabikes/'><a>
              <div className='social-icon'><Instagram/></div>
            </a></Link>
            <Link href='https://www.facebook.com/velabikes'><a>
              <div className='social-icon'><Facebook /></div>
            </a></Link>
            <Link href='https://www.youtube.com/channel/UCa9GuqmiV3VbulKx9T2rjCw'><a>
              <div className='social-icon'><YouTube /></div>
            </a></Link>
        </div>
        <div className='news'>
          <SubscribeForm />
        </div>
      </div>
      <div className='copyright'>
        <small>Copyright (C) 2020. Vela Bikes. Todos os direito reservados. CNPJ 20.430.806/0001-27.</small>
      </div>
      <style jsx>{`
      footer {
        display: flex;
        flex-direction: column;
      }
      .footer-navigation {
        display: flex;
        padding: 1rem;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
      }
      .footer-navigation h3 {
        color: ${lightGray};
        text-align: center;
      }
      .footer-navigation > * {
        padding-top: 2em;
      }
      .footer-navigation > nav {
        min-width: 8em;
      }
      .footer-navigation > * > ul {
        padding: 0;
        margin: 0;
      }
      .footer-navigation > * > ul > li {
        list-style: none;
        line-height: 2em;
        font-weight: 500;
        font-size: 0.8em;
        min-width: 100%;
        margin: 0em;
        text-align: center;
      }
      .footer-navigation > * > ul > li > a {
        color: ${offWhite};
      }
      .copyright {
        padding: 1.5rem 0 1.5em 0;
        text-align: center;
        border-top: 1px solid ${midGray};
      }
      .copyright small{
        color: ${offWhite};
      }
      .footer-navigation .news {
        width: 100%;
      }
      .footer-navigation .social {
        width: 8em;
      }
      .footer-navigation .social .social-icon {
        max-width: 1.5em;
        margin: 0 auto 0.2em auto;
      }
      @media only screen and (min-width: 768px) {
        .footer-navigation {
          flex-direction: row;
          padding: 1rem;
          justify-content: flex-start;
        }
        .footer-navigation h3 {
          text-align: left;
        }
        .footer-navigation > nav {
          min-width: 8em;
        }
        .footer-navigation > * > ul > li {
          text-align: left;
        }
        .footer-navigation .news {
          width: 24em;
        }
        .copyright {
          text-align: center;
          margin-bottom: -1rem;
        }
        .footer-navigation .social {
          width: 4em;
          margin-left: auto;
        }
        .footer-navigation  .social h3 {
          text-align: right;
        }
      }
    `}</style>
    </PaddedView>
  </footer>

export default Footer
