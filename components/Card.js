import { BackIcon } from 'components/Icons'
import PropTypes from 'prop-types'
import { white } from '../style/colors'

const Card = ({ children, onBackClick, media }) =>
  <div className='Card'>
    {media && <div className='media'>
      {media}
    </div>}
    {children && <div className='content'>
      {children}
    </div>}
    {onBackClick && <a href='#' onClick={onBackClick}>
      <BackIcon />
    </a>}
    <style jsx>{`
      .Card {
        box-shadow: 0px .75rem 1rem -1.25rem rgba(20,20,20, 0.8);
        position: relative;
        background: ${white}
      }
      .content {
        padding: 2rem;
      }
      .media {
        position
      }
      a {
        position: absolute;
        right: 0;
        top: 0;
        padding: 1rem;
      }
    `}</style>
  </div>

Card.propTypes = {
  children: PropTypes.node,
  media: PropTypes.node,
  onBackClick: PropTypes.func
}

export default Card
