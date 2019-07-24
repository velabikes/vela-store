import Section from 'components/Section'
import SectionHeader from 'components/SectionHeader'
import Grid from 'components/Grid'

const HowWorks = () =>
  <Section className='how-works'>
    <SectionHeader title='Como funciona?' />

    <Grid template='1fr 1fr 1fr'>
      <div className='card'>
        <img src='/static/low-battery.png' />
        <div className='description'>
          <h2>Ficou sem bateria?</h2>
          <p>Fique tranquilo!<br />
          Agora você pode recarregar pelo caminho.</p>
        </div>
      </div>

      <div className='card'>
        <img src='/static/find-vela-point.png' />
        <div className='description'>
          <h2>Procure um ponto Vela</h2>
          <p>Basta conferir no mapa nossa rede de cafés parceiros.</p>
        </div>
      </div>

      <div className='card last'>
        <img src='/static/wait.png' />
        <div className='description'>
          <h2>Espere 10 minutos</h2>
          <p>Relaxe, tome um café e aproveite o fim do percurso sem se preocupar.</p>
        </div>
      </div>
    </Grid>

    <style>{`
      .card h2 {
        margin-bottom: 0;
        margin-top: 1rem;
        font-size: 1.5rem;
      }
      .card .description {
        text-align: center;
        margin: 0 auto;
        max-width: 250px
      }
    `}</style>
  </Section>

export default HowWorks
