import { lightGray } from '../style/colors'

const HeaderDrawer = ({ children, visible }) =>
  <div className='HeaderDrawer'>
    {children}
    <style jsx>{`
      .HeaderDrawer {
        position: fixed;
        transform: translateX(${visible ? '0' : '-100%'});
        transition: ${visible ? '.5s all ease-out' : '.3s all ease-in'};
        top: 4em;
        bottom: 0;
        background-color: ${lightGray};
        box-shadow: 0px 0px ${visible ? '8' : '0'}px 0px rgba(100,100,100,0.3);
        display: flex;
        flex-direction: column;
        padding: 0em 1em 1em;
        min-width: 300px;
        max-width: 100vw;
        z-index: 1000;
      }
      .HeaderDrawer :global(div:first-child) {
        flex: 1;
      }
      .HeaderDrawer :global(div) {
        opacity: ${visible ? '1' : '0'};
        transition: .2s opacity ${visible ? '.3s ease-in' : 'ease-out'};
      }
      @media only screen and (min-width: 768px) {
        .HeaderDrawer {
          left: 5em;
          top: 0;
          max-width: 40vw;
        }
      }
    `}</style>
  </div>

export default HeaderDrawer
