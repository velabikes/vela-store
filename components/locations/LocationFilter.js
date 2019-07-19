import { MarkerChargerIcon, MarkerStoreIcon } from 'components/Icons'
import { offWhite } from '../../style/colors';
import Button from '../Button';

const LocationFilter = ({ onFilterSelect }) =>
  <div>
    <Button onClick={() => onFilterSelect(() => ({ type }) => type === 'store')}>
      <MarkerStoreIcon /> lojas
    </Button>
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
