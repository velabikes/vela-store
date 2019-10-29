import PropTypes from 'prop-types'
import Head from 'next/head'
// import fetch from 'isomorphic-fetch'
import Main from 'components/Main'
import MainHeader from 'components/MainHeader'
import LocationInfo from 'components/locations/LocationInfo'
import PaddedView from 'components/PaddedView'
import Card from 'components/Card'
import Inverter from 'components/Inverter'

const Locations = ({ stores }) =>
  <PaddedView className='Stores'>
    <Head>
      <title>Conheça nossas bikes em uma loja Vela</title>
      <meta name='description' content='Venha conhecer uma de nossas lojas oficiais, estamos em São Paulo, Brasilia, Curitiba e Rio de Janeiro' />
    </Head>
    <Main>
      <MainHeader
        title='Nossas Lojas'
        tagline='Conheça nossos produtos em uma loja Vela'
      />
      <p>
        Oferecemos em nossas lojas experiências de test-ride, serviços, ampla gama de acessórios e café fresco, em ambiente confortável e inclusivo para o universo do ciclismo e da mobilidade urbana elétrica.
      </p>
      <br />
      {stores && stores.map(({ photo, ...locationInfo }) =>
        <div
          className='store'
          key={photo}
          style={{ backgroundImage: `url(${photo})` }}
        >
          <Inverter>
            <Card>
              <LocationInfo {...locationInfo} />
            </Card>
          </Inverter>
        </div>
      )}
    </Main>
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
      .store :global(.Card) {
        max-width: 360px;
        margin-left: auto
      }
      @media only screen and (min-width: 768px) {
        .store {
          padding-top: 12em;
        }
      }
    `}</style>
  </PaddedView>

Locations.propTypes = {
  stores: PropTypes.object
}

Locations.getInitialProps = () => {
  const stores = [{
    name: 'Vela São Paulo',
    address: ['Rua Cunha Gago, 169', 'Pinheiros'],
    photo: 'https://gallery.mailchimp.com/68a0cce7cc109d78a8b44d7a0/images/35c08168-1a75-4125-b6e9-51fd31e46fc1.jpg',
    hours: [
      ['Dom', 'Fechado'],
      ['Seg', 'Fechado'],
      ['Ter', '10:00 - 19:00'],
      ['Qua', '10:00 - 19:00'],
      ['Qui', '10:00 - 19:00'],
      ['Sex', '10:00 - 19:00'],
      ['Sáb', '09:00 - 18:00']
    ]
  }, {
    name: 'Vela Curitiba',
    address: ['Alameda Prudente de Moraes 1071', 'Centro'],
    photo: 'https://gallery.mailchimp.com/68a0cce7cc109d78a8b44d7a0/images/f6dfc4d8-5992-453c-929a-5fe2f2c44010.jpg',
    hours: [
      ['Dom', 'Fechado'],
      ['Seg', 'Fechado'],
      ['Ter', '10:00 - 19:00'],
      ['Qua', '10:00 - 19:00'],
      ['Qui', '10:00 - 19:00'],
      ['Sex', '10:00 - 19:00'],
      ['Sáb', '09:00 - 18:00']
    ]
  }]

  return { stores }
}

export default Locations
