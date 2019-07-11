import { MarkerStoreIcon, MarkerChargerIcon } from './Icons'

const MapMarker = ({ onClick, selected, disabled }) =>
  <div onClick={onClick}>
    <MarkerChargerIcon />
    <style jsx>{`
      div {
        font-size: 2rem;
        width: 2rem;
        height: 2rem;
        transform: translate3d(-50%, ${selected ? -150 : -90}%, 0) scale(${selected ? 2 : 1});
        filter: saturate(${disabled ? 0 : 1});
        transition: .4s all;
      }
    `}</style>
  </div>

export default MapMarker
