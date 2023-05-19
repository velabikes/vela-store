import { compose, lifecycle, withState } from 'recompose'
import GoogleMapReact from 'google-map-react'
import styles from 'components/MapStyles'

const Map = ({ children, initialCenter, isLoading, ...props }) =>
  !isLoading && <GoogleMapReact
    bootstrapURLKeys={{ key: 'AIzaSyDPIMs29240aTRj5izYnWSRfmKucLR0cwY' }}
    defaultZoom={13}
    defaultCenter={initialCenter || { lat: -23.5350, lng: -46.7053 }}
    options={{
      styles: styles,
      mapTypeControl: false,
      streetViewControl: false,
      zoomControl: false,
      fullscreenControl: false,
      gestureHandling: 'greedy'
    }}
    {...props}
  >
    {children}
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
