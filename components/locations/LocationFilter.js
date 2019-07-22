import { MarkerChargerIcon, MarkerStoreIcon } from 'components/Icons'
import { offWhite } from '../../style/colors';
import LocationTag from 'components/locations/LocationTag';

const LocationFilter = ({ onFilterSelect, selectedFilter }) =>
  <div>
    <span>Filtrar por:</span>
    <LocationTag
      onClick={() => onFilterSelect("store")}
      selected={selectedFilter == "store"}
      type='store'
    />
    <LocationTag
      onClick={() => onFilterSelect("charger")}
      selected={selectedFilter == "charger"}
      type='charger'
    />
    <style jsx>{`
      div {
        background: ${offWhite};
        padding: 1rem;
      }
      div > span {
        margin-right: .5em;
      }
    `}</style>
  </div>

export default LocationFilter
