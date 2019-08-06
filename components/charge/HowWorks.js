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
          <h4>Acabou a bateria?</h4>
          <p>Fique tranquilo! Agora você pode recarregar pelo caminho.</p>
        </div>
      </div>

      <div className='card'>
        <img src='/static/find-vela-point.png' />
        <div className='description'>
          <h4>Encontre um Ponto Vela</h4>
          <p>Basta conferir no mapa nossa rede de cafés parceiros.</p>
        </div>
      </div>

      <div className='card last'>
        <img src='/static/wait.png' />
        <div className='description'>
          <h4>Espere 10 minutos</h4>
          <p>Aproveite, tome um café e curta o percurso sem se preocupar.</p>
        </div>
      </div>
    </Grid>

    <style>{`
      .card h4 {
        margin-bottom: 0;
        margin-top: 1rem;
      }
      .card .description {
        text-align: center;
        margin: 0 auto;
        max-width: 250px
      }
    `}</style>
  </Section>

export default HowWorks
