import { BackIcon } from 'components/Icons'
import PropTypes from 'prop-types'
import { offWhite } from '../style/colors'

const Card = ({ children, onBackClick }) =>
  <div className='Card'>
    {children}
    {onBackClick && <a href='#' onClick={onBackClick}>
      <BackIcon />
    </a>}
    <style jsx>{`
      .Card {
        padding: 2rem;
        box-shadow: 0px .75rem 1rem -1.25rem rgba(20,20,20, 0.8);
        position: relative;
        background: ${offWhite}
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
  onBackClick: PropTypes.func
}

export default Card
