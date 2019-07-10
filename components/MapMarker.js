import { MarkerStoreIcon, MarkerChargerIcon } from './Icons'

const MapMarker = () =>
  <div>
    <MarkerChargerIcon />
    <style jsx>{`
      div {
        font-size: 3rem;
        width: 3rem;
        height: 3rem;
        transform: translate3d(-50%, -90%, 0)
      }
    `}</style>
  </div>

export default MapMarker
