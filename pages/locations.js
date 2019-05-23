import Head from 'next/head'
import fetch from 'isomorphic-fetch'
import PaddedView from '../components/PaddedView'
import { velaGreen } from '../style/colors'

const Locations = ({ stores }) =>
  <>
    <Head>
      <title>Conheça nossas bikes em uma loja Vela</title>
      <meta name='description' content='Venha conhecer uma de nossas lojas oficiais, estamos em São Paulo, Brasilia, Curitiba e Rio de Janeiro' />
    </Head>
    <PaddedView className='Stores'>
      <h1>Nossas Lojas</h1>
      <h4>
      Conheça todas as versões da Vela através de nossas lojas exclusivas. Temos como objetivo poder oferecer a melhor experiência de test-ride, serviços, ampla gama de acessórios, café fresco, ambiente confortável e inclusivo ao mundo do ciclismo e da mobilidade urbana elétrica.
      </h4>
      <br />
      {stores && stores.map((store, i) =>
        <div
          className='store'
          key={store.placeid}
          style={{ backgroundImage: 'url(https://maps.googleapis.com/maps/api/place/photo?maxwidth=1080&photoreference=' + store.photos[0].photo_reference + '&key=AIzaSyDPIMs29240aTRj5izYnWSRfmKucLR0cwY' }}
        >
          <div className={`info ${(i % 2) && 'right'}`}>
            <h1>{store.address_components[store.address_components.length-4].long_name}</h1>
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
        padding: 3em;
        background-position: center;
        margin-bottom: 3em;
      }
      .store:last-child {
        margin-bottom: 0;
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
      @media only screen and (min-width: 768px) {
        .store {
          padding-top: 12em;
        }
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
