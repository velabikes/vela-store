import { compose, withProps, withHandlers } from 'recompose'
import PropTypes from 'prop-types'
import Link from 'next/link'
import { toggleDrawer } from '../lib/redux'
import { offBlack, white, velaGreen } from '../style/colors'
import withOpenDrawer from '../containers/withOpenDrawer'
import Cart from './store/Cart'
import HeaderDrawer from './HeaderDrawer'
import HeaderMenu from './HeaderMenu'
import MainMenu from './MainMenu'
import Footer from './Footer'
import { Logo } from './Icons'

/* eslint-disable */
const Header = ({ isCartOpen, isMenuOpen, children, handleContentClick }) =>
  <>
    <HeaderDrawer visible={isCartOpen}><Cart /></HeaderDrawer>
    <HeaderDrawer visible={isMenuOpen}>
      <MainMenu />
    </HeaderDrawer>
    <header className='header'>
      <div className='top'>
        <div className='logo'><Link href='/'><a>
          <Logo />
        </a></Link></div>
        <div className='left'><Link href='/vela'><a>
          Vela 2
        </a></Link></div>
        <div className='left'><Link href='/store?handle=vela-1' as='/loja/vela-1'><a>
          Vela 1
        </a></Link></div>
        <div className='left'><Link href='/store' as='/loja'><a>
          Acessórios
        </a></Link></div>
        <div className='left'><Link href='/network/map' as='/rede/mapa'><a>
          Rede
        </a></Link></div>
        <div className='left'><Link href='/blog'><a>
          Blog
        </a></Link></div>
        <div className='left'><Link href='/contact' as='/contato'><a>
          Contato
        </a></Link></div>
        <div className='left'><Link href='/invest' as='/investir'><a>
          Investir
        </a></Link></div>
      </div>
      <div className='right'>
        <HeaderMenu />
      </div>
    </header>
    <div className='app-content' onClick={handleContentClick}>
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
        background-color: ${white};
        box-shadow: 0px 0px 9px 0px rgba(100,100,100,0.3);
      }
      .app-content {
        margin-top: 3rem;
        position: relative;
        min-height: calc(100vh - 3rem);
      }
      header > div {
        display: flex;
      }
      header > div :global(a) {
        display: flex;
        justify-content: center;
        align-items: center;
        color: ${offBlack};
        font-weight: 500;
        min-height: 3rem;
        font-size: 0.8rem;
      }
      .top :global(.Logo) {
        width: 1.5rem;
        height: 1.5rem;
        display: block;
      }
      .top .logo {
        min-width: 3rem;
      }
      .top .left {
        display: none;
      } 
      .right {
        right: 0;
      }
      .right :global(a) {
        min-width: 3rem;
      }
      @media only screen and (min-width: 768px) {
        header {
          flex-direction: row;
          height: 3rem;
          bottom: 0;
          right: initial;
        }
        .app-content {
          margin-top: 3rem;
          margin-left: 0;
          min-height: calc(100vh - 3rem);
          min-height: calc(var(--vh, 1vh) * 100 - 3rem);
        }
        header > div {
          flex-direction: row;
        }
        .top .left {
          display: flex;
          padding: 0 1rem;
        } 
        .right {
          right: 0;
          padding-left: 0.5rem;
          background-color: ${velaGreen};
          border-radius: 3rem 0 0 3rem;
        }
        .right :global(.CartIcon) {
          fill: ${white};
        }
      }
    `}</style>
  </>

Header.propTypes = {
  children: PropTypes.node,
  handleContentClick: PropTypes.func,
  isMenuOpen: PropTypes.bool,
  isCartOpen: PropTypes.bool
}

export default compose(
  withOpenDrawer,
  withProps(({ openDrawer }) => ({ isCartOpen: openDrawer === 'CART', isMenuOpen: openDrawer === 'MENU' })),
  withHandlers({
    handleContentClick: ({ dispatch, isCartOpen, isMenuOpen }) => e => {
      return (isCartOpen || isMenuOpen) && dispatch(toggleDrawer(null))
    }
  })
)(Header)
