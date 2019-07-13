import { MarkerStoreIcon, MarkerChargerIcon } from './Icons'

const MapMarkerIcon = ({ type }) => {
  switch (type) {
    case 'charger':
      return <MarkerChargerIcon />
    case 'store':
      return <MarkerStoreIcon />
    default:
      return null
  }
}

const MapMarker = ({ onClick, selected, disabled, type }) =>
  <div onClick={onClick}>
    <MapMarkerIcon type={type} />
    <style jsx>{`
      div {
        font-size: 4rem;
        width: 4rem;
        height: 4rem;
        transform: translate3d(-50%, ${selected ? -100 : -75}%, 0) scale(${selected ? 1 : 0.5});
        filter: saturate(${disabled ? 0.5 : 1});
        opacity: ${disabled ? 0.7 : 1};
        transition: .4s all;
        position: relative;
        z-index: ${disabled ? 'auto' : 1};
        cursor: pointer;
      }
    `}</style>
  </div>

export default MapMarker
