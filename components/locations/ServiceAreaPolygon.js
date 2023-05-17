import React from "react";
import Polygon from "./Polygon";

const polygonCoords = [
  { lat: -23.515067, lng: -46.7864171 },
  { lat: -23.5298514, lng: -46.7874812 },
  { lat: -23.5383502, lng: -46.7789838 },
  { lat: -23.5556608, lng: -46.7597575 },
  { lat: -23.5731264, lng: -46.7405313 },
  { lat: -23.5853983, lng: -46.7310899 },
  { lat: -23.5959385, lng: -46.7247382 },
  { lat: -23.6100956, lng: -46.7189017 },
  { lat: -23.6264531, lng: -46.7140952 },
  { lat: -23.6358892, lng: -46.7017354 },
  { lat: -23.642494, lng: -46.673926 },
  { lat: -23.6340021, lng: -46.6365035 },
  { lat: -23.6214203, lng: -46.6076641 },
  { lat: -23.5880728, lng: -46.5843178 },
  { lat: -23.5498384, lng: -46.5704129 },
  { lat: -23.5189232, lng: -46.5750138 },
  { lat: -23.4980658, lng: -46.5912361 },
  { lat: -23.4782285, lng: -46.6391303 },
  { lat: -23.4668915, lng: -46.7132887 },
  { lat: -23.4804328, lng: -46.7668476 },
  { lat: -23.515067, lng: -46.7864171 },
];

const options = {
  strokeColor: "#0000FF",
  strokeOpacity: 1,
  strokeWeight: 2,
  fillColor: "#0000FF",
  fillOpacity: 1,
};

const ServiceAreaPolygon = (props) => {
  return <Polygon path={polygonCoords} options={options} />;
};

export default ServiceAreaPolygon;
