import React from 'react'
import { compose, withProps } from 'recompose'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps'

const Map = (props) =>
  <GoogleMap
    defaultZoom={4}
    defaultCenter={{ lat: -14.2350, lng: -51.8053 }}
    defaultOptions={{
      mapTypeControl: false,
      streetViewControl: false,
      fullscreenControl: false
    }}
  >
    {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} onClick={props.onMarkerClick} />}
  </GoogleMap>

export default compose(
  withProps({
    googleMapURL: 'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDPIMs29240aTRj5izYnWSRfmKucLR0cwY',
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(Map)
