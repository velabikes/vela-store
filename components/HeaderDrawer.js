import { lightGray } from '../style/colors'

const HeaderDrawer = ({ children, visible }) =>
  <div className='HeaderDrawer'>
    {children}
    <style jsx>{`
      .HeaderDrawer {
        position: fixed;
        left: 5em;
        transform: translateX(${visible ? '0' : '-100%'});
        transition: 1s all;
        top: 0;
        bottom: 0;
        background-color: ${lightGray};
        box-shadow: 0px 0px ${visible ? '12' : '0'}px 0px rgba(0,0,0,0.1);
      }
    `}</style>
  </div>

export default HeaderDrawer
