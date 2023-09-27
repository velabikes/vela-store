import PropTypes from "prop-types";
import LocationTag from "components/locations/LocationTag";
import GrudiButton from "components/locations/GrudiButton";
import { darkGray, lightGray } from "../../style/colors";

const LocationsInfo = ({
  name,
  address,
  hours,
  phone,
  type,
  moreInfo,
  extra,
}) => (
  <article className="LocationsInfo">
    <h2>{name}</h2>
    <address>
      {address[0]} - {address[1]}
    </address>
    <p>{moreInfo}</p>
    <p>{phone}</p>
    <p className="disclaimer">{extra}</p>
    <table className="hours">
      {hours &&
        hours.map((hour) => (
          <tr>
            <td>{hour[0]}</td>
            <td>{hour[1]}</td>
          </tr>
        ))}
    </table>
    <br />
    {type && (
      <div className="tags">
        {type.map((type) => (
          <LocationTag type={type} />
        ))}
      </div>
    )}
    {}
    <style jsx>{`
      .tags,
      address {
        margin-bottom: 1rem;
        font-style: normal;
      }
      tr {
        text-transform: capitalize;
        font-size: 0.8em;
      }
      .disclaimer {
        font-size: 0.8em;
        font-wight: 30;
        color: ${darkGray};
      }
    `}</style>
  </article>
);

LocationsInfo.propTypes = {
  name: PropTypes.string,
  address: PropTypes.object,
  hours: PropTypes.object,
  type: PropTypes.string,
};

export default LocationsInfo;
