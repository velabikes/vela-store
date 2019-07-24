import LocationTag from 'components/locations/LocationTag'

const LocationsInfo = ({ name, address, hours, type }) =>
  <article className='LocationsInfo'>
    <h1>
      {name}
    </h1>
    <address>{address[0]} - {address[1]}</address>
    {type && <div className='tags'>{type.map(type => <LocationTag type={type} />)}</div>}
    <table className='hours'>
      {hours && hours.map(hour =>
        <tr>
          <td>{hour[0]}</td>
          <td>{hour[1]}</td>
        </tr>
      )}
    </table>
    <style jsx>{`
      h1, h4, .tags {
        margin-bottom: 1rem;
      }
      tr {
        text-transform: capitalize;
      }
    `}</style>
  </article>

export default LocationsInfo
