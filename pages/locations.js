import fetch from 'isomorphic-fetch'
import PaddedView from '../components/PaddedView'
import { velaGreen } from '../style/colors'

const Locations = ({ stores }) =>
  <>
    {console.log(stores)}
    <PaddedView className='Stores'>
      <h1>Nossas Lojas</h1>
      <h4>
        Conheça a Vela, faça test-rides, tome um cafe, escreva um texto para aparecer no nosso site sobre nossas lojas. Aqui deveria ter algo legal escrito.
      </h4>
      <br />
      {stores && stores.map((store, i) =>
        <div
          className='store'
          key={store.placeid}
          style={{ backgroundImage: 'url(https://maps.googleapis.com/maps/api/place/photo?maxwidth=1080&photoreference=' + store.photos[0].photo_reference + '&key=AIzaSyDPIMs29240aTRj5izYnWSRfmKucLR0cwY' }}
        >
          <div className={`info ${(i % 2) && 'right'}`}>
            <h1>{store.address_components[3].long_name}</h1>
            <h4><address>{store.vicinity}</address></h4>
            <table className='hours'>
              {store.opening_hours.weekday_text.map(day =>
                <tr><td>{day.split(/:(.+)/)[0]}</td><td>{day.split(/:(.+)/)[1]}</td></tr>
              )}
            </table>
          </div>
        </div>
      )}
    </PaddedView>
    <style jsx>{`
      .store {
        background-size: cover;
        padding: 2em;
        background-position: center;
        margin-bottom: 3em;
      }
      .info {
        background: ${velaGreen};
        padding: 2em;
        width: 300px;
      }
      .info.right {
        margin-left: auto
      }
      .info h1, .info h4, .info table {
        color: white
      }
      .info h1 {
        margin-bottom: 0
      }
      table {
        text-transform: capitalize
      }
      table td:last-child {
        text-align: right
      }

    `}</style>
  </>

Locations.getInitialProps = async ({ req }) => {
  const baseUrl = req ? `https://${req.headers.host}` : ''
  const response = await fetch(baseUrl + '/api/stores')
  const json = await response.json()

  return json
}

export default Locations
