// Polygon.js
import React, { useEffect } from "react";

const PolygonComponent = ({ map, maps, path, options }) => {
  useEffect(() => {
    if (map && maps) {
      const polygon = new maps.Polygon({
        paths: path,
        ...options,
      });

      polygon.setMap(map);

      return () => {
        polygon.setMap(null);
      };
    }
  }, [map, maps, path, options]);

  return null;
};

export default PolygonComponent;
