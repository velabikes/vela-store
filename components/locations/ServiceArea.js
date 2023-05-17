// ServiceArea.js
import React from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";
import ServiceAreaPolygon from "./ServiceAreaPolygon";

const mapStyles = {
  width: "100%",
  height: "100%",
};

const ServiceArea = (props) => {
  return (
    <Map
      google={props.google}
      zoom={13}
      style={mapStyles}
      initialCenter={{ lat: -23.5383502, lng: -46.7789838 }}
    >
      <ServiceAreaPolygon />
    </Map>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyBrrPA1Bxkep6H53DDe5GrQVTFM90Xawag",
})(ServiceArea);
