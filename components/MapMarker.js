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

const MapMarker = ({ onClick, selected, disabled, type, hidden }) =>
  <div onClick={onClick}>
    <MapMarkerIcon type={type} />
    <style jsx>{`
      div {
        font-size: 4rem;
        width: 4rem;
        height: 4rem;
        transform: translate3d(-50%, ${selected ? -110 : -75}%, 0) scale(${selected ? 1 : 0.5});
        filter: saturate(${disabled ? 0.7 : 1});
        opacity: ${disabled ? 0.5 : 1};
        transition: .5s all cubic-bezier(0.175, 0.885, 0.32, 1.275);
        position: relative;
        z-index: ${disabled ? 'auto' : 1};
        cursor: pointer;
      }
      div {
        ${hidden && 'transform: translate3d(-50%, -75%, 0) scale(0)'}
      }
    `}</style>
  </div>

export default MapMarker
