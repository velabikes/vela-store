import { MarkerChargerIcon, MarkerStoreIcon } from 'components/Icons'
import { offWhite } from '../../style/colors';
import Tag from 'components/Tag';

const LocationFilter = ({ onFilterSelect, selectedFilter }) =>
  <div>
    <span>Filtrar por:</span>
    <Tag
      onClick={() => onFilterSelect("store")}
      label={<span><MarkerStoreIcon /> Lojas</span>}
      selected={selectedFilter == "store"}
    />
    <Tag
      onClick={() => onFilterSelect("charger")}
      label={<span><MarkerChargerIcon /> Recarga Rapida</span>}
      selected={selectedFilter == "charger"}
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
