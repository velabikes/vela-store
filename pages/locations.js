import fetch from 'isomorphic-fetch'
import PaddedView from '../components/PaddedView'
import { velaGreen } from '../style/colors'

const Locations = ({ stores }) =>
  <>
    {console.log(stores)}
    <PaddedView className='Stores'>
      <h1>Nossas Lojas</h1>
      <h5>
        Conheça a Vela, faça test-rides, tome um cafe, escreva um texto para aparecer no nosso site sobre nossas lojas. Aqui deveria ter algo legal escrito.
      </h5>
      {stores && stores.map(store =>
        <div
          className='store'
          key={store.placeid}
          style={{ backgroundImage: 'url(https://maps.googleapis.com/maps/api/place/photo?maxwidth=1080&photoreference=' + store.photos[0].photo_reference + '&key=AIzaSyDPIMs29240aTRj5izYnWSRfmKucLR0cwY' }}
        >
          <div className='info'>
            <h1>{store.address_components[3].long_name}</h1>
            <h4><address>{store.vicinity}</address></h4>
            <p className='hours'>
              {store.opening_hours.weekday_text.map(day =>
                <div>{day}</div>
              )}
            </p>
          </div>
        </div>
      )}
    </PaddedView>
    <style jsx>{`
      .store {
        background-size: cover;
      }
      .info {
        background: ${velaGreen};
        padding: 1px 20px;
        width: 300px;
        margin-bottom: 3em;
      }
      .info h1, h4, p {
        color: white
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
