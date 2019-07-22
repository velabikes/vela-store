import Tag from 'components/Tag'
import { MarkerChargerIcon, MarkerStoreIcon } from 'components/Icons'

const LocationTag = ({type, ...props}) =>
  <Tag
    label={typeToLabel(type)}
    icon={typeToIcon(type)}
    {...props}
  />

const typeToLabel = type => {
  switch(type) {
    case 'charger':
      return 'Carga Rápida'
    case 'store':
      return 'Loja'
    default:
      return '?'
  }
}

const typeToIcon = type => {
  switch(type) {
    case 'charger':
      return <MarkerChargerIcon />
    case 'store':
      return <MarkerStoreIcon />
    default:
      return '?'
  }
}

export default LocationTag
