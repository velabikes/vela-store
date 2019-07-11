import { compose, withState } from 'recompose'
import Map from 'components/Map'
import MapMarker from 'components/MapMarker'
import LocationInfo from 'components/locations/LocationInfo'

const LocationsMap = ({ locations, setSelected, selected }) =>
  <div className='LocationsMap'>
    <Map>
      {locations.map(({ pos, name }, i) =>
        <MapMarker
          lat={pos.lat}
          lng={pos.lng}
          onClick={() => setSelected(i)}
        />
      )}
    </Map>
    <div className='info'>
      <LocationInfo {...locations[selected]} />
    </div>
    <style jsx>{`
      .LocationsMap {
        height: 100%
      }
      .info {
        position: absolute;
        top: 2rem; left: 2rem;
        padding: 0 2rem 2rem;
        background-color: #f5f5f5;
      }
    `}</style>
  </div>

export default compose(
  withState('selected', 'setSelected', false)
)(LocationsMap)
