import Section from 'components/Section'
import SectionHeader from 'components/SectionHeader'
import { darkGray } from '../../style/colors'

const HowWorks = () =>
  <Section className='how-works'>
    <SectionHeader title='Como funciona?' align='center' tagline='Descubra como utilizar nossa rede de recarga rápida:' />

    <div className='steps'>
      <div className='card'>
        <img src='/static/low-battery.png' alt='' />
        <div className='description'>
          <h3>Ficou sem bateria?</h3>
          <p>Fique tranquilo! Agora você pode recarregar pelo caminho.</p>
        </div>
      </div>

      <div className='card'>
        <img src='/static/find-vela-point.png' alt='' />
        <div className='description'>
          <h3>Procure um ponto Vela</h3>
          <p>Basta conferir no mapa nossa rede de cafés parceiros.</p>
        </div>
      </div>

      <div className='card last'>
        <img src='/static/wait.png' alt='' />
        <div className='description'>
          <h3>Espere 10 minutos</h3>
          <p>Relaxe, tome um café e aproveite o fim do percurso sem se preocupar.</p>
        </div>
      </div>
    </div>

    <style>{`
      .steps {
        display: flex;
        flex-direction: column;
      }
      .card h3 {
        color: ${darkGray};
      }
      .card img {
        padding: 2em 0;
      }
      .card .description {
        text-align: center;
        margin: 0 auto;
        max-width: 250px
      }
      @media only screen and (min-width: 768px) {
        .steps {
          flex-direction: row;
        }
      }
    `}</style>
  </Section>

export default HowWorks
