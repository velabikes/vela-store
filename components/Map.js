import { compose, withProps, lifecycle, withState } from 'recompose'
import GoogleMapReact from 'google-map-react'
import MapMarker from './MapMarker'

const Map = ({ children, initialCenter, isLoading }) =>
  !isLoading && <GoogleMapReact
    bootstrapURLKeys={{ key: 'AIzaSyDPIMs29240aTRj5izYnWSRfmKucLR0cwY' }}
    defaultZoom={12}
    defaultCenter={initialCenter || { lat: -23.5350, lng: -46.7053 }}
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
  withState('initialCenter', 'setInitialCenter', null),
  lifecycle({
    async componentDidMount () {
      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(pos => {
          this.props.setInitialCenter({ lat: pos.coords.latitude, lng: pos.coords.longitude })
          this.props.setLoading(false)
        }, err => {
          console.log(err)
          this.props.setLoading(false)
        })
      } else {
        this.props.setLoading(false)
      }
    }
  })
)(Map)
