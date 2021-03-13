// Footer ou Rodapé, localizado embaixo de todo o conteúdo do site
// Os links mapeiam a estrutura do site
// com estilo localizado dentro do components/Head.js
import Link from "next/link";
import { offWhite, lightGray, midGray } from "../style/colors";
import PaddedView from "./PaddedView";
import SubscribeForm from "./SubscribeForm";
import { Instagram, Facebook, YouTube, Linkedin, Twitter } from "./Icons";

const Footer = () => (
  <footer>
    <PaddedView style={{ background: `#272727` }}>
      <div className="footer-navigation">
        <div className="footer-links">
          <nav className="store">
            <h3>Loja</h3>
            <ul className="store-items">
              <li>
                <Link href="/vela">
                  <a>Vela 2</a>
                </Link>
              </li>
              <li>
                <Link href="/velaplus" as="/velamais">
                  <a>Vela+</a>
                </Link>
              </li>
              <li>
                <Link href="/store" as="/loja">
                  <a>Acessórios</a>
                </Link>
              </li>
              <li>
                <Link href="/store/parts" as="/loja/pecas">
                  <a>Peças</a>
                </Link>
              </li>
            </ul>
          </nav>
          <nav className="about">
            <h3>Sobre</h3>
            <ul className="about-items">
              <li>
                <Link href="/network/map" as="/rede/mapa">
                  <a>Rede</a>
                </Link>
              </li>
              <li>
                <Link href="/test-ride" as="/rede/testride">
                  <a>Test-ride</a>
                </Link>
              </li>
              <li>
                <Link href="/blog">
                  <a>Blog</a>
                </Link>
              </li>
              <li>
                <Link href="/invest" as="/investir">
                  <a>Investir</a>
                </Link>
              </li>
            </ul>
          </nav>
          <nav className="help">
            <h3>Ajuda</h3>
            <ul className="help-items">
              <li>
                <Link href="/contact" as="/contato">
                  <a>Contato</a>
                </Link>
              </li>
              <li>
                <a href="https://velabikes.freshdesk.com/support/home">
                  FAQ
                </a>
              </li>
              <li>
                <Link href="/legal">
                  <a>Termos</a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="news">
          <SubscribeForm />
          <div className="social">
          <div className="social-icon">
            <a href="https://www.instagram.com/velabikes/">
                <Instagram />
            </a>
          </div>
          <div className="social-icon">
            <a href="https://www.facebook.com/velabikes">
              <Facebook />
            </a>
          </div>
          <div className="social-icon">
            <a href="https://www.linkedin.com/company/velabikes">
                <Linkedin />
            </a>
          </div>
          <div className="social-icon">
            <a href="https://twitter.com/VelaBikes">
                <Twitter/>
            </a>
          </div>
          <div className="social-icon">
            <a href="https://www.youtube.com/channel/UCa9GuqmiV3VbulKx9T2rjCw">
                <YouTube />
            </a>
          </div>
        </div>
        </div>
      </div>
      <div className="copyright">
        <small>
          Copyright (C) 2021. Vela Bikes. Todos os direitos reservados. CNPJ
          20.430.806/0001-27.
        </small>
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
        .footer-navigation .footer-links > * {
          padding-top: 1em;
        }
        .footer-navigation .footer-links > nav {
          min-width: 8em;
          margin: 2em 0;
        }
        .footer-navigation .footer-links > * > ul {
          padding: 0;
          margin: 0;
        }
        .footer-navigation .footer-links > * > ul > li {
          list-style: none;
          line-height: 2em;
          font-weight: 500;
          font-size: 1em;
          min-width: 100%;
          margin: 0em;
          text-align: center;
        }
        .footer-navigation .footer-links > * > ul > li > a {
          color: ${offWhite};
        }
        .copyright {
          margin-top: 1em;
          padding: 2rem 0 1.5em 0;
          text-align: center;
          border-top: 1px solid ${midGray};
        }
        .copyright small {
          color: ${offWhite};
        }
        .footer-navigation .news {
          width: 100%;
          padding-top: 1em;
        }
        .footer-navigation .social {
          display: flex;
          flex-direction: row;
          justify-content: center;
        }
        .footer-navigation .social .social-icon {
          width: 2em;
          height: 2em;
          margin: 1em 0.8em 0 0.8em;
        }

        @media only screen and (min-width:768px){
          .footer-navigation {
            flex-direction: row;
            padding: 2rem 1rem 1rem 2rem;
            justify-content: space-between;
          }
          .footer-navigation .footer-links {
            display: flex;
            flex-direction: row;
          }
          .footer-navigation h3 {
            text-align: left;
          }
          .footer-navigation .footer-links > nav {
            min-width: 7em;
            margin: 0;
          }
          .footer-navigation .footer-links > * > ul > li {
            text-align: left;
          }
          .footer-navigation .news {
            width: 20em;
          }
          .footer-navigation .social {
            justify-content: flex-start;
          }
          .footer-navigation .social .social-icon {
            margin: 1em 1.5em 0 0;
          }
          .copyright {
            text-align: center;
            margin-bottom: -1rem;
          }
          .footer-navigation .social h3 {
            text-align: right;
          }
        }
        @media only screen and (min-width:1000px){
          .footer-navigation .footer-links > nav {
            min-width: 10em;
            margin: 0;
          }
        }
      `}</style>
    </PaddedView>
  </footer>
);

export default Footer;
