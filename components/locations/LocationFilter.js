import PropTypes from "prop-types";
import LocationTag from "components/locations/LocationTag";
import { white } from "../../style/colors";

const LocationFilter = ({ onFilterSelect, selectedFilter }) => (
  <div>
    <LocationTag
      onClick={() => onFilterSelect("store")}
      selected={selectedFilter === "store"}
      type="store"
    />
    <LocationTag
      onClick={() => onFilterSelect("charger")}
      selected={selectedFilter === "charger"}
      type="charger"
    />
    <LocationTag
      onClick={() => onFilterSelect("service")}
      selected={selectedFilter === "service"}
      type="service"
    />
    <LocationTag
      onClick={() => onFilterSelect("grudi")}
      selected={selectedFilter === "grudi"}
      type="grudi"
    />
    <style jsx>{`
      div {
        background: ${white};
        padding: 1rem;
        white-space: nowrap;
      }
    `}</style>
  </div>
);

LocationFilter.propTypes = {
  selectedFilter: PropTypes.string,
  onFilterSelect: PropTypes.func,
};

export default LocationFilter;
