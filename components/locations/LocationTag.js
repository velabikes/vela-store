import PropTypes from "prop-types";
import Tag from "components/Tag";
import {
  MarkerChargerIcon,
  MarkerStoreIcon,
  MarkerServiceIcon,
  MarkerAreaIcon,
  MarkerDeliveryIcon,
} from "components/Icons";

const LocationTag = ({ type, ...props }) => (
  <Tag label={typeToLabel(type)} icon={typeToIcon(type)} {...props} />
);

LocationTag.propTypes = {
  type: PropTypes.string,
};

const typeToLabel = (type) => {
  switch (type) {
    case "charger":
      return "Recarga";
    case "store":
      return "Loja";
    case "service":
      return "Oficina";

    default:
      return "?";
  }
};

const typeToIcon = (type) => {
  switch (type) {
    case "charger":
      return <MarkerChargerIcon />;
    case "service":
      return <MarkerServiceIcon />;
    case "store":
      return <MarkerStoreIcon />;

    default:
      return "?";
  }
};

export default LocationTag;
