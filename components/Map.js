import { compose, withProps, lifecycle, withState } from 'recompose'
import GoogleMapReact from 'google-map-react'
import MapMarker from './MapMarker'

const Map = ({ children }) =>
  <GoogleMapReact
    bootstrapURLKeys={{ key: 'AIzaSyDPIMs29240aTRj5izYnWSRfmKucLR0cwY' }}
    defaultZoom={12}
    defaultCenter={{ lat: -23.5350, lng: -46.7053 }}
    defaultOptions={{
      mapTypeControl: false,
      streetViewControl: false,
      fullscreenControl: false
    }}
  >
    <MapMarker lat={-23.567429054521625} lng={-46.693267822265625} />
  </GoogleMapReact>

export default compose(
  withState('isLoading', 'setLoading', true),
  lifecycle({
    async componentDidMount () {
      if ('geolocation' in navigator) {
        //const location = await navigator.geolocation.getCurrentPosition()
        this.props.setLoading(false)
        alert('oi')
      } else {
        this.props.setLoading(false)
      }
    }
  })
)(Map)
