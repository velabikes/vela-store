const LocationsInfo = ({ name, address, hours }) =>
  <section className={`LocationsInfo`}>
    <h1>
      {name}
      <h4><address>{address[0]} - {address[1]}</address></h4>
    </h1>
    <table className='hours'>
      {hours && hours.map(hour =>
        <tr>
          <td>{hour[0]}</td>
          <td>{hour[1]}</td>
        </tr>
      )}
    </table>
    <style jsx>{`
      tr {
        text-transform: capitalize;
      }
    `}</style>
  </section>

export default LocationsInfo
