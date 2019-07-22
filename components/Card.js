import { BackIcon } from 'components/Icons'
import PropTypes from 'prop-types'

const Card = ({ children, onBackClick }) =>
  <div className='Card'>
    {children}
    {onBackClick && <a href='#' onClick={onBackClick}>
      <BackIcon />
    </a>}
    <style jsx>{`
      .Card {
        padding: 2rem;
        box-shadow: 0px 18px 10px -18px rgba(100,100,100, 0.6);
        position: relative;
      }
      a {
        position: absolute;
        right: 0;
        top: 0;
        padding: 1rem;
>>>>>>> 9c1f175b29e29fa9d8f757c3e495b22d8cf3cbab
      }
    `}</style>
  </div>

Card.propTypes = {
  children: PropTypes.node,
  onBackClick: PropTypes.func
}

export default Card
