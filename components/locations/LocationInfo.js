const LocationsInfo = ({ name, address, hours }) =>
  <div className={`LocationsInfo`}>
    <h1>{name}</h1>
    <h4><address>{address}</address></h4>
    <table className='hours'>
      {hours && hours.map(opening_hour =>
        !opening_hour.opening
          ? <tr>
              <td>{opening_hour.day}</td>
              <td>Fechado</td>
            </tr>
          : <tr>
              <td>{opening_hour.day}</td>
              <td>{opening_hour.openTime}h às {opening_hour.closeTime}h</td>
            </tr>
      )}
    </table>
  </div>

export default LocationsInfo
