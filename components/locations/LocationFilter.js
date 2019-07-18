const LocationFilter = ({ onFilterSelect }) =>
  <div>
    <a onClick={() => onFilterSelect(() => ({type}) => type === 'store')}>
      lojas
    </a>
    <a onClick={() => onFilterSelect(() => ({type}) => type === 'charger')}>
      recarga rapida
    </a>
  </div>

export default LocationFilter
