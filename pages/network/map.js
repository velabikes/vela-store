import PropTypes from 'prop-types'
import fetch from 'isomorphic-fetch'
import Head from 'next/head'
import LocationsMap from 'components/locations/LocationsMap'

const LocationsMapPage = ({ locations }) =>
  <div>
    <Head>
      <title>Rede - Vela Bikes</title>
    </Head>
    <LocationsMap locations={locations} />
    <style jsx>{`
      div {
        height: calc(100vh - 3.5em);
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
      }
      :global(footer){
        display: none;
      }
      :global(body) {
        overflow: visible;
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
