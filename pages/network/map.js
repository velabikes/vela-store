import PropTypes from 'prop-types'
import fetch from 'isomorphic-fetch'
import LocationsMap from 'components/locations/LocationsMap'

const LocationsMapPage = ({ locations }) =>
  <div>
    <title>Onde encontrar: Descubra nossa rede de lojas, serviços e recarga pela cidade - Vela Bikes</title>
    <LocationsMap locations={locations} />
    <style jsx>{`
      div {
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
      }
    `}</style>
  </div>

LocationsMapPage.propTypes = {
  locations: PropTypes.object
}

LocationsMapPage.getInitialProps = async ({ req }) => {
  const baseUrl = req
    ? process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000'
      : `https://${req.headers.host}`
    : ''
  const response = await fetch(`${baseUrl}/api/locations`)
  const locations = await response.json()

  return { locations }
}

export default LocationsMapPage
