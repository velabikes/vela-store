import Grid from 'components/Grid'
import Button from 'components/Button'
import Price from 'components/Price'
import PaddedView from '../PaddedView'

const Highlight = () => {
  return (
    <PaddedView style={{ background: '#edeef2' }}>
      <section>
        <Grid template='1fr 1fr'>
          <div className='content'>
            <Grid template='1fr 1fr'>
              <h1>Vela 1</h1>
              <div><Button>Saiba +</Button></div>
            </Grid>
            <p style={{fontSize: '1.25em'}}>A combinação perfeita entre design clássico e tecnologia de ponta.</p>
            <p>A Vela é uma bicicleta elétrica completa para o uso diário urbano, com funcionamento simples, baixa manutenção e muito conforto.</p>
            <p><strong><Price value={5890} /></strong></p>
            <br />
            <Grid template='1fr 1fr'>
              <div className='detail'>
                <strong>até 40km</strong>
                <div>Potencia do motor.</div>
              </div>
              <div className='detail'>
                <strong>350W</strong>
                <div>Autonomia da bateria.</div>
              </div>
            </Grid>
          </div>
          <div>
            <img src='/static/home/vela-1-frente.png' alt='Vela 1 Quadro Baixo de Frente' />
          </div>
        </Grid>
      </section>
      <style jsx>{`
        .content {
          padding: 3rem 0;
        }
        .content > p > strong {
          font-size: 1.5em;
        }
        .detail {
          text-align: center;
        }
        .detail strong {
          font-size: 1.5em;
        }
      `}</style>
    </PaddedView>
  )
}

export default Highlight