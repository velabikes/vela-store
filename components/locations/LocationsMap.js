import Map from 'components/Map'
import MapMarker from 'components/MapMarker'

const LocationsMap = ({ locations }) =>
  <div>
    <Map>
      {locations.map(({ pos, name }) =>
        <MapMarker
          lat={pos.lat}
          lng={pos.lng}
          onClick={() => alert('i')}
        />
      )}
    </Map>
    <style jsx>{`
      div {
        height: 100%
      }
    `}</style>
  </div>
export default LocationsMap
