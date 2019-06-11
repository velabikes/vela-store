import Head from 'next/head'
// import fetch from 'isomorphic-fetch'
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
        Conheça todas as versões da Vela através de nossas lojas exclusivas. Oferecemos experiências personalizadas de test-ride, serviços, ampla gama de acessórios e café fresco, em ambiente confortável e inclusivo para o universo do ciclismo e da mobilidade urbana elétrica.
      </h4>
      <br />
      {stores && stores.map(({ placeid, /*url,*/ city, address, photo, hours }, i) =>
        <div
          className='store'
          key={placeid}
          style={{ backgroundImage: `url(${photo})` }}
        >
          <div className={`info ${(i % 2) && 'right'}`}>
            <h1>{city}</h1>
            <h4><address>{address}</address></h4>
            <table className='hours'>
              {hours.map(opening_hour =>
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

Locations.getInitialProps = () => {
  const stores = [{
    city: 'Vela São Paulo',
    address: 'Rua Cunha Gago, 169 - Pinheiros',
    photo: 'https://gallery.mailchimp.com/68a0cce7cc109d78a8b44d7a0/images/35c08168-1a75-4125-b6e9-51fd31e46fc1.jpg',
    hours: [
      { day: 'dom', opening: false },
      { day: 'seg', opening: false },
      { day: 'ter', opening: true, openTime: '10', closeTime: '19'},
      { day: 'qua', opening: true, openTime: '10', closeTime: '19'},
      { day: 'qui', opening: true, openTime: '10', closeTime: '19'},
      { day: 'sex', opening: true, openTime: '10', closeTime: '19'},
      { day: 'sáb', opening: true, openTime: '09', closeTime: '18'}
    ]
  },{
    city: 'Vela Brasília',
    address: 'SCLN 310 - Bloco D Loja 5 - Asa Norte',
    photo: 'https://gallery.mailchimp.com/68a0cce7cc109d78a8b44d7a0/images/c0b721d3-760d-4da0-a561-784d786a5801.jpg',
    hours: [
      { day: 'dom', opening: false },
      { day: 'seg', opening: false },
      { day: 'ter', opening: true, openTime: '09', closeTime: '18' },
      { day: 'qua', opening: true, openTime: '09', closeTime: '18' },
      { day: 'qui', opening: true, openTime: '09', closeTime: '18' },
      { day: 'sex', opening: true, openTime: '09', closeTime: '18' },
      { day: 'sáb', opening: true, openTime: '09', closeTime: '18' },
    ]
  }, {
    city: 'Vela Rio',
    address: 'Rua Aires de Saldanha, 28B - Copacabana',
    photo: 'https://gallery.mailchimp.com/68a0cce7cc109d78a8b44d7a0/images/3fac6c9a-2ee8-4040-9562-77d138901976.jpg',
    hours: [
      { day: 'dom', opening: false },
      { day: 'seg', opening: true, openTime: '09', closeTime: '18' },
      { day: 'ter', opening: false },
      { day: 'qua', opening: true, openTime: '09', closeTime: '18' },
      { day: 'qui', opening: true, openTime: '09', closeTime: '18' },
      { day: 'sex', opening: true, openTime: '09', closeTime: '18' },
      { day: 'sáb', opening: true, openTime: '09', closeTime: '18' },
    ]
  }, {
    city: 'Vela Curitiba',
    address: 'Alameda Prudente de Moraes 1071 - Centro',
    photo: 'https://gallery.mailchimp.com/68a0cce7cc109d78a8b44d7a0/images/c9dd1978-6fad-484d-a4b5-8ad4b5d5fb06.jpg',
    hours: [
      { day: 'dom', opening: false },
      { day: 'seg', opening: false },
      { day: 'ter', opening: true, openTime: '09', closeTime: '18' },
      { day: 'qua', opening: true, openTime: '09', closeTime: '18' },
      { day: 'qui', opening: true, openTime: '09', closeTime: '18' },
      { day: 'sex', opening: true, openTime: '09', closeTime: '18' },
      { day: 'sáb', opening: true, openTime: '09', closeTime: '18' },
    ]
  }]

  return { stores }
}

export default Locations
