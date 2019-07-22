import { BackIcon } from 'components/Icons'

const Card = ({children, onBackClick}) =>
  <div className='Card'>
    {children}
    {onBackClick && <a onClick={onBackClick}>
      <BackIcon />
    </a>}
    <style jsx>{`
      .Card {
        padding: 2rem;
        box-shadow: 0px 18px 9px -18px rgba(100,100,100, 0.3);
        position: relative;
      }
      a {
        position: absolute;
        right: 0;
        top: 0;
        padding: 1rem;
      }
    `}</style>
  </div>

export default Card
