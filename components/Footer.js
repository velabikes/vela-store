// Footer ou Rodapé, localizado embaixo de todo o conteúdo do site
// Os links mapeiam a estrutura do site
// com estilo localizado dentro do components/Head.js
import Link from 'next/link'
import { offWhite, lightGray, midGray } from '../style/colors'
import PaddedView from './PaddedView'
import SubscribeForm from './SubscribeForm'

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
            <li><Link href='/store?handle=vela-1' as='/loja/vela-1'><a>
              Vela 1
            </a></Link></li>
            <li><Link href='/store' as='/loja'><a>
              Acessórios
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
        <nav className='social'>
          <h3>Social</h3>
          <ul className='social-items'>
            <li><Link href='https://www.instagram.com/velabikes/'><a target='_blank'>
              Instagram
            </a></Link></li>
            <li><Link href='https://www.facebook.com/velabikes'><a target='_blank'>
              Facebook
            </a></Link></li>
            <li><Link href='https://www.youtube.com/channel/UCa9GuqmiV3VbulKx9T2rjCw'><a target='_blank'>
              YouTube
            </a></Link></li>
          </ul>
        </nav>
        <div className='news'>
          <SubscribeForm />
        </div>
      </div>
      <div className='copyright'>
        <small>Copyright (C) 2020. Vela Bikes. CNPJ 20.430.806/0001-27. Todos os direito reservados.</small>
      </div>
      <style jsx>{`
      footer {
        display: flex;
        flex-direction: column;
      }
      .footer-navigation {
        display: flex;
        padding: 1rem;
        flex-direction: column;
      }
      .footer-navigation h3 {
        color: ${lightGray};
        text-align: center;
      }
      .footer-navigation > * {
        padding-top: 2em;
      }
      .footer-navigation > * > ul {
        padding: 0em;
      }
      .footer-navigation > * > ul > li {
        list-style: none;
        line-height: 2em;
        font-weight: 500;
        font-size: 0.8em;
        min-width: 100%;
        text-align: center;
        margin: 0em;
      }
      .footer-navigation > * > ul > li > a {
        color: ${offWhite};
      }
      .copyright {
        padding: 1.5rem 0 0 0;
        border-top: 1px solid ${midGray};
      }
      .copyright small{
        color: ${offWhite};
      }
      .footer-navigation .news {
        width: 100%;
      }
      @media only screen and (min-width: 768px) {
        .footer-navigation {
          flex-direction: row;
          padding: 2rem;
        }
        .footer-navigation h3 {
          text-align: left;
        }
        .footer-navigation > * > ul > li {
          min-width: 12em;
          text-align: left;
        }
        .footer-navigation .news {
          width: 30%;
          margin-left: auto;
        }
        .copyright {
          text-align: center;
          margin-bottom: -1rem;
        }
    `}</style>
    </PaddedView>
  </footer>

export default Footer
