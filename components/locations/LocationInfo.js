const LocationsInfo = ({ name, address, hours }) =>
  <div className={`LocationsInfo`}>
    <h1>{name}</h1>
    <h4><address>{address}</address></h4>
    <table className='hours'>
      {hours && hours.map(hour =>
        <tr>
          <td>{hour[0]}</td>
          <td>{hour[1]}</td>
        </tr>
      )}
    </table>
  </div>

export default LocationsInfo
