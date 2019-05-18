import fetch from 'isomorphic-fetch'
import PaddedView from '../components/PaddedView'

const Locations = ({ stores }) =>
  <>
    {console.log(stores)}
    <PaddedView className='Stores'>
      <h1>Nossas Lojas</h1>
      <h5>
        Conheça a Vela, faça test-rides, tome um cafe, escreva um texto para aparecer no nosso site sobre nossas lojas. Aqui deveria ter algo legal escrito.
      </h5>
      {stores && stores.map(store =>
        <div className='store' key={store.placeid}>
          <div>
            <h2>{store.address_components[3].long_name}</h2>
            <address>{store.vicinity}</address>
            <div className='hours'>
              {store.opening_hours.weekday_text.map(day =>
                <div>{day}</div>
              )}
            </div>
          </div>
        </div>
      )}
    </PaddedView>
    <PaddedView>
      <div>
        <h2>Fale com a gente</h2>
        <div>contato@velabikes.com.br</div>
        <div>4200-4950</div>
      </div>
    </PaddedView>
  </>

Locations.getInitialProps = async ({ req }) => {
  const baseUrl = req ? `${req.protocol}://${req.headers.host}` : ''
  const response = await fetch(baseUrl + '/api/stores')
  const json = await response.json()

  return json
}

export default Locations
