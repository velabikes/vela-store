import LocationTag from 'components/locations/LocationTag'

const LocationsInfo = ({ name, address, hours, type }) =>
  <section className='LocationsInfo'>
    <h1>
      {name}
      <h4><address>{address[0]} - {address[1]}</address></h4>
    </h1>
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
  </section>

export default LocationsInfo
