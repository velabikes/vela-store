import LocationsMap from 'components/locations/LocationsMap'

const LocationsMapPage = ({ locations }) =>
  <div>
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

LocationsMapPage.getInitialProps = async ({ req }) => {
  const baseUrl = req
    ? process.env.NODE_ENV === 'development' 
      ? 'http://localhost:3000'
      : `https://${req.headers.host}`
    : ''
  const response = await fetch(baseUrl + '/api/locations')
  const locations = await response.json()

  return { locations }
}

export default LocationsMapPage
