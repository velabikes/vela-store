import PropTypes from "prop-types";
import { compose, withState, withProps } from "recompose";
import Map from "components/Map";
import MapMarker from "components/MapMarker";
import LocationInfo from "components/locations/LocationInfo";
import Card from "components/Card";
import LocationFilter from "./LocationFilter";

const LocationsMap = ({
  locations,
  filterLocations,
  setSelected,
  selected,
  setFilter,
  filter,
}) => (
  <div className="LocationsMap">
    <Map
      onClick={(e) => e.event.target.nodeName === "DIV" && setSelected(null)}
    >
      {locations.map(({ pos, type, googlePlace }, i) => (
        <MapMarker
          lat={pos.lat}
          lng={pos.lng}
          type={type[0]}
          onClick={() => setSelected(i)}
          selected={selected === i}
          disabled={selected !== null && selected !== i}
          hidden={filterLocations && !filterLocations.includes(locations[i])}
          key={googlePlace}
        />
      ))}
    </Map>
    <div className="filter">
      <LocationFilter
        onFilterSelect={(newFilter) => {
          setFilter(filter === newFilter ? null : newFilter);
          setSelected(null);
        }}
        selectedFilter={filter}
      />
    </div>
    {selected !== null && (
      <div className="info">
        <Card onBackClick={() => setSelected(null)}>
          <LocationInfo {...locations[selected]} />
        </Card>
      </div>
    )}
    <style jsx>{`
      .LocationsMap {
        position: relative;
        height: 100%;
        z-index: 1;
      }
      .info {
        position: absolute;
        top: 1rem;
        left: 1rem;
        right: 1rem;
        background-color: #f5f5f5;
      }
      
      .filter {
        position: absolute;
        top: 0rem;
        left: 50%;
        transform: translateX(-50%);
      }
      @media only screen and (min-width: 768px) {
        .info {
          max-width: 340px;
        }
        .filter {
          top: auto;
          bottom: 1rem;
        }
      }
    `}</style>
  </div>
);

LocationsMap.propTypes = {
  locations: PropTypes.object,
  filterLocations: PropTypes.object,
  setSelected: PropTypes.func,
  selected: PropTypes.string,
  setFilter: PropTypes.func,
  filter: PropTypes.object,
};

export default compose(
  withState("selected", "setSelected", null),
  withState("filter", "setFilter", null),
  withProps(({ filter, locations }) => ({
    filterLocations: filter
      ? locations.filter(({ type }) => type.includes(filter))
      : null,
  }))
)(LocationsMap);
