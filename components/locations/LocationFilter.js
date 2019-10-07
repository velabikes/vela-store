import PropTypes from 'prop-types'
import LocationTag from 'components/locations/LocationTag'
import { offWhite } from '../../style/colors'

const LocationFilter = ({ onFilterSelect, selectedFilter }) =>
  <div>
    <span>Filtrar por:</span>
    <LocationTag
      onClick={() => onFilterSelect('store')}
      selected={selectedFilter === 'store'}
      type='store'
    />
    <LocationTag
      onClick={() => onFilterSelect('charger')}
      selected={selectedFilter === 'charger'}
      type='charger'
    />
    <LocationTag
      onClick={() => onFilterSelect('service')}
      selected={selectedFilter === 'service'}
      type='service'
    />
    <style jsx>{`
      div {
        background: ${offWhite};
        padding: 1rem;
        white-space: nowrap;
      }
      div > span {
        margin-right: .5em;
      }
    `}</style>
  </div>

LocationFilter.propTypes = {
  selectedFilter: PropTypes.string,
  onFilterSelect: PropTypes.func
}

export default LocationFilter
