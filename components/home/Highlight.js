import Grid from 'components/Grid'
import Button from 'components/Button'
import PaddedView from 'components/PaddedView'
import Section from 'components/Section'
import Link from 'next/link'
import SectionHeader from 'components/SectionHeader'
import { HideOnMobile, HideOnDesktop } from 'components/HideOn'

const Highlight = () => {
  return (
    <Link href='/store?handle=vela-1' as='/loja/vela-1'>
      <PaddedView style={{ background: '#edeef2' }}>
        <Grid template='repeat(auto-fit, minmax(320px, 1fr))'>
          <Section>
            <Grid template='1fr 1fr'>
              <SectionHeader title='Vela 1' />
              <HideOnMobile><Button primary outline>Saiba +</Button></HideOnMobile>
            </Grid>
            <p className='teaser'>A combinação perfeita entre design clássico e tecnologia de ponta.</p>
            <p>A Vela é uma bicicleta elétrica completa para o uso diário urbano, com funcionamento simples, baixa manutenção e muito conforto.</p>
            <br />
            <Grid template='1fr 1fr'>
              <div className='detail'>
                <strong>até 30km</strong>
                <div>autonomia da bateria</div>
              </div>
              <div className='detail'>
                <strong>350W</strong>
                <div>potência do motor</div>
              </div>
            </Grid>
            <HideOnDesktop><br /><Button primary outline>Saiba +</Button></HideOnDesktop>
          </Section>
          <div className='image'>
            <img src='/static/home/vela-1-frente.png' alt='Vela 1 Quadro Baixo de Frente' />
          </div>
        </Grid>
        <style jsx>{`
          .teaser {
            font-size: 1.2em;
          }
          .detail {
            text-align: center;
            padding: 1rem;
          }
          .detail strong {
            font-size: 1.5em;
          }
          .image {
            align-self: end;
            overflow: hidden;
            margin-top: 1em;
          }
        `}</style>
      </PaddedView>
    </Link>
  )
}

export default Highlight
