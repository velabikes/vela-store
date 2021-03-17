import Section from 'components/Section'
import SectionHeader from 'components/SectionHeader'
import Button from 'components/Button'

const VelaPoint = () =>
  <Section>
    <div className='PointBanner'>
      <div className='BannerTitle'>
        <SectionHeader
          title="Conheça agora a Rede Vela e pedale sem preocupações!"
          tagline="No mapa de serviços você encontra as lojas da Vela, pontos de recarga pela cidade e assistência autorizada."
        />
        <p>
          Entregamos em todo o país e contamos com apoio de diversos parceiros para te ajudar. Descubra os mais próximos de você.
        </p>
        <a href="/rede/mapa">
          <Button primary>Onde encontrar</Button>
        </a>
      </div>
      <div className='BannerImage'>
        <img src='https://firebasestorage.googleapis.com/v0/b/vela-c1f68.appspot.com/o/public%2Fvelastore%2FRedeVela.png?alt=media&token=d63d5018-1ab5-4874-b5f3-7cc623619a41' alt='Rede de serviços Vela' />
      </div>
      <style jsx>{`
      .PointBanner {
        position: relative;
        display: flex;
        flex-direction: column-reverse;
      }
      .BannerTitle {
        padding: 20px 0;
        text-align: center;
        display: flex;
        width: 100%;
        flex-direction: column;
        justify-content: center;
      }
      .BannerTitle :global(button) {
        margin-top: 1em;
      }
      @media only screen and (min-width: 768px) {
        .PointBanner {
          flex-direction: row;
          justify-content: space-around;
        }
        .BannerTitle {
          width: 30%;
          text-align: left;
        }
        .BannerImage img {
          max-height: 562px;
          width: auto;
          margin-bottom: 1em;
        }
      }
    `}</style>
    </div>
  </Section>

export default VelaPoint
