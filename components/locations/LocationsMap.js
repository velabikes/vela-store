import { compose, withState, withProps } from 'recompose'
import Map from 'components/Map'
import MapMarker from 'components/MapMarker'
import LocationInfo from 'components/locations/LocationInfo'
import { BackIcon } from 'components/Icons'
import LocationFilter from './LocationFilter';

const LocationsMap = ({ locations, setSelected, selected, setFilter }) =>
  <div className='LocationsMap'>
    <Map onClick={e => e.event.target.nodeName === 'DIV' && setSelected(null)}>
      {locations.map(({ pos, type }, i) =>
        <MapMarker
          lat={pos.lat}
          lng={pos.lng}
          type={type}
          onClick={() => setSelected(i)}
          selected={selected === i}
          disabled={selected !== null && selected !== i}
        />
      )}
    </Map>
    <div className='filter'>
      <LocationFilter onFilterSelect={filter => setFilter(filter)} />
    </div>
    { selected !== null &&
      <div className='info'>
        <a onClick={() => setSelected(null)}>
          <BackIcon />
        </a>
        <LocationInfo {...locations[selected]} />
      </div>
    }
    <style jsx>{`
      .LocationsMap {
        height: 100%
      }
      .info {
        position: absolute;
        top: 1rem; left: 1rem; right: 1rem;
        padding: 2rem;
        background-color: #f5f5f5;
        box-shadow: 0px 18px 9px -18px rgba(100,100,100,0.3);
      }
      .info a {
        position: absolute;
        right: 1rem;
        top: 1rem;
      }
      .filter {
        position: absolute;
        bottom: 1rem; left: 1rem;
      }
      @media only screen and (min-width: 768px) {
        .info {
          max-width: 340px;
        }
      }
    `}</style>
  </div>

export default compose(
  withState('selected', 'setSelected', null),
  withState('filter', 'setFilter', null),
  withProps(
    ({ filter, locations }) => ({
      locations: filter ? locations.filter(filter) : locations
    })
  )
)(LocationsMap)
