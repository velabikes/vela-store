import { MarkerChargerIcon, MarkerStoreIcon } from 'components/icons'
import { offWhite } from '../../style/colors';
import Button from '../Button';

const LocationFilter = ({ onFilterSelect }) =>
  <div>
    <a onClick={() => onFilterSelect(() => ({ type }) => type === 'store')}>
      <MarkerStoreIcon /> lojas
    </a>
    <Button onClick={() => onFilterSelect(() => ({ type }) => type === 'charger')}>
      <MarkerChargerIcon /> recarga rapida
    </Button>
    <style jsx>{`
      div {
        background: ${offWhite};
        padding: 1rem;
      }
    `}</style>
  </div>

export default LocationFilter
