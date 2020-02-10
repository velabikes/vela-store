import PropTypes from 'prop-types'
import { MarkerStoreIcon, MarkerChargerIcon, MarkerServiceIcon, MarkerParkingIcon } from './Icons'

const MapMarkerIcon = ({ type }) => {
  switch (type) {
    case 'charger':
      return <MarkerChargerIcon />
    case 'store':
      return <MarkerStoreIcon />
    case 'service':
      return <MarkerServiceIcon />
    case 'parking':
      return <MarkerParkingIcon />
    default:
      return null
  }
}

MapMarkerIcon.propTypes = {
  type: PropTypes.string
}

/* eslint-disable */
const MapMarker = ({ onClick, selected, disabled, type, hidden }) =>
  <div onClick={onClick}>
    <MapMarkerIcon type={type} />
    <style jsx>{`
      div {
        font-size: 4rem;
        width: 4rem;
        height: 4rem;
        transform: translate3d(-50%, ${selected ? -110 : -90}%, 0) scale(${selected ? 1 : 0.5});
        filter: saturate(${disabled ? 0.7 : 1});
        opacity: ${disabled ? 0.4 : 1};
        transition: .5s all cubic-bezier(0.175, 0.885, 0.32, 1.275);
        position: relative;
        z-index: ${disabled ? 'auto' : 1};
        cursor: pointer;
      }
      div {
        ${hidden && 'transform: translate3d(-50%, -50%, 0) scale(0)'}
      }
    `}</style>
  </div>
/* eslint-enable */

MapMarker.propTypes = {
  onClick: PropTypes.func,
  selected: PropTypes.bool,
  disabled: PropTypes.bool,
  type: PropTypes.string,
  hidden: PropTypes.string
}

export default MapMarker
