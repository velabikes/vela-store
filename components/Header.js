import { compose, withProps, withHandlers } from "recompose";
import PropTypes from "prop-types";
import Link from "next/link";
import { toggleDrawer } from "../lib/redux";
import {
  white,
  offWhite,
  velaGreen,
  offBlack,
  lightGreen,
  velaRed,
} from "../style/colors";
import withOpenDrawer from "../containers/withOpenDrawer";
import Cart from "./store/Cart";
import HeaderDrawer from "./HeaderDrawer";
import HeaderMenu from "./HeaderMenu";
import MainMenu from "./MainMenu";
import Footer from "./Footer";
import { Logo } from "./Icons";

/* eslint-disable */
const Header = ({ isCartOpen, isMenuOpen, children, handleContentClick }) => (
  <>
    <HeaderDrawer visible={isCartOpen}>
      <Cart />
    </HeaderDrawer>
    <HeaderDrawer visible={isMenuOpen}>
      <MainMenu />
    </HeaderDrawer>
    <header className="header">
      <div className="top">
        <div className="logo">
          <Link href="/">
            <a>
              <Logo />
            </a>
          </Link>
        </div>
        <div className="left">
          <Link href="/vela">
            <a>Vela 2</a>
          </Link>
        </div>
        <div className="left">
          <Link href="/velamais">
            <a>Vela+</a>
          </Link>
        </div>
        <div className="left">
          <Link href="/store" as="/loja">
            <a>Acessórios</a>
          </Link>
        </div>
        <div className="left">
          <Link href="/store/parts" as="/loja/pecas">
            <a>Peças</a>
          </Link>
        </div>
        <div className="left">
          <Link href="/store/services" as="/loja/servicos">
            <a>Serviços</a>
          </Link>
        </div>
        <div className="left">
          <Link href="/network/map" as="/rede/mapa">
            <a>Rede</a>
          </Link>
        </div>

        {/* <div className='left'><Link href='/testride'><a>
          Test-ride
        </a></Link></div> */}
      </div>

      <div className="right">
        <HeaderMenu />
      </div>
    </header>
    <div className="app-content" onClick={handleContentClick}>
      {children}
    </div>
    <Footer />

    <style jsx>{`
      .header {
        display: flex;
        justify-content: space-between;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 1001;
        width: 100%;
        background-color: ${offBlack};
      }
      .app-content {
        margin-top: 3.5rem;
        position: relative;
      }
      header > div {
        display: flex;
      }
      header > div :global(a) {
        display: flex;
        justify-content: center;
        align-items: center;
        color: ${offWhite};
        font-weight: 500;
        min-height: 3rem;
        font-size: 1rem;
      }
      .top :global(.Logo) {
        width: 2rem;
        height: 2rem;
        display: block;
      }
      .top .logo {
        min-width: 3rem;
        padding: 0.25rem;
      }
      .top .left {
        display: none;
      }
      .right {
        right: 0;
        padding: 0.25rem;
      }
      .right :global(a) {
        min-width: 3rem;
      }
      .blackfriday a {
        font-weight: bold;
        color: #db9612;
      }
      @media only screen and (min-width: 768px) {
        header {
          flex-direction: row;
          height: 3.5rem;
          bottom: 0;
          right: initial;
        }
        .app-content {
          margin-top: 3.5rem;
          margin-left: 0;
        }
        header > div {
          flex-direction: row;
        }
        .top .left {
          display: flex;
          padding: 0 1.2rem;
        }
        .right {
          right: 0;
          background-color: ${offBlack};
        }
        .right :global(.CartIcon) {
          fill: ${offWhite};
        }
      }
    `}</style>
  </>
);

Header.propTypes = {
  children: PropTypes.node,
  handleContentClick: PropTypes.func,
  isMenuOpen: PropTypes.bool,
  isCartOpen: PropTypes.bool,
};

export default compose(
  withOpenDrawer,
  withProps(({ openDrawer }) => ({
    isCartOpen: openDrawer === "CART",
    isMenuOpen: openDrawer === "MENU",
  })),
  withHandlers({
    handleContentClick:
      ({ dispatch, isCartOpen, isMenuOpen }) =>
      (e) => {
        return (isCartOpen || isMenuOpen) && dispatch(toggleDrawer(null));
      },
  })
)(Header);
